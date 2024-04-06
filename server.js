const http  = require('http');




http.createServer((req,resp)=>{
    resp.write(" <h1>hello anupam here</h1>");
    resp.end();

}).listen(4900);


// other way

function testFunction(req,resp)
{
    resp.write(" <h1>hello anupam again</h1>");
    resp.end();
   
}

http.createServer(testFunction).listen(4901);


// other way

testFunction2 = (req,resp)=>{
    resp.write(" <h1>hello anupam returns</h1>");
    resp.end();
   
}

http.createServer(testFunction2).listen(4902);



