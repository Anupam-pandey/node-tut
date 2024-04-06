const express = require('express')
const path = require('path')

const app = express()

var publicPath = path.join(__dirname,"public")

app.set('view engine','ejs');


app.get('/profile',(req,resp)=>{
    const user = {
        'name': 'anu',
        'email' : 'abc@d.e',
        'city' : 'noida',
        'skills' : ['a','b','c','d','e']
    }
    resp.render('profile',{user})
})


app.get('/',(req, resp)=>{
    resp.sendFile(`${publicPath}/index.html`)
})


app.get('/home',(req, resp)=>{
    resp.sendFile(`${publicPath}/home.html`)
})


app.get('/about',(req, resp)=>{
    resp.sendFile(`${publicPath}/about.html`)
})


app.get('/help',(req, resp)=>{
    resp.sendFile(`${publicPath}/help.html`)
})

app.get('/login',(req,resp)=>{
    resp.render('login')
})

app.get('*',(req, resp)=>{
    resp.sendFile(`${publicPath}/nopage.html`)
})

app.listen(5003)
