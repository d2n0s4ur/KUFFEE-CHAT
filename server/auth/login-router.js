const express = require('express');
const router = express.Router();
const db = require('../config/db');
let bcrypt = require('bcrypt-nodejs');

router.get('/auth/login', function (req, res) {
  return res.status(200)
});

router.post('/auth/login', (req, res) => {
  const { email, password } = req.body;
  db.query('SELECT email, password FROM user_info WHERE email = ?', [email], (err, userInfo) => {
    if (err || !userInfo[0]) {
      res.status(400).send("아이디 또는 비밀번호가 일치하지 않습니다.");
    }
    bcrypt.compare(password, userInfo[0].password, (err, tf) => {
      if (tf !== true) {
        res.status(400).send("아이디 또는 비밀번호가 일치하지 않습니다.");
      } else {
        req.session.is_logined = true;
        req.session.user = email;
        req.session.save();
        return res.send();
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