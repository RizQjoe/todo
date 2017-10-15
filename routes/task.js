const expreess = require('express')
const router = expreess.Router()
const controller = require('../controllers/task')


router.get('/',controller.getTask)
router.get('/:id', controller.findTask)
router.post('/',controller.createTask)
router.delete('/:id', controller.deleteTask)
router.put('/:id',controller.editTask)
router.put('/tag/id',controller.addTag)
