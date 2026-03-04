const fs = require('fs');
const lh = JSON.parse(fs.readFileSync('./lh.json', 'utf8'));
console.log('Scores:');
for (const [key, cat] of Object.entries(lh.categories)) {
    console.log(`${cat.title}: ${Math.round(cat.score * 100)}`);
}
console.log('\nIssues to fix:');
const fails = Object.values(lh.audits).filter(a => a.score !== null && a.score < 1 && a.scoreDisplayMode !== 'informative' && a.scoreDisplayMode !== 'notApplicable');
for (const a of fails) {
    console.log(`- ${a.title} (Score: ${a.score}, Value: ${a.displayValue || 'N/A'}) [${a.id}]`);
}
