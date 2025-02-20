import fs from "fs";
import path from "path";
import "dotenv/config"; // Load environment variables

interface Craftsman {
  company_name: string;
  updatedAt: string;
}

const API_URL = `${process.env.BASE_URL}/api/user/craftman/get_sitemap_data`;

async function fetchCraftsmanData(): Promise<Craftsman[]> {
  try {
    const response = await fetch(API_URL);
    if (!response.ok) throw new Error("Failed to fetch craftsman data");
    return await response.json();
  } catch (error) {
    console.error("Error fetching craftsman data:", error);
    return [];
  }
}

function generateSiteMapForCraftsmanProfile(posts: Craftsman[]): string {
  return posts
    .map(({ company_name, updatedAt }) => {
      return `
	<url>
		<loc>${`${process.env.BASE_URL}/craftsman/${company_name}`}</loc>
		<lastmod>${new Date(updatedAt).toISOString()}</lastmod>
		<changefreq>daily</changefreq>
		<priority>1.0</priority>
	</url>`;
    })
    .join("");
}

async function generateXMLFile() {
  const craftsman = await fetchCraftsmanData();
  const craftsmanProfileSitemap = generateSiteMapForCraftsmanProfile(craftsman);

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${craftsmanProfileSitemap}
    </urlset>`;

  const filePath = path.join(
    process.cwd(),
    "public",
    "sitemaps",
    "craftsman-profiles.xml"
  );

  fs.writeFileSync(filePath, sitemap, "utf8");

  console.log(`✅ Sitemap generated: ${filePath}`);
}

// Run the script
generateXMLFile();
