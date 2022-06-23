const express = require('express');
const router = express.Router();
const db = require('../config/db');
let bcrypt = require('bcrypt-nodejs');

router.get('/auth/login', function (req, res) {
  return res.render('index', { title: '로그인' });
});

router.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  db.mysql.query('SELECT  email, password FROM user WHERE email =?', email, (err, userInfo) => {
    if (err || !userInfo[0]) {
      return res.render('error', { message: "아이디 또는 비밀번호를 확인해주세요." })
    }

    bcrypt.compare(password, userInfo[0].password, (err, tf) => {
      if (tf !== true) {
        return res.render('error', { message: "아이디 또는 비밀번호를 확인해주세요." })
      } else {
        req.session.is_logined = true;
        req.session.user = {
            email : email
        }
        return res.redirect('/app/category')
      }
    })
  })
})

router.delete('/auth', (req, res, next) => {
  req.session.destroy((err) => {
    return res.redirect('/app')
  })
})

module.exports = router;