const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const taskRoutes = require("./routes/taskroute");

const app = express();

const PORT = 8082;
const DB_URL = 'mongodb+srv://madhurikavatekar01:user1234@cluster0.ydy3eyv.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';

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
