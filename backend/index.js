const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
require("dotenv").config();
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_KEY}@cluster0.amhrtlq.mongodb.net/?retryWrites=true&w=majority`;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const tasksList = client.db("TaskWrap").collection("Tasks-List");
    //add to-do
    app.post("/api/add-task", async (res, req) => {
      const data = res.body;
      const addData = await tasksList.insertOne(data);
      req.send(addData);
    });
    //get to-do
    app.get("/api/get-todo/:email", async (res, req) => {
      const email = res.params.email;
      const query = { userEmail: email };
      const getData = await tasksList.find(query).toArray();
      req.send(getData);
    });
    //get a to-do
    app.get("/api/get-a-todo/:id", async (res, req) => {
      const id = res.params.id;
      const query = { _id: new ObjectId(id) };
      const getAData = await tasksList.findOne(query);
      req.send(getAData);
    });
    //update a to-do
    app.put("/api/update-a-todo/:id", async (res, req) => {
      const id = res.params.id;
      const query = { _id: new ObjectId(id) };
      const data = res.body;
      const options = { upsert: true };
      const updateDoc = {
        $set: {
          task: data.task,
          description: data.description,
          deadline: data.deadline,
          priority: data.priority,
        },
      };
      const updateData = await tasksList.updateOne(query, updateDoc, options);
      req.send(updateData);
    });
    //status a to-do
    app.put("/api/updateStatus/:id", async (res, req) => {
      const id = res.params.id;
      const query = { _id: new ObjectId(id) };
      const data = res.body;
      const options = { upsert: true };
      const updateDoc = {
        $set: {
            status: data.status
        },
      };
      const updateData = await tasksList.updateOne(query, updateDoc, options);
      req.send(updateData);
    });
    app.delete("/api/delete-task/:id",async (res, req) => {
      const id = res.params.id;
      const query = { _id: new ObjectId(id) };
      const deleteData = await tasksList.deleteOne(query)
      req.send(deleteData)
    });
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

app.get("/api", (res, req) => {
  req.send(`the server is running in ${port}`);
});

app.listen(port);
