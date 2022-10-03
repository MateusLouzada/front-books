const express = require("express");
const path = require("path");
const { resolve } = require("path");
const { fileURLToPath } = require("url");

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/", express.static(resolve(__dirname, "./dist")));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) return console.log(err);

  console.log("Servidor Rodando!");
});
