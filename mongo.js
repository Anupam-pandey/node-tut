 const {MongoClient} = require('mongodb')
 const url =  "mongodb://localhost:27017"
 const client  = new MongoClient(url)
 const database = 'e-comm'

 async function getData()
 {
    var result = await client.connect()
    var db = result.db(database)
    var collections = db.collection('products')
    var response = await collections.find({}).toArray()
    console.log(response)
 }

 getData()