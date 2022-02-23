const express = require('express')
const app = express()

const shortid = require('shortid');
const path = require('path')

const PORT = process.env.PORT || 8080;

app.use(express.json())
app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs');


app.use('/api', require('./routes/api'))
app.use('/', require('./routes/index'))
app.listen(PORT, () => {
    console.log('port started');
})