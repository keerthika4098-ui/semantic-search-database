// Select/Create database
use MovieStreamingDB

// Create Movies collection
db.movies.insertMany([
    {
        movie_id: 101,
        title: "Inception",
        genre: ["Sci-Fi", "Thriller"],
        year: 2010,
        rating: 8.8
    },
    {
        movie_id: 102,
        title: "Interstellar",
        genre: ["Sci-Fi", "Drama"],
        year: 2014,
        rating: 8.7
    },
    {
        movie_id: 103,
        title: "The Dark Knight",
        genre: ["Action", "Drama"],
        year: 2008,
        rating: 9.0
    }
])

// Create Users collection
db.users.insertMany([
    {
        user_id: 1,
        name: "Arun",
        favorite_genre: "Sci-Fi"
    },
    {
        user_id: 2,
        name: "Anita",
        favorite_genre: "Drama"
    }
])

// Create Recommendations collection
db.recommendations.insertMany([
    {
        user_id: 1,
        recommended_movies: [101, 102]
    },
    {
        user_id: 2,
        recommended_movies: [103]
    }
])

// Display all movies
db.movies.find()

// Find Sci-Fi movies
db.movies.find({
    genre: "Sci-Fi"
})

// Find movies with rating greater than 8.5
db.movies.find({
    rating: { $gt: 8.5 }
})

// Display recommendations for user 1
db.recommendations.find({
    user_id: 1
})