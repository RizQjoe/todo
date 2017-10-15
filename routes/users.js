var express = require('express');
var router = express.Router();
const controller = require('../controllers/user')
const middleware = require('../helpers/auth')


router.post('signin', controller.signin)
router.post('signup', controller.signUp)
router.put('/:id', middleware.auth, controller.addTask)
router.get('/id:', middleware.auth, controller.showTask)
router.post('/id:', middleware.auth,controller.addTag)
router.delete('/id:/idX', middleware.auth, controller.removeTask)
router.put('/tag/id', controller.removeTag)







// /* GET users listing. */
// router.get('/', function(req, res, next) {
//   res.send('respond with a resource');
// });

// router.post('/', user.createUser)

module.exports = router;
