const axios = require('axios');
const cheerio = require('cheerio');
const { saveResults } = require('./utils/logger');
const { fetchPage } = require('./utils/requestHandler');
const { PRODUCT_PATTERNS } = require('./constants');
const { extractProductURLs } = require('./urlExtractor');

async function crawlDomain(domain) {
  console.log(`Crawling domain: ${domain}`);
  const visited = new Set();
  const queue = [domain];
  const productURLs = new Set();

  while (queue.length > 0) {
    const currentURL = queue.shift();

    if (visited.has(currentURL)) continue;
    visited.add(currentURL);

    try {
      const html = await fetchPage(currentURL);
      const $ = cheerio.load(html);

      // Extract product URLs
      const productLinks = extractProductURLs($, PRODUCT_PATTERNS, domain);
      productLinks.forEach((link) => productURLs.add(link));

      // Add more links to the queue
      $('a').each((_, element) => {
        const href = $(element).attr('href');
        if (href && !visited.has(href) && href.startsWith('/')) {
          const fullURL = new URL(href, domain).href;
          queue.push(fullURL);
        }
      });
    } catch (error) {
      console.error(`Error processing ${currentURL}: ${error.message}`);
    }
  }

  return Array.from(productURLs);
}

async function crawlDomains(domains) {
  const results = {};

  for (const domain of domains) {
    results[domain] = await crawlDomain(domain);
  }

  saveResults(results);
}

const domains = [
  'https://example1.com',
  'https://example2.com',
];

crawlDomains(domains).then(() => console.log('Crawling complete.'));
