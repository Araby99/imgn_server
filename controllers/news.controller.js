const { news } = require("../models/news.model")

exports.getAllNews = (req, res) => {
    news.find({}).then(result => {
        res.send(result)
    })
}

exports.getNews = (req, res) => {
    const { id } = req.params;
    news.findById(id).then(result => {
        res.send(result)
    })
}

exports.createNews = (req, res) => {
    const { title, hero, description } = req.body;
    if (!title || !hero || !description) {
        res.sendStatus(400);
    } else {
        news.create(req.body).then(result => {
            res.send(result);
        })
    }
}