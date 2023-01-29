var nodeMailer = require('nodemailer');
var transport = nodeMailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'hardikpanwar63@gmail.com',
        pass: '',
    }
})
var mailOption = {
    from: 'hardikpanwar63@gmail.com',
    to: 'hardkpanwar63@gmail.com',
    subject: 'test node mail',
    text: "hello i am hardik panwar and i am testing node module from web server ",
}
transport.sendMail(mailOption, function (err, info) {
    if (error) {
        console.log(error);
    }
    else {
        console.log("email has been sent ", info.response);
    }
})