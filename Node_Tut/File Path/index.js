const { warn } = require('console');
const fs = require('fs');

const path = require('path')

const dirPath = path.join(__dirname,'files');

// for(let i = 0;i<5;i++){

//     fs.writeFileSync(`${dirPath}/hello${i}.txt`,'Hello world');

// }

fs.readdir(dirPath,(err,files)=>{
    // console.warn(files);
    files.forEach((items)=>{
        console.log(items);
    })
})