const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ShopApp')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));


// PRODUCT SCHEMA
const productSchema = new mongoose.Schema({
		name: {
            type: String,
            required: true
        },
        brand: {
            type: String,
            required: true
        },
        price: {
            type: Number,
            required: true,
            min: 0
        },
        color: {
            type: String,
            required: true
        },
        size: {
            type: [String],
            required: true
        },
        description: {
            type: String,
            required: true
        },
        condition: {
            type: String,
            enum: ['baru', 'bekas'],
            default: 'baru',
            required: true
        },
        stock: {
            type: Number,
            required: true,
            min: [0, 'Stock tidak boleh kurang dari 0']
        },
        availability: {
            online: {
                type: Boolean,
                required: true
            },
            offline: {
                type: Boolean,
                required: true
            }
        }
});

const Product = mongoose.model('Product', productSchema);

// const product = new Product({
// 		"name": "Kemeja Flanel",
// 		"brand": "Hollister",
// 		"price": 750000,
// 		"color": "biru muda",
// 		"size": ["S", "M", "L"],
// 		"description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
// 		"condition": "baru",
// 		"stock": 25,
// 		"availability": {
// 			"online": true,
// 			"offline": true
// 		}
// });

// product.save()
//     .then((result) => {
//         console.log('Product saved:', result);
//     })
//     .catch((err) => {
//         console.log('error', err);
//     });

Product.findOneAndUpdate({name: 'Kemeja Flanel'}, {
		"name": "Kemeja Flanel",
		"brand": "Hollister",
		"price": 150000,
		"color": "biru muda",
		"size": ["S", "M", "L"],
		"description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
		"condition": "baru",
		"stock": 10,
		"availability": {
			"online": true,
			"offline": true
		}
}, 

{new: true, runValidators: true}).then((result) => {
    console.log('Product updated:', result);
}).catch((err) => {
    console.log(err.errors.stock.properties.message);
});