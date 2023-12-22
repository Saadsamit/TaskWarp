const express = require('express');
const { MongoClient, ServerApiVersion } = require('mongodb');
require("dotenv").config()
const cors = require('cors');
const app = express()
const port = process.env.PORT || 5000
app.use(cors())
app.use(express.json())

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@cluster0.amhrtlq.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    const tasksList = client.db("TaskWrap").collection('Tasks-List')
    
    app.post("/api/add-task",async(res,req)=>{
        const data = res.body
        const addData = await tasksList.insertOne(data)
        req.send(addData)
    })
    await client.db("admin").command({ ping: 1 });
    console.log("Pinged your deployment. You successfully connected to MongoDB!");
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/api",(res,req)=>{
    req.send(`the server is running in ${port}`)
})

app.listen(port)

