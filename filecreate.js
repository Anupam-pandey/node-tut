const path = require('path')
const fs = require('fs')

const dirPath = path.join(__dirname,"files")

console.log(dirPath)


for(var i =0;i<5;i++)
{
    fs.writeFileSync(dirPath+"/hello "+i+".txt","content "+i)
}


fs.readdir(dirPath,((err,files)=>{

    // console.log(files)
    // files.filter((item)=>{
    //     console.log(item);
    // })

    files.forEach((item)=>{
            console.log(item);
        })
}))