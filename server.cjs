import express from "express";
import path, { resolve } from "path";
import { fileURLToPath } from "url";

const app = express();

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use("/", express.static(resolve(__dirname, "./dist")));

app.listen(process.env.PORT || 3000, (err) => {
  if (err) return console.log(err);

  console.log("Servidor Rodando!");
});
