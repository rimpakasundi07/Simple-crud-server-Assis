const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const app = express();
const port = process.env.PORT || 3000;

// middleware

app.use(cors());
app.use(express.json());

// simpleCrudServer
// password  XZ7UID2qtHCz8ilA
//const uri =
// "mongodb+srv://simpleDBUser:<db_password>@cluster0.obgikox.mongodb.net/?appName=Cluster0";
const uri =
  "mongodb+srv://simpleCrudServer:XZ7UID2qtHCz8ilA@cluster0.obgikox.mongodb.net/?appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

app.get("/", (req, res) => {
  res.send("Simple Crud Server is running");
});

async function run() {
  try {
    await client.connect();
    const userDB = client.db("usersDB");
    const usersCollection = userDB.collection("users");

    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log("need user with id", id);
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.findOne(query);
      res.send(result);
    });

    // add  database  related  apis  here
    app.post("/users", async (req, res) => {
      const newUser = req.body;
      console.log("user info", newUser);
      const result = await usersCollection.insertOne(newUser);
      res.send(result);
    });

    app.patch("/users/:id", async (req, res) => {
      const id = req.params.id;
      const updatedUser = req.body;
      const query = { _id: new ObjectId(id) };
      const update = {
        $set: {
          name: updatedUser.name,
          email: updatedUser.email,
        },
      };
      const options = {};
      const result = await usersCollection.updateOne(query, update, options);
      res.send(result);
    });

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // await client.close();
  }
}
run().catch(console.dir);

app.listen(port, () => {
  console.log(`Simple Crud Server is running on port ${port}`);
});

//////// ...........................................

// try {
// } catch (error) {
// } finally {
// }

// async function run() {
//   // await;
// }
// run().catch(console.dir);

/**
 *  1. At least one user
 *  2. Set uri with userId and password
 *  3. create a mongodb client
 *  4. add a run function to connect to the database
 *  5. use try finally inside it  to the client
 *  6. ping the database to see server is alive or not
 */

// ....................................................................................
