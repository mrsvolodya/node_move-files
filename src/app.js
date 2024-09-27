/* eslint-disable no-console */
const fs = require('fs');
const path = require('path');
const [s, d] = process.argv.slice(2);
// let des;

// const extNm = source.split('/').slice(-1).join('');
// const extension = path.extname(s);
// const slash = destination.lastIndexOf('/') === destination.length - 1;

try {
  const source = path.resolve(s);
  const destination = path.resolve(d);

  const isExist = fs.existsSync(source);

  console.log('🚀 ~ isExist:', isExist);

  if (!isExist) {
    throw new Error('No exist source');
  }

  const isDirectory = fs.lstatSync(destination).isDirectory();

  if (isDirectory && fs.existsSync(destination)) {
    const fileName = path.basename(source);
    const joinPath = path.join(destination, fileName);

    fs.renameSync(source, joinPath);
  } else {
    const dirname = path.dirname(destination);

    if (!fs.existsSync(dirname)) {
      throw new Error('No exist destination');
    }
    fs.renameSync(source, destination);
  }
} catch (e) {
  console.error(e.message);
}

// const newPathWithSlash = path.join(destination + extNm);
// const newPathWithoutSlash = path.join(destination + extension);

// console.log(
//   'NONAME',
//   {
//     extNm,
//     extension,
//     isDir: !!isDir,
//     isFile,
//     slash,
//     newPathWithSlash,
//     newPathWithoutSlash,
//   },
//   slash,
// );
// fs.renameSync(source, destination, (error) => {
//   console.error(error);
// });
// try {
//   if (process.argv.length !== 4) {
//     console.error('Less PARAMETERS');
//   } else if (source !== destination) {
//     fs.renameSync(source, destination, (error) => {
//       console.error(error);
//     });
//   }
// } catch (e) {
//   console.error(e);
// }

// try {
//   fs.lstatSync(destination.split('/').slice(0, -1).join('/')).isDirectory();
// } catch (e) {
//   console.error('ERRRRRROR');
// }

// else if (!slash && source !== destination) {
//   const newPath = path.join(destination + extension);

//   fs.moveSync(source, newPath);
// }
