const express = require('express')
const router = express.Router()
const {HandleClientRequest,GetClientRequest} = require('../controller/req.controller')

router.post('/',HandleClientRequest)
router.get('/',GetClientRequest)
module.exports = router