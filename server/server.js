const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require ('path');
dotenv.config();
app.use(express.json());
const cors = require("cors");

//app.use = cors("http://localhost:5000");//
app.use(cors({ origin: true }));

//Routes
app.use("/api/person", require("./routes/personRoutes"));
app.use("/admin/api/post", require("./routes/postRoutes"));
app.use("/admin/api/user", require("./routes/usersRoutes"));

//rendering the front end
app.use(express.static(path.join(__dirname,'../','client','build'))) 
app.get('*',(req,res)=>{
  res.sendFile(path.join(__dirname,'../','client','build','index.html'))
});

//connection to database
const connectDB = require("./config/connectDB");
connectDB();

// server creation
const port = process.env.PORT || 5000;
app.listen(port, (err) =>
  err ? console.error(err) : console.log(`server is running on port ${port}`)
);
