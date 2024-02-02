const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie_db')
    .then(() => console.log('Connected to MongoDB...'))
    .catch(err => console.error('Could not connect to MongoDB...', err));

// MOVIE SCHEMA
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    score: Number,
    director: String,
});

// MOVIE MODEL
const Movie = mongoose.model('Movie', movieSchema);

const movie = new Movie({
    title: 'Black Panther',
    year: 2018,
    score: 8.0,
    director: 'Ryan Coogler'
});

movie.save()

console.log(movie);