const { response } = require("express");
const express = require("express");
const { append } = require("express/lib/response");
const router = express.Router();
const articles = require("./data/articles.json");

router.get("/", (request,response)=> {
    response.render("index")
});

router.get("/article/:articleId", (request, response, next)=> {
    const articleId = request.params.id;
    const selectedArticle = articles.find((article)=> articleId === article.id)
    if(selectedArticle) {
        response.render("article");
    } else {
        next()
    }
})

module.exports = router;