const express = require('express');
const data = require('./data.json');
const app = express();
const port = process.env.PORT || 3000;

app.get("/pokemon", (req, res) => {
  res.json(data)
})

console.log(data)

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

