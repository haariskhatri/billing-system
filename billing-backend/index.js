const express = require('express');
const bodyparser = require('body-parser')
const path = require('path')
const product = require('./product/addproduct');
const mongoose = require('mongoose');
const cors = require('cors')


const app = express();
const PORT = 4000;

app.use(bodyparser.urlencoded({ extended: false }))
app.use(cors({
    origin: "*"
}))

app.use(express.json());

app.post('/addproduct', async (req, res) => {
    const { productID, productName, productQty, productPrice } = req.body;

    await product({
        productID: productID,
        productName: productName,
        productQty: productQty,
        productPrice: productPrice
    }).save();


    res.json({ message: "Succesfully Added" });

})

app.get('/getproductid', (req, res) => {
    res.json({ result: "0" });
})

app.post('/addproduct', async (req, res) => {


    await product()
})

app.get('/getproduct/:barcode', async (req, res) => {
    const { barcode } = req.params;

    const productdetail = await product.findOne({ productBarcode: barcode });

    res.json(productdetail)

})


app.listen(PORT, async () => {
    console.log(`Running on ${PORT}`);
    await mongoose.connect('mongodb+srv://root:Haaris8785@cluster0.walzl.mongodb.net/test');
    console.log("Mongoose Connected");
})