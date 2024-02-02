const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie_db')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// MOVIE SCHEMA
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    director: String,
    rating: Number,
    cast: [String],
    image: String
});

// MOVIE MODEL
const Movie = mongoose.model('Movie', movieSchema);

// FIND BY ID
// Movie.findById('65bc6152b47040372a3a3453')
// .then((result) => {
//     console.log('Movie found:', result);
// })
// .catch((err) => {
//     console.log('error', err);
// });



// UPDATE DATA
// Movie.updateMany({ year: {$lt: 2019 }}, {rating: 7})
// .then((result) => {
//     console.log('Movie updated:', result);
// })
// .catch((err) => {
//     console.log('error', err);
// });


Movie.findByIdAndUpdate('65bc67808aed261a596c317f', {rating: 9})
.then((result) => {
    console.log('Movie updated:', result);
})
.catch((err) => {
    console.log('error', err);
});


// FIND MOVIE BY YEAR
// Movie.findOne({ year: {$gt: 2018}})
// .then((result) => {
//     console.log('Movies released after 2018:', result);
// })
// .catch((err) => {
//     console.log('error', err);
// });



// Movie.insertMany([
//         {
//             "title": "Black Panther",
//             "genre": "Action",
//             "director": "Ryan Coogler",
//             "year": 2018,
//             "cast": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
//             "rating": 7.3,
//             "image": "https://www.example.com/black_panther.jpg"
//         },
//         {
//             "title": "Avengers: Infinity War",
//             "genre": "Action",
//             "director": "Anthony Russo, Joe Russo",
//             "year": 2018,
//             "cast": ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
//             "rating": 8.4,
//             "image": "https://www.example.com/avengers_infinity_war.jpg"
//         },
//         {
//             "title": "Joker",
//             "genre": "Crime",
//             "director": "Todd Phillips",
//             "year": 2019,
//             "cast": ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
//             "rating": 8.4,
//             "image": "https://www.example.com/joker.jpg"
//         },
//         {
//             "title": "Parasite",
//             "genre": "Drama",
//             "director": "Bong Joon Ho",
//             "year": 2019,
//             "cast": ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
//             "rating": 8.6,
//             "image": "https://www.example.com/parasite.jpg"
//         },
//         {
//             "title": "Spider-Man: Into the Spider-Verse",
//             "genre": "Animation",
//             "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
//             "year": 2018,
//             "cast": ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
//             "rating": 8.4,
//             "image": "https://www.example.com/spider_man_into_the_spider_verse.jpg"
//         }
//     ])
//     .then((result) => {
//         console.log('it works...');
//     })
//     .catch((err) => {
//         console.log('error', err);
//     });