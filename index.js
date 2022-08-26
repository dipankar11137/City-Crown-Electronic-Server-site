const express = require("express");
const cors = require("cors");
const { MongoClient, ServerApiVersion } = require("mongodb");
require("dotenv").config();

const app = express();
const port = process.env.PORT || 5000;

// use middleware
app.use(cors());
app.use(express.json());

const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.09jmf63.mongodb.net/?retryWrites=true&w=majority`;

app.get("/", (req, res) => {
  res.send("Running city Server");
});

app.listen(port, () => {
  console.log("City server is running ");
});
