const express = require("express");
const { connect } = require("./db/connect");

const app = express();
app.use(express.json());
app.use(require('cors')());
require('dotenv').config();

app.use("/news", require('./routes/news.route'));
app.use("/articles", require('./routes/articles.route'));

connect().then(() => {
    app.listen(8000, () => {
        console.log("Server Done!");
    })
})