const User = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcrypt");
const secret_key = "This is my secret key";


module.exports.register = (req, res) => {
    const user = new User(req.body);
    user.save()
        .then(usuario => {
            /*res.json(usuario);*/
            const payload = {
                _id: user._id,
                firstName: user.firstName,
                lastName: user.lastName
            }
            //Guardar al usuario en una cookie
            const myJWT = jwt.sign(payload, secret_key);
            res.cookie("usertoken", myJWT, secret_key, {httpOnly: true})
                .json(usuario)
        })
        .catch(err => {
            console.log(err);
            res.status(400).json(err);
        })
}

module.exports.login = (req, res) => {
    User.findOne({ email: req.body.email })
        .then(user => {
            if (user === null) {
                res.json({ error: true, message: "The e-mail is wrong" });
            } else {
                bcrypt.compare(req.body.password, user.password)
                    .then(passwordValid => {
                        if (passwordValid) {
                            const payload = {
                                _id: user._id,
                                firstName: user.firstName,
                                lastName: user.lastName
                            }
                            const myJWT = jwt.sign(payload, secret_key);
                            res.cookie("usertoken", myJWT, secret_key, {httpOnly: true})
                                .json({ error: false, message: "login successful" })
                        } else {
                            res.json({ error: true, message: "Password is incorrect" })
                        }
                    })
                    .catch(err => res.json({ error: true, message: "Invalid login" }))
            }
        })
        .catch(err => res.json(err));
}

module.exports.logout = (req, res) => {
    res.clearCookie('usertoken');
    res.status(200).json({ message: "Closed session" });
}