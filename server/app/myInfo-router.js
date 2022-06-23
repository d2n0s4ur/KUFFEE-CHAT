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
        const email = req.session.user.email;
        db.mysql.query('SELETE email, nickname, dname, year, job, desc FROM users WHERE email=?', email, (err, myInfo) => {
        if (err) {
            console.log(err)
        }
        else if(myInfo){
            return res.status(200).send(myInfo)
        }
    })

    }
});

module.exports = router;