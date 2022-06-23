const { smtpTransport } = require('../config/email');

  /* min ~ max까지 랜덤으로 숫자를 생성하는 함수 */ 
var generateRandom = function (min, max) {
    var randNum = Math.floor(Math.random()*(max-min+1)) + min;
    return randNum;
}

const auth = {
    SendEmail : async(req, res) => {
        const number = generateRandom(111111,999999)
        const { sendEmail } = req.body;

        const mailOptions = {
            from: "KUFFEE-CHAT",
            to: sendEmail,
            subject: "[KUFFEE-CHAT] 가입 인증 메일 입니다",
            text: "오른쪽 숫자 6자리를 입력해주세요 : " + number
        };

        const result = await smtpTransport.sendMail(mailOptions, (err, responses) => {
            if (err) {
                console.log(err)
            } else {
              /* 클라이언트에게 인증 번호를 보내서 사용자가 맞게 입력하는지 확인 */
                return res.status(200).send({
                    number : number
                })
            }
            smtpTransport.close();
        });
    }
}