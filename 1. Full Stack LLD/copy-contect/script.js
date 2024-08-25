const path = require("path");
const fs =require("fs");

const srcPath=path.resolve("src/source.txt");
const destPath=path.resolve("dest/destination.txt");

const readStream= fs.createReadStream(srcPath);

const writeStream= fs.createWriteStream(destPath);

readStream.pipe(writeStream);

readStream.on("error",(err)=> {
    console.log("Error reading from the file.",err);
});

writeStream.on("error",(err)=> {
    console.log("Error writing to the file.",err);
});

writeStream.on("finish",()=> {
    console.log("File Copied Successfully !!");
});