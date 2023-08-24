// 

// T-Shirt:price_1NiYZYGvzqAyI6UuoOrkd6YK
// Sunglasses:price_1NiYfiGvzqAyI6UuL0sTHhY8
// Coffee:price_1NiYkcGvzqAyI6UuIII2jgIl

const express = require('express')
var cors = require('cors')
const stripe = require ('stripe')('sk_test_51NiYREGvzqAyI6UuDHDzwA24N3lHp4VG47Q30mnZndufrxxaaT8hCKYNKosZMWD3MZjYAvzeSqSQdVDhzz4oVomb00QYfcJthu')

const app = express();
app.use('cors()');
app.use(express.static('public'));
app.use(express.json());

app.post('/checkout',async(req,res)=>{
    
})