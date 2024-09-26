const fs = require('fs');
const [source, destination] = process.argv.slice(-2);

const isSourse = fs.existsSync(source);

const isDirectory = fs.stat(destination, (_error, stats) => {
  return stats.isDirectory();
});
// const isDestination = fs.existsSync(destination);
// const isTrue = destination.includes('.');

// console.log('🚀 ~ isTrue:', isTrue);

if (process.argv.length !== 4) {
  console.error('Error path');
} else if (!isSourse) {
  console.error('Not exist such source');
} else if (source !== destination && !isDirectory) {
  fs.renameSync(source, destination, (error) => {
    console.error(error);
  });
}
