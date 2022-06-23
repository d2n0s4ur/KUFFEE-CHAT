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
        db.mysql.query('SELETE uid FROM users WHERE email=?', email, (err, uid) => {
        if (err) {
            console.log(err)
        }
        else if(uid){
            const uid = uid[0];
            db.mysql.query('SELECT nickname, dname, job, tag FROM users WHERE uid IN (SELECT favID FROM bookmark WHERE uid=?)', uid, (err, myList) =>{
                if(err){
                    console.log(err)
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