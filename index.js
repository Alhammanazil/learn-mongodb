const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie_db')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// MOVIE SCHEMA
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    rating: Number
});

// MOVIE MODEL
const Movie = mongoose.model('Movie', movieSchema);

// DELETE
// Movie.deleteOne({ title: 'Avengers: Infinity War' })
// .then((result) => {
//     console.log('Movie deleted:', result);
// })
// .catch((err) => {
//     console.log('error', err);
// });


// FIND MOVIE BY YEAR
// Movie.findOne({ year: {$gt: 2018}})
// .then((result) => {
//     console.log('Movies released after 2018:', result);
// })
// .catch((err) => {
//     console.log('error', err);
// });


Movie.findByIdAndDelete('65bc9fdfca2a72925ddada44')
 .then((result) => {
    console.log('Movie deleted:', result);
})

.catch((err) => {
    console.log('error', err);
});



// Movie.insertMany([
//         {
//             "title": "Black Panther",
//             "genre": "Action",
//             "year": 2018,
//             "rating": 7.3
//         },
//         {
//             "title": "Avengers: Infinity War",
//             "genre": "Action",
//             "year": 2018,
//             "rating": 8.4
//         },
//         {
//             "title": "Joker",
//             "genre": "Crime",
//             "year": 2019,
//             "rating": 8.4
//         },
//         {
//             "title": "Parasite",
//             "genre": "Drama",
//             "year": 2019,
//             "rating": 8.6
//         },
//         {
//             "title": "Spider-Man: Into the Spider-Verse",
//             "genre": "Animation",
//             "year": 2018,
//             "rating": 8.4
//         }
//     ])
//     .then((result) => {
//         console.log('it works...');
//     })
//     .catch((err) => {
//         console.log('error', err);
//     });