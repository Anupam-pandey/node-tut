const express = require('express')
const app  = express()

const middlewareFilter = (req,resp, next)=>{
    if(!req.query.age)
    {
        console.log(" age is not present")
        resp.send(' age is not present')
    }
    else if(req.query.age < 18)
    {
        console.log("not allowed")
        resp.send(' not allowed')

    }
    else
    {
        next()
    }
}

app.use(middlewareFilter)
app.get('/',(req,resp)=>{
    resp.send("home")
    resp.end()
})



app.get('/users',(req,resp)=>{
    resp.send("users page")
    resp.end()
})


app.listen(5004)