const fs = require('fs');
const path = require('path');
const dirPath = path.join(__dirname,'crud');
const pathName = `${dirPath}/hello.txt`;

// fs.writeFileSync(pathName , "Hello Duniya");

// fs.readFile(pathName,'utf8',(err,files)=>{
//     console.log(files);
// })

// fs.appendFile(pathName," and the file name is Hello.txt",(err)=>{
//     if(!err) console.log("File is updated");
// });

// fs.rename(pathName,`${dirPath}/fruit.txt`,(err)=>{
//     if(!err) console.log("File is updated");
// })

// fs.unlinkSync(`${dirPath}/fruit.txt`)