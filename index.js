const express = require("express");
const { connect } = require("./db/connect");
const https = require('https');
const fs = require('fs');
const path = require('path');

const app = express();
app.use(express.json());
app.use(require('cors')());
require('dotenv').config();

app.use("/news", require('./routes/news.route'));
app.use("/articles", require('./routes/articles.route'));
app.use("/admin", require('./routes/admin.route'));
app.use("/social", require('./routes/social.route'));
app.use("/tags", require('./routes/tags.route'));
app.use("/BOD", require('./routes/BOD.route'));
app.use("/about", require('./routes/about.route'));

connect().then(() => {
    const sslServer = https.createServer({
        key: fs.readFileSync(path.join(__dirname, 'cert', 'key.pem')),
        cert: fs.readFileSync(path.join(__dirname, 'cert', 'cert.pem')),
    }, app)
    sslServer.listen(8000, () => {
        console.log("Server Done On Port 8000!");
    })
})