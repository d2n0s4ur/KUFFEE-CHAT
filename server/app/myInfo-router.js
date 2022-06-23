const express = require('express');
const router = express.Router();
const db = require('../config/db');
let bcrypt = require('bcrypt-nodejs');


router.get('/app/myinfo', function (req, res) {
    /*
    if (req.session.is_logined !== true) {
        res.status(402).send("login failed");
    }
    else{
    */
        const email = req.session.user.email;
        db.query('SELETE email, nickname, job, department, year, desc, tag FROM user_info WHERE email=?', email, (err, myInfo) => {
        if (err) {
            console.log(err)
            res.status(401).send("query error");
        }
        else if(myInfo){
            return res.status(200).send(myInfo)
        }
    })
   // }
});

router.put('/app/myinfo', function (req, res) {
    if (req.session.is_logined !== true) {
        res.status(402).send("login failed");
    }
    else{
        const email = req.session.user.email;
        const { nickname, job, department, year, desc, tag } = {nickname, job, department, year, desc, tag}
        db.query('UPDATE SET nickname=?, job=?, department=?, year=?, desc=?, tag=? WHERE email=?', nickname, job, department, year, desc, tag, email, (err) => {
        if (err) {
            console.log(err)
            res.status(401).send("query error");
        }
        else{
            return res.status(200)
        }
    })
    }
});

module.exports = router;