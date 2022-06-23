const express = require('express');
const router = express.Router();
const db = require('../config/db');
let bcrypt = require('bcrypt-nodejs');

router.get('/app/category', function (req, res) {
    /*
    if (req.session.is_logined !== true) {
        res.status(402).send("login failed");
    }
    */
    return res.status(200)
});

/*
  
router.get('/app/category/:tag', function(req, res){
    if (req.session.is_logined !== true) {
        return res.redirect('/app')
      }
    const { tag } = req.body;
    db.mysql.query('SELETE nickname, job, department, year, desc FROM user_info WHERE tag=?', tag, (err, tagList) => {
        if (err) {
            console.log(err)
            //return res.render('error', { message: "" })
        }
        else if(tagList){
            return res.status(200).send(tagList)
        }
    })
});
*/
module.exports = router;