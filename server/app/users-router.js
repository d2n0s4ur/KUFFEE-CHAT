const express = require('express');
const router = express.Router();
const db = require('../config/db');
let bcrypt = require('bcrypt-nodejs');
const e = require('express');


router.get('/app/users/:nickname', function (req, res) {
    if (req.session.is_logined !== true) {
        return res.redirect('/app')
    }
    else{
        const { nickname } = req.body;
        db.mysql.query('SELETE nickname, dname, year, job, desc FROM users WHERE nickname=?', nickname, (err, profile) => {
        if (err) {
            console.log(err)
        }
        else if(profile){
            return res.status(200).send(profile)
        }
    })
    }
    return res.render('main', { title: "메인페이지" });
});

module.exports = router;