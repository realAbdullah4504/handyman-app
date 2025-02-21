import fs from "fs";
import path from "path";
import "dotenv/config"; // Load environment variables
import { ServiceCards } from "../constants/landingPage";
import { citySiteMaps } from "./SiteMapCities";
import { encodeSitemapUrl } from "../helper/urlEncode";

type PostalData = {
  Postal_Code: string;
  Place_Name: string;
};

async function fetchHandymanData(): Promise<PostalData[]> {
  const response = await fetch(
    `http://localhost:3000/api/find_handymans/get_sitemap_data`
  );
  if (!response.ok) {
    throw new Error(`Failed to fetch sitemap data`);
  }
  return response.json();
}

function generateSiteMapForHandymanSearch(
  posts: PostalData[],
  service: string
): string {
  const uniquePlaces = posts.reduce((acc: string[], post) => {
    const placeName = post.Place_Name
    if (!acc.includes(placeName)) {
      acc.push(placeName);
    }
    return acc;
  }, []);

  return uniquePlaces
    .map((Place_Name) => {
      return `<url>
		<loc>${`${process.env.BASE_URL}/findhandyman/${encodeSitemapUrl(service)}?city=${encodeSitemapUrl(Place_Name)}`}</loc>
		<changefreq>daily</changefreq>
		<priority>1.0</priority>
	</url>`;
    })
    .join("");
}


async function generateServiceSitemaps() {
  try {
    const handymanSearch = await fetchHandymanData();

    for (const service of ServiceCards) {
      const filteredPostals = handymanSearch.filter((postal) =>
        citySiteMaps.some(
          (filtered) =>
            postal.Place_Name.toLowerCase().includes(filtered.toLowerCase()) ||
            filtered.toLowerCase().includes(postal.Place_Name.toLowerCase())
        )
      );

      const handymanSearchSitemap = generateSiteMapForHandymanSearch(
        filteredPostals,
        service.slug
      );

      const sitemapContent = `<?xml version="1.0" encoding="UTF-8"?>
      <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
		  ${handymanSearchSitemap}
      </urlset>`;

      const filePath = path.join(
        process.cwd(),
        "public",
        "sitemaps",
        `${service.slug}.xml`
      );
      fs.writeFileSync(filePath, sitemapContent, "utf8");
      console.log(`✅ Sitemap generated: ${filePath}`);
    }
  } catch (error) {
    console.error("❌ Error generating sitemaps:", error);
  }
}

// Run the script
generateServiceSitemaps();
