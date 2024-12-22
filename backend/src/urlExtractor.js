function extractProductURLs($, patterns, domain) {
    const productLinks = new Set();
  
    $('a').each((_, element) => {
      const href = $(element).attr('href');
      if (href) {
        const fullURL = href.startsWith('/') ? new URL(href, domain).href : href;
  
        // Check if URL matches any product patterns
        if (patterns.some((pattern) => pattern.test(fullURL))) {
          productLinks.add(fullURL);
        }
      }
    });
  
    return productLinks;
  }
  
  module.exports = { extractProductURLs };
  