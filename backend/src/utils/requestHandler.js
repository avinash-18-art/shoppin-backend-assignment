const axios = require('axios');

async function fetchPage(url) {
  const response = await axios.get(url, {
    headers: { 'User-Agent': 'Mozilla/5.0 (compatible; WebCrawler/1.0)' },
  });
  return response.data;
}

module.exports = { fetchPage };
