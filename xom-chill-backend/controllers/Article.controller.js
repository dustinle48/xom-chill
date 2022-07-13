const Article = require("../models/Article");

exports.find = async function(req, res) {
    try {
        const articles = await Article.find().sort({createdAt: "desc"});
        res.send(articles);
    } catch(err) {
        console.error(err)
        res.send(err);
    }
}

exports.findOne = async function(req, res) {
    try {
        const article = await Article.findOne({ _id: req.body._id });
        res.send(article);
    } catch(err) {
        console.error(err)
        res.send(err);
    }
};

exports.create = async function(req, res) {
    const article = new Article({
        title: req.body.title,
        subtitle: req.body.subtitle,
        content: req.body.content,
        writer: req.body.writer
    });
    try {
        const newArticle = await article.save();
        res.send(newArticle);
    } catch(err) {
        console.error(err)
        res.send(err);
    }
}