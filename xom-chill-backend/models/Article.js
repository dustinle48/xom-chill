const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const Article = new Schema({
    title: {
        type: String,
        require: true,
    },
    subtitle: {
        type: String,
        required: true,
    },
    content: {
        type: String,
        required: true,
    },
    category: {
        type: String,
    },
    tags: {
        type: String,
    },
    writer: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        required: true,
    },
    coverImg: {
        type: String,
    }
}, {
    collection: "articles",
    timestamps: true
});

module.exports = mongoose.model("Articles", Article)