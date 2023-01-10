// Declaration import packages
const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const app = express();

// Middleware use express and cors
app.use(express.json);
app.use(cors());

// Mongodb Connection
mongoose.connect(process.env.DB_CONNECTION, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
let db = mongoose.connection;
db.on("error", console.error.bind(console, "Database connection failed"));
db.once("open", () => {
  console.log("Database connected");
});

// Routing
app.listen(process.env.PORT, () => {
  console.log("server is up");
});
