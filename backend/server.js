const connection = require( './connections/database');
const express = require('express')
const cors = require('cors')
const cookieParser = require('cookie-parser')
const dotenv = require("dotenv")
const authRoute = require("./routes/auth.js")

dotenv.config()

const app = express()
app.use(express.json()).use(cors()).use(cookieParser());

app.get("/", (req, res) => {
    res.json({ msg: "Hello" });
});



  app.use("/api/", authRoute)
  
  
  
connection();
const port = process.env.port || 4000;
app.listen(port, () => {
  console.log("server is running at port", port);
});