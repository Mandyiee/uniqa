const express = require('express')

const router = express.Router()
const shortid = require('shortid');

router.get('/doc', (req, res) => {
    let url = req.headers.host
res.render('api', {url: url} )
})

router.get('/generate', (req, res) => {
    let id = shortid.generate()
    res.json({ id : id})
})

module.exports = router