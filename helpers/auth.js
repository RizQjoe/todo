const jwt = require('jsonwebtoken')

function auth (req,res,next){
    const token = req.headers.token
    if(token){
        next()
    }else{
        res.send('Anda Belum Login')
    }
}

module.exports = {
    auth
};