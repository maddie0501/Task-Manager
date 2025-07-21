const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskroute");
require("dotenv").config();

const app = express();

const PORT = 8082;

const DB_URL = process.env.MONGO_URL;
// console.log("MONGO_URL:", DB_URL);

mongoose
  .connect(DB_URL, {
    useNewURLParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB Atlas!"))
  .catch((error) => console.log("Error while connecting DB", error));

app.use(cors());
app.use(express.json());

app.use("/tasks", taskRoutes);

app.listen(PORT, () => {
  console.log(`Backend listening on Port ${PORT}`);
});
