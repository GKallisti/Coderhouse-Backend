const express = require('express')
const server = express()
const  ProductManager  = require('./ProductMngr.js')
const PORT= 3001

const pmanager = new ProductManager('./products.json')

server.get('/products', async (req, res)=>{
try {
const limit = req.query.limit
const products = await pmanager.getProducts()
if (limit) {
        const limitedProducts = products.slice(0, limit); 
        res.json(limitedProducts);
      } else {
        res.json(products);
      }
} catch (error) {
    console.log(error)
}

})


server.listen (PORT, ()=>{
    console.log('Server funcando correctamente')
})