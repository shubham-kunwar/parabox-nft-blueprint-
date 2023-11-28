const fs = require('fs');

const sourceFileName = '0.gif';
const targetFolder = './images/';

if (!fs.existsSync(targetFolder)) {
  fs.mkdirSync(targetFolder);
}

for (let i = 1; i <= 100; i++) {
  const targetFileName = `${i}.png`;
  const sourcePath = sourceFileName;
  const targetPath = `${targetFolder}${targetFileName}`;

  fs.copyFile(sourcePath, targetPath, (err) => {
    if (err) {
      console.error(`Error copying ${sourcePath} to ${targetPath}: ${err}`);
    } else {
      console.log(`Copied ${sourcePath} to ${targetPath}`);
    }
  });
}
