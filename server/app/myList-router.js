const express = require('express');
const router = express.Router();
const db = require('../config/db');
let bcrypt = require('bcrypt-nodejs');

router.get('/app/users/:nickname', function (req, res) {
    if (req.session.is_logined !== true) {
        return res.redirect('/app')
    }
    else{
        const email = req.session.user.email;
        db.mysql.query('SELETE uid FROM user_info WHERE email=?', email, (err, uid) => {
        if (err) {
            console.log(err)
        }
        else if(uid){
            //const uid = uid[0];
            db.mysql.query('SELECT nickname, job, department, year, desc FROM user_info WHERE uid IN (SELECT favID FROM bookmark WHERE uid=?)', uid, (err, myList) =>{
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