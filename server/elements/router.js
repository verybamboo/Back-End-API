let express = require('express')

let controller = require('./controller')

let router = new express.Router()

router.post('/', controller.create)
router.get('/', controller.getAll)
router.get('/:id', controller.getAll)
router.put('/:id', controller.getAll)
router.delete('/:id', controller.getAll)

module.exports = router