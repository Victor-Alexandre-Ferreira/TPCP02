const express = require("express");
const router = require("./router");
const articles = require("./data/articles.json");
const port = 3000;
const app = express();

app.locals.articles = articles;

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.static("static"));


app.use(router);
app.listen(port, () => {
    console.log(`Server ready : http://localhost:${port}`);
});