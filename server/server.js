const express = require("express");
const app = express();
const dotenv = require("dotenv");
dotenv.config();
app.use(express.json());

//Routes
app.use("/api/person", require("./routes/personRoutes"));

//connection to database
const connectDB = require("./config/connectDB");
connectDB();

// server creation
const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.error(err) : console.log(`server is running on port ${port}`)
);
