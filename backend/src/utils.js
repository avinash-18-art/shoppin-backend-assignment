const { URL } = require("url");

// Helper function to validate if a URL is a product URL
const isProductURL = (url) => {
  const productPatterns = [/\/product\//, /\/item\//, /\/p\//];
  return productPatterns.some((pattern) => pattern.test(url));
};

// Helper function to normalize URLs
const normalizeURL = (base, relative) => {
  try {
    return new URL(relative, base).href;
  } catch (e) {
    return null;
  }
};

module.exports = { isProductURL, normalizeURL };
