const express = require("express");
const app = express();

// Rota simples para checar se está online
app.get("/", (req, res) => {
  res.send("Bot está rodando no Render!");
});

// Render usa a porta definida no ambiente
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`🌍 Servidor web rodando na porta ${PORT}`);
});

// Importa e inicia o bot
require("./index.js");
