const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ShopApp')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


// PRODUCT SCHEMA
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
    },
});

const Product = mongoose.model('Product', productSchema);

const thshirt = new Product({
    name: 'T-shirt Raglan',
    price: 50000
});


thshirt.save()
    .then((result) => {
        console.log('Product saved:', result);
    })
    .catch((err) => {
        console.log('error', err);
    });