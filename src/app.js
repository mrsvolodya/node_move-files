/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const [s, d] = process.argv.slice(2);

try {
  const source = path.resolve(s);
  const destination = path.resolve(d);
  const isExist = fs.existsSync(source);

  if (source !== destination) {
    if (!isExist) {
      throw new Error('No exist source');
    }

    const dirname = path.dirname(destination);
    const isDirectory = fs.lstatSync(dirname).isDirectory();

    if (isDirectory && fs.existsSync(destination)) {
      const fileName = path.basename(source);
      const joinPath = path.join(destination, fileName);

      fs.renameSync(source, joinPath);
    } else {
      fs.renameSync(source, destination);
    }
  }
} catch (e) {
  console.error(e.message);
}
