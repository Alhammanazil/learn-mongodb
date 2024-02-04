const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ShopApp')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

const personSchema = new mongoose.Schema({
    firstName: String,
    lastName: String,
    age: Number
});

personSchema.virtual('fullName').get(function() {
    return `${this.firstName} ${this.lastName}`;
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    firstName: 'Harry',
    lastName: 'Potter',
    age: 25
});

console.log(person.fullName);