const User = require('../models/user')

var createUser = (req, res) => {
    User.create({
        name: req.body.name,
        email: req.body.email
    })
    .then(dataUser => {
        res.send({
            message: 'data created',
            data: dataUser
        })
    })
    .catch(err => {
        res.send(err)
    })
}


module.exports = {
    createUser
}