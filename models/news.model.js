const { Schema, model } = require("mongoose");

const newsSchema = new Schema({
    title: String,
    subTitle: String,
    hero: String,
    description: String
}, { timestamps: true });

exports.news = model("news", newsSchema);