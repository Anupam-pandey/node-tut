const express = require('express')
const app = express()

app.get('/',(req,res)=>{
    res.send(`<h1>home</h1><a href="/about">about page</a>
    <h1>help</h1><a href="/help">help page</a>
    `)
    res.end()
})

app.get('/help',(req,res)=>{
    res.send([
        {"name": 'anu' , 'add':'abc@g.c'},
        {"name": 'pam' , 'add':'def@g.c'},

    ])
    res.end()
})

app.get('/about',(req,res)=>{
    res.send(`
    <input type="text" placeholder="UserName" value="${req.query.name}"/>
    <button> click </button>
    <h1>home</h1><a href="/">home page</a>`)
    res.end()
})

app.listen(5001)
