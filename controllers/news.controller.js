const { news } = require("../models/news.model")

exports.getAllNews = (req, res) => {
    if (!req.query.page) {
        req.query.page = 1;
    }
    news.find({}).then(result => {
        const perPage = 9;
        const pages = Math.ceil(result.length / perPage);
        const from = (req.query.page - 1) * perPage;
        const to = (req.query.page - 1) * perPage + perPage;
        let response = {
            data: result.filter((i, index) => index >= from && index < to),
            total: result.length,
            perPage
        }
        let links = [
            {
                url: req.query.page != pages ? `${req.baseUrl}?page=${Number(req.query.page) + 1}` : null
            },
            {
                url: req.query.page != 1 ? `${req.baseUrl}?page=${req.query.page - 1}` : null
            }
        ];
        for (let i = 1; i <= pages; i++) {
            const element = {
                url: `${req.baseUrl}?page=${i}`,
                label: i,
                active: req.query.page == i
            }
            links.push(element);
        }
        response.links = links;
        res.send(response)
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