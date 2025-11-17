// const express = require("express");
// const cors = require("cors");
// const { MongoClient, ServerApiVersion } = require("mongodb");
// const app = express();
// const port = process.env.PORT || 3000;

// // middleware

// app.use(cors());
// app.use(express.json());

// //simpleDBUser
// // password QlBgHOaqe0nphJja
// //const uri =
// // "mongodb+srv://simpleDBUser:<db_password>@cluster0.obgikox.mongodb.net/?appName=Cluster0";
// const uri =
//   "mongodb+srv://simpleDBUser:QlBgHOaqe0nphJja@cluster0.obgikox.mongodb.net/?appName=Cluster0";

// const client = new MongoClient(uri, {
//   serverApi: {
//     version: ServerApiVersion.v1,
//     strict: true,
//     deprecationErrors: true,
//   },
// });

// app.get("/", (req, res) => {
//   res.send("Simple Crud Server is running");
// });

// async function run() {
//   try {
//     await client.connect();

//     // add  data  related  apis  here
//     app.post("/users", (req, res) => {
//       console.log("hitting the users post api");
//     });
//     await client.db("admin").command({ ping: 1 });
//     console.log(
//       "Pinged your deployment. You successfully connected to MongoDB!"
//     );
//   } finally {
//     // await client.close();
//   }
// }
// run().catch(console.dir);

// app.listen(port, () => {
//   console.log(`Simple Crud Server is running on port ${port}`);
// });

// // try {
// // } catch (error) {
// // } finally {
// // }

// // async function run() {
// //   // await;
// // }
// // run().catch(console.dir);

// /**
//  *  1. At least one user
//  *  2. Set uri with userId and password
//  *  3. create a mongodb client
//  *  4. add a run function to connect to the database
//  *  5. use try finally inside it  to the client
//  *  6. ping the database to see server is alive or not
//  */

// ....................................................................................

const express = require("express");
const cors = require("cors");
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

app.post("/users", (req, res) => {
  console.log("User API Hit!");
  console.log("Received:", req.body);

  res.send({ status: "ok", received: req.body });
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
