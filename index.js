const express = require('express');
const data = require('./data.json');
const app = express();
const port = process.env.PORT || 3001;

app.get("/pokemon", (req, res) => {
  res.json(data)
})

app.get('/pokemon/:id', (req, res) => {
  const id = Number(req.params.id);
  const pokemon = data.find((pokemon) => {
        return pokemon.id === id;
    });
    res.json(pokemon);
})

app.get('/pokemon/:id/:info', (req, res) => {
  const id = Number(req.params.id);
  const info = req.params.info;
  const pokemonInfo = data.find((pokemon) => {
    return pokemon.id === id;
  })
  if (info === 'name'){
    res.send(pokemonInfo.name);
  } else if (info === 'type'){
    res.send(pokemonInfo.type);
  } else if (info === 'base'){
    res.send(pokemonInfo.base);
  }
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
