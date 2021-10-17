const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
    res.render('orderForm')
})

module.exports = router