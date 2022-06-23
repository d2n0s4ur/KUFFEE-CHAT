const express = require('express');
const router = express.Router();
const db = require('../config/db')
const bcrypt = require('bcrypt-nodejs');


router.post('/auth/new', (req, res, next) => {
    let { email, nickname, job, department, year, desc, password } = req.body;
    password = bcrypt.hashSync(password)
    const sql = [email, nickname, job, department, year, desc, password, tag]
    db.query('INSERT INTO user_info (`email`, `nickname`, `job`, `department`, `year`, `desc`, `password`, `tag` ) VALUES (?, ?, ?, ?, ?, ?, ?, ?)', [email, nickname, job, department, year, desc, password, tag], (err) => {
        if (err) {
            console.log(err)
            res.status(401).send("query error");
        }
        else {
            req.session.is_logined = true;
            req.session.user = email;
            req.session.save();
            return res.send();
        }
    })
})

router.post('/auth/nickname', (req, res) =>{
    const { nickname } = req.body
    if (nickname === undefined){
        res.status(400).send("undefined value");
    }
    db.mysql.query('SELECT nickname FROM user_info WHERE nickname=?', nickname, (err, obj) =>{
        if (err) {
            console.log(err)
            res.status(400).send("중복된 닉네임 입니다.");
        }
        if (obj === null){
            res.send({ duplicate: false })
        }
        else {
            res.send({ duplicate : true })
        }
    })
})

router.post('/auth/email', (req, res) =>{
    const { email } = req.body
    if (email === undefined){
        res.status(400).send("undefined value");
    }
    db.query('SELECT email FROM user_info WHERE email=?', email, (err, obj) =>{
        if (err) {
            res.status(401).send("query error");
        }
        if (obj === null){
            res.send({ duplicate: false })
        }
        else {
            res.send({ duplicate : true })
        }
    })
})

module.exports = router;