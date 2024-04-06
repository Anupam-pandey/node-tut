const app = require("./app")
console.log("hi")
var a = 10;
let b = 20;
const c = 30;

var d = "20"
console.warn(a+b+c);


if(b === d)
{
    console.log("value and type are same");
}

if(b == d)
{
    console.log(" value is same");
}

for(var i =0 ; i<10;i++)
{
    console.log(i);
}


var arr  = [1,2,3,4,3, 4, 5];

console.log(arr);

console.log(app)

console.log(app.x)
console.log(app.z())



var results = arr.filter((item)=>{
    return item ==3;
})

console.log(results)

const fs = require('fs');
fs.writeFileSync("test.txt"," hi this isfile content");
const wfs = require('fs').writeFileSync;
wfs("test2.txt", " importing function seperatly");


console.log(__dirname);
console.log(__filename);
