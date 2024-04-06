module.exports =  middlewareFilter = (req,resp, next)=>{
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
