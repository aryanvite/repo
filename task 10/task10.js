const express = require('express')
const app=express();

const order = require('./routes/order')
app.use('/order',order)

app.listen(3000)