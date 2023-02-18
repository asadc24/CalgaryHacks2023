import connection from './connections/database';
const express = require('express')
const app = express()


connection();


const port = process.env.port || 4000;
app.listen(port, () => {
  console.log("server is running at port", port);
});