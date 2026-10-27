const express = require('express')
const app=express();

const user_routes = require('./routes/users');
app.use('/users',user_routes);


const products = require('./routes/products');
app.use('/products',products);

const cart = require('./routes/cart')
app.use('/cart',cart);

app.listen(3000, console.log("Server run on 3000"))