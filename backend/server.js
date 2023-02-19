const connection = require( './connections/database');
const express = require('express')
const app = express()
const cors = require('cors')
const cookieParser = require('cookie-parser')
var morgan = require('morgan')
morgan('tiny')



const authRoute = require("./routes/auth.js")



connection();
app.use(express.json()).use(cors()).use(cookieParser());
app.use("/api/", authRoute)



const port = process.env.port || 4000;
app.listen(port, () => {
  console.log("server is running at port", port);
});