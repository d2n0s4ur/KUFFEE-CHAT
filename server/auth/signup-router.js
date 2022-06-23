const express = require('express');
const router = express.Router();
const db = require('../config/db')
const bcrypt = require('bcrypt-nodejs');
const { InputError, DuplicateError } = require('../controllers/error-handler');

router.post('/auth/new', (req, res, next) => {
    const { email, password, nickname, dname, year, job, desc} = req.body;
    password = bcrypt.hashSync(password)
    const sql = {email, password, nickname, dname, year, job, desc}
    db.mysql.query('INSERT INTO users set ?', sql, (err) => {
        if (err) {
            console.log(err)
        }
        else {
            return res.redirect('/app/category')
        }
    })
})

router.post('/auth/nickname', (req, res) =>{
    const { nickname } = req.body
    if (nickname === undefined){
        throw new InputError();
    }
    db.mysql.query('SELECT nickname FROM users WHERE nickname=?', nickname, (err, obj) =>{
        if (err) {
            console.log(err)
            return res.render('error', { message: "중복된 닉네임 입니다." })
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
    const { nickname } = req.body
    if (nickname === undefined){
        throw new InputError();
    }
    db.mysql.query('SELECT email FROM users WHERE email=?', email, (err, obj) =>{
        if (err) {
            console.log(err)
            return res.render('error', { message: "이미 등록된 이메일 입니다." })
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