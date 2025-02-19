import fs from "fs";
import path from "path";
import "dotenv/config"; // Load environment variables
import seoPagesUrls from "./siteMapsSeoPages/index.json";

function generateSiteMapForHandymanSearch(): string {
  return seoPagesUrls
    .map((url) => {
      return `
	<url>
		<loc>${`${process.env.BASE_URL}/cuanto-cuesta${url}`}</loc>
		<changefreq>daily</changefreq>
		<priority>2</priority>
	</url>`;
    })
    .join("");
}

function generateXMLFile() {
  const seoPagesSitemap = generateSiteMapForHandymanSearch();

  const sitemap = `<?xml version="1.0" encoding="UTF-8"?>
    <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
        ${seoPagesSitemap}
    </urlset>`;

  const filePath = path.join(
    process.cwd(),
    "public",
    "sitemaps",
    "cuanto-cuesta.xml"
  );

  fs.writeFileSync(filePath, sitemap, "utf8");

  console.log(`✅ Sitemap generated: ${filePath}`);
}

// Run the script
generateXMLFile();
