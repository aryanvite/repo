const express = require('express');

const app = express();

const port=3000;

const orderRouter = require('./routes/orders')
app.use('/orders',orderRouter);

const userRouter = require('./routes/users')
app.use('/users',userRouter);

app.listen(port);