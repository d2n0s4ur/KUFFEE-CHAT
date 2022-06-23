const express = require('express');
const router = express.Router();
const db = require('../config/db');
let bcrypt = require('bcrypt-nodejs');


router.get('/app/myinfo', function (req, res) {
    if (req.session.is_logined !== true) {
        return res.send({
            is_logined : req.session.is_logined
        })
    }
    else{
        const email = req.session.user.email;
        db.mysql.query('SELETE email, nickname, job, department, year, desc FROM user_info WHERE email=?', email, (err, myInfo) => {
        if (err) {
            console.log(err)
        }
        else if(myInfo){
            return res.status(200).send(myInfo)
        }
    })
    }
});

router.put('/app/myinfo', function (req, res) {
    if (req.session.is_logined !== true) {
        return res.send({
            is_logined: false
        })
    }
    else{
        const email = req.session.user.email;
        const { nickname, job, department, year, desc } = {nickname, job, department, year, desc}
        db.mysql.query('UPDATE SET nickname=?, job=?, department=?, year=?, desc=? WHERE email=?', nickname, job, department, year, desc, email, (err) => {
        if (err) {
            console.log(err)
        }
        else{
            return res.status(200)
        }
    })
    }
});

module.exports = router;