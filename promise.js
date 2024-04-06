let a = 10
let b = 0

var waitingData  = new Promise((resolve, reject)=>{
    setTimeout(()=>{
        resolve(30)
    },2000)
})

waitingData.then((data)=>{
    console.log(a+data)
})