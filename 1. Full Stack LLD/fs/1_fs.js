const fs = require("fs");

//Read
const content= fs.readFileSync("f1.txt")
console.log("Content of the file is: " + content);

//Write
fs.writeFileSync("f2.txt","This is file 2")
console.log("Data Written");

// Update/Append
fs.appendFileSync("f3.txt","This is file 3")
console.log("Data Appended");

//Delete
// fs.unlinkSync("f4.txt");
// console.log("File Deleted");

//-------------------- Directory / Folders -------------------------
//fs.mkdirSync("myDir");
// fs.rmdirSync("myDir");

if(!(fs.existsSync("myDir")))
{
    fs.mkdirSync("myDir");
}
