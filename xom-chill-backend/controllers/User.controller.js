const User = require("../models/User");
const jwt = require("jsonwebtoken");
const sha256 = require("crypto-js/sha256");

exports.find = async function(req, res) {
    try {
        const users = await User.find();
        res.send(users);
    } catch(err) {
        console.error(err)
        res.send(err);
    }
}

exports.findOne = async function(req, res) {
    try {
        const user = await User.findOne({ email: req.body.email });
        res.send(user);
    } catch(err) {
        console.error(err)
        res.send(err);
    }
};

exports.create = async function(req, res) {
    const user = new User({
        userName: req.body.userName,
        email: req.body.email,
        password: sha256(req.body.password),
    })
    try {
        const newUser = await user.save();
        console.log(newUser);
        res.send(newUser);
    } catch(err) {
        console.error(err)
        res.send(err);
    }
}

exports.login = async function(req, res, next) {
    try {
        const { email, password } = req.body;

        const user = await User.findOne({ email: email });

        if(!user) {
            res.status(401).json({ error: "Wrong email." });
        } else if(sha256(password) !== user.password) {
            res.status(401).json({ error: "Wrong password." });
        } else {
            const token = jwt.sign(
                { user: user },
                process.env.SESSION_SECRET,
                { expiresIn: 86400 }
            );
            res.json({ token });
        }
    } catch (err) {
        next(err);
    }
}

exports.logout = async function(req, res, next) {
    try {
        res.sendStatus(204);
    } catch (err) {
        console.error(err);
    }
}