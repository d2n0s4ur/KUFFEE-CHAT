const express = require('express');
const router = express.Router();
const db = require('../config/db');
let bcrypt = require('bcrypt-nodejs');

router.get('/app/users/:nickname', function (req, res) {
    if (req.session.is_logined !== true) {
        res.status(402).send("login failed");
    }
    else{
        const email = req.session.user.email;
        db.query('SELETE uid FROM user_info WHERE email=?', email, (err, uid) => {
        if (err) {
            console.log(err)
            res.status(400).send("query error");
        }
        else if(uid){
            //const uid = uid[0];
            db.query('SELECT nickname, job, department, year, desc, tag FROM user_info WHERE uid IN (SELECT favID FROM bookmark WHERE uid=?)', uid, (err, myList) =>{
                if(err){
                    console.log(err)
                    res.status(400).send("query error");
                }
                else{
                    return res.status(200).send(myList)
                }
            })
        }
    })
    }
});

module.exports = router;