// src/index.js
const express = require("express");
const app = express();

app.get("/user", (req, res) => {
  // Vulnerabilidad simulada: uso inseguro de eval
  const query = req.query.input;
  eval(query); // No hacer esto en producción
  res.send("Código ejecutado.");
});

app.listen(3000, () => {
  console.log("Servidor iniciado en http://localhost:3000");
});
