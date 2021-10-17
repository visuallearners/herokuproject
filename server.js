if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config()
}

const express = require('express')
const app = express()
const expressLayouts = require('express-ejs-layouts')
const port = process.env.PORT || 3000

const indexRouter = require('./routes/index')
const servicesRouter = require('./routes/services')
const workRouter = require('./routes/work')
const orderFormRouter = require('./routes/orderForm')
const gratMssgRouter = require('./routes/gratMssg')


app.set('view engine', 'ejs')
app.set('views', __dirname + '/views')
app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true, useUnifiedTopology : true }) /* || */
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to mongoose!'))
/*
const colors = require('colors');
const mongoose = require('mongoose')
mongoose.connect(process.env.URI , { useNewUrlParser : true, useUnifiedTopology : true})
.then((res)=>console.log('> Connected...'.bgCyan))
.catch(err=>console.log(`> Error while connecting to mongoDB : ${err.message}`.underline.red ))
*/

app.use('/', indexRouter)
app.use('/services', servicesRouter)
app.use('/work', workRouter)
app.use('/orderForm', orderFormRouter)
app.use('/gratMssg', gratMssgRouter)

app.listen(port, () => {
    console.log(`Starting server at ${port}`)
})

// docker.io/18dec1989/visuallearner:1.0 
// sha256:90988f27884ac10f74ffdfcd2d87f199ad0b114115faeceb973162a31b029ca3