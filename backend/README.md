# Web Crawler for Product URLs
Crawler for Discovering Product URLs on E-commerce Websites.
Design and implement a web crawler whose primary task is to discover and list all product URLs across multiple e-commerce websites. You will be provided with a list of domains belonging to various e-commerce platforms. The output should be a comprehensive list of product URLs found on each of the given websites.

## Project Structure
web-crawler/
├── src/
│   ├── crawler.js
│   ├── urlExtractor.js
│   ├── utils/
│   │   ├── requestHandler.js
│   │   └── logger.js
│   └── constants.js
├── output/
│   └── results.json
├── README.md
├── package.json
├── .env
└── .gitignore



## Setup
1. Clone the repository.
2. Install dependencies:
   ```bash
   npm install axios cheerio

## Add your domains to config/domains.json. 

## Run the crawler: 
node src/crawler.js

## Git hub repo - https://github.com/avinash-18-art/shoppin-backend-assignment.git