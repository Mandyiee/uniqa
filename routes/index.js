const express = require('express')

const router = express.Router()
const shortid = require('shortid');

router.get('/', (req, res) => {
    res.render('index')
})

router.get('/generated', (req, res) => {
    let id = shortid.generate()
    res.render('generate', { id : id})
})

module.exports = router