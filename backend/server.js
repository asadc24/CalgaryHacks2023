const connection = require( './connections/database');
const express = require('express')
const app = express()

const authRoute = require("./routes/auth.js")



connection();

app.use("/api/", authRoute)



const port = process.env.port || 4000;
app.listen(port, () => {
  console.log("server is running at port", port);
});