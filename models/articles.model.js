const { Schema, model } = require("mongoose");

const articlesSchema = new Schema({
    title: String,
    hero: String,
    description: String
}, { timestamps: true });

exports.articles = model("articles", articlesSchema);