const fs = require('fs');
const path = require('path');

function saveResults(results) {
  const outputPath = path.resolve(__dirname, '../output/results.json');
  fs.writeFileSync(outputPath, JSON.stringify(results, null, 2), 'utf8');
  console.log(`Results saved to ${outputPath}`);
}

module.exports = { saveResults };
