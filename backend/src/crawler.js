const axios = require("axios");
const cheerio = require("cheerio");
const fs = require("fs");
const { isProductURL, normalizeURL } = require("./utils");

// Main crawler function
const crawlDomain = async (domain) => {
  const visited = new Set();
  const productURLs = new Set();
  const queue = [domain];

  while (queue.length > 0) {
    const currentURL = queue.shift();

    if (visited.has(currentURL)) continue;
    visited.add(currentURL);

    try {
      console.log(`Crawling: ${currentURL}`);
      const response = await axios.get(currentURL, { timeout: 10000 });
      const $ = cheerio.load(response.data);

      // Extract and process links on the page
      $("a").each((_, element) => {
        const href = $(element).attr("href");
        if (!href) return;

        const normalizedURL = normalizeURL(currentURL, href);
        if (normalizedURL && !visited.has(normalizedURL)) {
          if (isProductURL(normalizedURL)) {
            productURLs.add(normalizedURL);
          } else if (normalizedURL.startsWith(domain)) {
            queue.push(normalizedURL);
          }
        }
      });
    } catch (error) {
      console.error(`Failed to crawl ${currentURL}:`, error.message);
    }
  }

  return Array.from(productURLs);
};

// Main function to crawl multiple domains
const crawlDomains = async (domains) => {
  const results = {};

  for (const domain of domains) {
    console.log(`Starting crawl for domain: ${domain}`);
    const productURLs = await crawlDomain(domain);
    results[domain] = productURLs;
  }

  // Save results to a JSON file
  fs.writeFileSync("./output/product_urls.json", JSON.stringify(results, null, 2));
  console.log("Crawling completed. Results saved to ./output/product_urls.json");
};

// Load domains from config file
const domains = require("../config/domains.json");

crawlDomains(domains);
