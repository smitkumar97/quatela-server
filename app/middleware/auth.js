const axios = require('axios');

async function getCaptchVerificationScore(req, res, next) {
    console.log('Token ', req.body);
    const secret = req.body.secret;
    const token = req.body.response;
    const data = await axios.post(`https://www.google.com/recaptcha/api/siteverify`, {},{
        params: {
            secret: secret,
            response: token
    }})
        .then(resolve => {
            return resolve.data;
    }).catch((err) => {
        console.error(err);
    });

    console.log(data);
    if (data.success == true) {
        res.status(200).json({
            data,
        });
    } else {
        res.status(400).json({
            error: data,
        });
    }
}

module.exports = {
    getCaptchVerificationScore,
};
