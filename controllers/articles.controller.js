const { articles } = require("../models/articles.model")

exports.getAllArticles = (req, res) => {
    articles.find({}).then(result => {
        res.send(result)
    })
}

exports.getArticle = (req, res) => {
    const { id } = req.params;
    articles.findById(id).then(result => {
        res.send(result)
    })
}

exports.createArticles = (req, res) => {
    const { title, hero, description } = req.body;
    if (!title || !hero || !description) {
        res.sendStatus(400);
    } else {
        articles.create(req.body).then(result => {
            res.send(result);
        })
    }
}