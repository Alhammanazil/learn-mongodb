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

personSchema.pre('save', function() {
    this.firstName = "Luna"
    this.lastName = "Lovegood"
    console.log('About to save...');
});

personSchema.post('save', function() {
    console.log('Just saved ✅');
});

const Person = mongoose.model('Person', personSchema);

const person = new Person({
    firstName: 'Ron',
    lastName: 'Weasley',
    age: 25
});

console.log(person);

person.save()
.then((result) => console.log(result))
.catch(err => console.error('Error', err));