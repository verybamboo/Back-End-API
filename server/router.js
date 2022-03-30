let express = require('express')
let characterRouter = require('./characters/router.js')
let elementRouter = require('./elements/router.js')
let nationRouter = require('./nations/router.js')

let router = new express.Router()

router.use('/characters', characterRouter)
router.use('/elements', elementRouter)
router.use('/nations', nationRouter)

module.exports = router