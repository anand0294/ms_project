const path = require("path");

const result = path.join("folder1","folder2","subfolder","filename"); //just to join the path
console.log(result);


const result2 = path.resolve("folder1","folder2","subfolder","filename"); //get it from absolute path
console.log(result2);

const result3 = path.extname("filename.txt"); //get it from absolute path
console.log(result3);

const result4 = path.basename(path.resolve("folder1","folder2","subfolder","filename.txt")); //get it from absolute path
console.log(result4);


const result5 = path.parse("../fs/f1.txt"); //get it from absolute path
console.log(result5);





