const express = require("express");
const app = express();

app.get("/", (req, res) => res.send("Bot online 🚀"));

function keepAlive() {
  const PORT = process.env.PORT || 3000;
  app.listen(PORT, () => {
    console.log(`Servidor rodando na porta ${PORT}`);
  });
}

module.exports = keepAlive;
