require("dotenv").config();
const express = require("express");
const app = express();
const db = require("./database/db");

db.then(() => console.log(`Conectou ao MongoDB!`)).catch(err => console.log(err));

app.use(express.json({ extended: false}));

//Rotas
const baseRoute = require("./routes/base");
const apiRoute = require ("./routes/api");

//Routers
app.use("/", baseRoute);
app.use("/api", apiRoute);

app.listen(3000, () => {
  console.log("API Subiu");
});