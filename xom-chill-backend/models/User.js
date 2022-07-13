const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const User = new Schema({
    userName: {
        type: String,
        require: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    collection: "users",
    timestamps: true
});

module.exports = mongoose.model("Users", User)