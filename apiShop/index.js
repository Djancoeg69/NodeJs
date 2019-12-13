const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const app = express()

//connection mongodb
mongoose.connect('mongodb://localhost/apiShop')
    .then(db => console.log('db connected'))
    .catch(err => console.log(err))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
    extended : true
    })
)

require('./router/router') (app)
const PORT = proses.env.PORT || 8000

app.listen(PORT,() => {
    console.log('Berhasil menjalankan server pada port 8000')
})