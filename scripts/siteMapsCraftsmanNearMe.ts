import { ServiceCards } from "../constants/landingPage";

import fs from "fs";
import path from "path";
import "dotenv/config"; // Load environment variables
import { encodeSitemapUrl } from "@/helper/urlEncode";

function generateSiteMap() {
  const seoPages = ServiceCards;
  return `${seoPages
    .map((url) => {
      return `<url>
		<loc>${`${process.env.BASE_URL}/craftsman-near-me/${encodeSitemapUrl(
      url.slug
    )}`}</loc>
		<changefreq>daily</changefreq>
		<priority>1.0</priority>
	</url>`;
    })
    .join("")}`;
}

function generateXMLFile() {
  const seoPagesSitemap = generateSiteMap();
  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${seoPagesSitemap}
    </urlset>`;

  const filePath = path.join(
    process.cwd(),
    "public/sitemaps",
    "craftsman-near-me.xml"
  );

  fs.writeFileSync(filePath, sitemap, "utf8");

  console.log(`✅ Sitemap generated: ${filePath}`);
}

// Run the script
generateXMLFile();
