const express = require('express')
const middlewareFilter = require('./routered_middleware')
const app  = express()
const router = express.Router()

router.use(middlewareFilter)
// app.use(middlewareFilter)
app.get('/',(req,resp)=>{
    resp.send("home")
    resp.end()
})


app.get('/about',(req,resp)=>{
    resp.send("about")
    resp.end()
})

app.use('/',router)

router.get('/users',(req,resp)=>{
    resp.send("users page")
    resp.end()
})


app.listen(5004)