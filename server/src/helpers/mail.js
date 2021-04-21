
const nodemailer = require('nodemailer');

let sendMail = (to, linkVerify) => {
    let transporter = nodemailer.createTransport({
        host: "smtp.ethereal.email",
        port: 587,
        secure: false,
        service: 'Gmail',
        auth: {
            user: 'tridv.textbook@gmail.com',
            pass: '0964223234'
        }
    });

    let mailOptions = {
        from: '"Shop TextBook 👻" <tridv.textbook@gmail.com>',
        to: to,
        subject: 'Xác nhận đăng kí tài khoản',
        html: `<p> Bạn đã đăng kí vào hệ thống TextBook,
                    vui lòng click vào đường link này để kích hoạt tài khoản: 
                    <a href=${linkVerify} target="_blank" >${linkVerify}</a>
                </p>`
    };

    return transporter.sendMail(mailOptions);
}

module.exports = {
    sendMail
}