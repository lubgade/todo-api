const express = require('express');
const userRouter = express.Router();
const _ = require('lodash');
var {authenticate} = require('./../middleware/authenticate');

const {User} = require('./../models/user');

userRouter.post('/', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    var user = new User(body);

    user.save().then(() => {
        return user.generateAuthToken();
    }).then((token) => {
        //console.log(token);
        res.header('x-auth', token).send(user);
    }).catch((e) => {
        res.status(400).send(e);
    });
});

userRouter.get('/me', authenticate, (req, res) => {
    res.send(req.user);
});

userRouter.post('/login', (req, res) => {
    var body = _.pick(req.body, ['email', 'password']);
    //var user = new User(body);

    User.findByCredentials(body.email, body.password).then((user) => {
        return user.generateAuthToken().then((token) => {
            res.header('x-auth', token).send(user);            
        });
    }).catch((e) => {
        res.status(400).send();
    });
});

userRouter.delete('/me/token', authenticate, (req, res) => {
    req.user.removeToken(req.token).then(() => {
        res.status(200).send();
    }, () => {
        res.status(400).send();
    })
});

module.exports = {userRouter};