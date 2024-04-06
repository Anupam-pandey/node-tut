const fs = require('fs')
const ip = process.argv


if(ip[2] == 'add')
{
    fs.writeFileSync(ip[3],ip[4])
}
else if(ip[2] == 'remove')
{
    fs.unlinkSync(ip[3]);
}
else{
    console.error("wrong input")
}
