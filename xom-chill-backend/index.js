require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { join } = require("path");
const jwt = require("jsonwebtoken");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const { json, urlencoded } = express;

const app = express();
mongoose.connect(`mongodb+srv://${process.env.DATABASE_USERNAME}:${process.env.DATABASE_PASSWORD}@xom-chill.s14kzvs.mongodb.net/?retryWrites=true&w=majority`,
    function() {
        console.log("Databse connected");
    }
)

app.use(json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(join(__dirname, "public")));

app.use(function(req, res, next) {
    const token = req.headers["access-token"];
    if(token) {
        jwt.verify(token, process.env.SESSION_SECRET, (err, decoded) => {
            if(err) {
                return next()
            }
        })
    } else {
        return next();
    }
})

const userRouter = require("./routes/api/user.route");
app.use("/user", userRouter);

const authRouter = require("./routes/auth/auth.route");
app.use("/auth", authRouter);

const articleRouter = require("./routes/api/article.route");
app.use("/article", articleRouter);

module.exports = { app };