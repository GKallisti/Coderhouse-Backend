const express = require('express')
const server = express()
const ProductManager= require('./ProductMngr.js')
const PORT= 3001



server.use('/products', (res, req)=>{
const limit = req.query.limit
const products = ProductManager.getProducts()

if(limit){
const queryproducts = products.slice(0,limit); 
res.send(queryproducts)

}
})


server.listen (PORT, ()=>{
    console.log('Server funcando correctamente')
})