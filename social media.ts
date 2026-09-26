// Select/Create database
use SocialMediaDB

// Create Users collection
db.users.insertMany([
    {
        user_id: 101,
        name: "Rahul",
        username: "rahul101",
        email: "rahul@gmail.com"
    },
    {
        user_id: 102,
        name: "Priya",
        username: "priya102",
        email: "priya@gmail.com"
    }
])

// Create Posts collection
db.posts.insertMany([
    {
        post_id: 1,
        user_id: 101,
        content: "Learning MongoDB",
        likes: 25
    },
    {
        post_id: 2,
        user_id: 102,
        content: "Hello everyone!",
        likes: 40
    }
])

// Create Comments collection
db.comments.insertMany([
    {
        comment_id: 1,
        post_id: 1,
        user_id: 102,
        comment: "Nice post!"
    },
    {
        comment_id: 2,
        post_id: 2,
        user_id: 101,
        comment: "Great!"
    }
])

// Create Interactions collection
db.interactions.insertMany([
    {
        user_id: 102,
        post_id: 1,
        type: "like"
    },
    {
        user_id: 101,
        post_id: 2,
        type: "like"
    }
])

// Display users
db.users.find()

// Display posts
db.posts.find()

// Find posts created by user 101
db.posts.find({ user_id: 101 })

// Find comments for post 1
db.comments.find({ post_id: 1 })