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
    description: String,
    image: String
});

// MOVIE MODEL
const Movie = mongoose.model('Movie', movieSchema);

// FIND MOVIE BY ID
// Movie.findOne({ _id: '65bc6152b47040372a3a3453' })
// .then((result) => {
//     console.log('Movie found:', result);
// })
// .catch((err) => {
//     console.log('error', err);
// });

// FIND BY ID
Movie.findById('65bc6152b47040372a3a3453')
.then((result) => {
    console.log('Movie found:', result);
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

Movie.insertMany([
        {
            "title": "Black Panther",
            "genre": "Action",
            "director": "Ryan Coogler",
            "year": 2018,
            "cast": ["Chadwick Boseman", "Michael B. Jordan", "Lupita Nyong'o"],
            "description": "T'Challa, the King of Wakanda, rises to the throne in the isolated, technologically advanced African nation, but his claim is challenged by a vengeful outsider who was a childhood victim of T'Challa's father's mistake.",
            "rating": 7.3,
            "image": "https://www.example.com/black_panther.jpg"
        },
        {
            "title": "Avengers: Infinity War",
            "genre": "Action",
            "director": "Anthony Russo, Joe Russo",
            "year": 2018,
            "cast": ["Robert Downey Jr.", "Chris Hemsworth", "Mark Ruffalo"],
            "description": "The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.",
            "rating": 8.4,
            "image": "https://www.example.com/avengers_infinity_war.jpg"
        },
        {
            "title": "Joker",
            "genre": "Crime",
            "director": "Todd Phillips",
            "year": 2019,
            "cast": ["Joaquin Phoenix", "Robert De Niro", "Zazie Beetz"],
            "description": "In Gotham City, mentally-troubled comedian Arthur Fleck is disregarded and mistreated by society. He then embarks on a downward spiral of revolution and bloody crime. This path brings him face-to-face with his alter-ego: 'The Joker'.",
            "rating": 8.4,
            "image": "https://www.example.com/joker.jpg"
        },
        {
            "title": "Parasite",
            "genre": "Drama",
            "director": "Bong Joon Ho",
            "year": 2019,
            "cast": ["Song Kang-ho", "Lee Sun-kyun", "Cho Yeo-jeong"],
            "description": "Greed and class discrimination threaten the newly formed symbiotic relationship between the wealthy Park family and the destitute Kim clan.",
            "rating": 8.6,
            "image": "https://www.example.com/parasite.jpg"
        },
        {
            "title": "Spider-Man: Into the Spider-Verse",
            "genre": "Animation",
            "director": "Bob Persichetti, Peter Ramsey, Rodney Rothman",
            "year": 2018,
            "cast": ["Shameik Moore", "Jake Johnson", "Hailee Steinfeld"],
            "description": "Teen Miles Morales becomes the Spider-Man of his universe, and must join with five spider-powered individuals from other dimensions to stop a threat for all realities.",
            "rating": 8.4,
            "image": "https://www.example.com/spider_man_into_the_spider_verse.jpg"
        }
    ])
    .then((result) => {
        console.log('it works...');
    })
    .catch((err) => {
        console.log('error', err);
    });