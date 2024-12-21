# Web Crawler for Product URLs
Crawler for Discovering Product URLs on E-commerce Websites.
Design and implement a web crawler whose primary task is to discover and list all product URLs across multiple e-commerce websites. You will be provided with a list of domains belonging to various e-commerce platforms. The output should be a comprehensive list of product URLs found on each of the given websites.

## Project Structure

project-crawler ├── src │ ├── crawler.js (Main logic for crawling) │ └── utils.js (Helper functions like URL validation) ├── config │ └── domains.json (List of domains to crawl) ├── output │ └── product_urls.json (Output of product URLs for each domain) ├── README.md (Documentation) └── package.json (Dependencies and scripts)


## Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install axios cheerio

## Add your domains to config/domains.json. 

## Run the crawler: 
node src/crawler.js

## Git hub repo -  https://github.com/avinash-18-art/shoppin-bakend-assignment.git