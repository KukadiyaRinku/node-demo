
const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname, 'crud');
const filePath = path.join(dirPath, 'TextFile.txt');

// fs.writeFileSync(filePath, "This Is First Text File.");
// console.log('Created.');

// fs.readFile(filePath, 'utf8', (err, item) => {
//     console.log(item);
// });

// fs.appendFile(filePath, " And File Name Is 'TextFile.txt'. ", (err) => {
//     if (!err) console.log('Updated.');
// });

//const newFilePath = path.join(dirPath, "RenamedFile.txt");
// fs.rename(filePath,newFilePath , (err) => {
//     if (!err) {
//     filePath =  newFilePath;
//     console.log("File Renamed.");
//}
// })

// fs.unlink(filePath, (err) => {
//     if (!err) console.log("File Deleted.")
// });