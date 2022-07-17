
const express = require('express');
var cors=require('cors');
const dotenv=require("dotenv");

const app = express();
const port = process.env.PORT||5000;

dotenv.config();
require('./Db');

app.use(cors());
app.use(express.json())

app.get("/",(req,res)=>{
  res.json("server start");
})

// Available Routes
app.use('/api/auth', require('./routes/auth'))
app.use('/api/notes', require('./routes/notes'))


app.listen(port, () => {
  console.log(`iNoteBook backend listening at http://localhost:${port}`)
})