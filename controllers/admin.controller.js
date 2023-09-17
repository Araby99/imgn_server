const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const { admins } = require("../models/admin.mode");

exports.login = (req, res) => {
    const { username, password } = req.body;
    if (username && password) {
        admins.findOne({ username }).then(admin => {
            if (admin) {
                bcrypt.compare(password, admin.password).then(check => {
                    if (check) {
                        jwt.sign({ id: admin._id, username: admin.username }, process.env.JWT_SECRET, { expiresIn: '24h' }, (err, token) => {
                            if (!err) {
                                res.send(token);
                            } else {
                                res.sendStatus(400);
                            }
                        })
                    } else {
                        res.sendStatus(401);
                    }
                })
            } else {
                res.sendStatus(404);
            }
        })
    } else {
        res.sendStatus(400)
    }
}