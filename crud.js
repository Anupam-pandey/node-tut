const fs = require('fs')
const path = require('path')
const dirpath = path.join(__dirname,'cruds')
const filepath = dirpath+"/apple.txt"

fs.writeFileSync(filepath," file details")
fs.readFile(filepath,'utf-8',((err,item)=>{
    console.log(item)
}))

fs.appendFile(filepath," test data", ((err)=>{
    if(!err)
    {
        console.log("file updated")
    }
}))

fs.readFile(filepath,'utf-8',((err,item)=>{
    console.log(item)
}))

var newPath = dirpath+"/fruits.txt"
fs.rename(filepath,newPath, ((err)=>{
    if(!err)
    {
        console.log("name pdated")
    }
}))
//delete
fs.unlinkSync(newPath)
