const express = require('express');
const router = express.Router();
const db = require('../config/db');
let bcrypt = require('bcrypt-nodejs');
const e = require('express');


router.get('/app/users/:nickname', function (req, res) {
    /*
    if (req.session.is_logined !== true) {
        res.status(402).send("login failed");
    }
    else{
        */
        const { nickname } = req.params;
        db.query('SELECT `email`, `nickname`, `job`, `department`, `year`, `desc`, `tag` FROM user_info WHERE nickname=?', nickname, (err, profile) => {
        if (err) {
            console.log(err)
            return res.status(401).send("query error");
        }
        else if(profile){
            //console.log(profile)
            return res.status(200).send(profile[0])
        }
    })
    //}
    return res.status(200)
});

module.exports = router;