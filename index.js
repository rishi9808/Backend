const express = require("express");
require('dotenv').config()
const app = express();


app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/rishi", (req, res) => {
  res.send("hello from rishi");
});

app.get("/login", (req, res) => {
    res.send('<h1>Login success</h1>')
});


app.get("/youtube" , (req,res) => {
    res.send('<a href="https://www.youtube.com/">Youtube</a>')
})

app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${process.env.PORT}`);
});
