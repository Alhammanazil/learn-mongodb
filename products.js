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

productSchema.methods.outStock = function() {
    this.stock = 0
    this.availability.online = false
    this.availability.offline = false
    return this.save();
}

productSchema.statics.closeStore = function() {
    return this.updateMany({}, {
        stock: 0,
        "availability.online": false,
        "availability.offline": false,
    });
}

const Product = mongoose.model('Product', productSchema);

Product.closeStore()
    .then((result) => {
        console.log('Berhasil ditutup', result);
    })
    .catch((err) => {
        console.log('Gagal ditutup', err);
    });

const changeStock = async (id) => {
    const foundProduct = await Product.findById(id)
    await foundProduct.outStock();
    console.log(`Berhasil Diubah! ${foundProduct.name} stock: ${foundProduct.stock}`)
}
