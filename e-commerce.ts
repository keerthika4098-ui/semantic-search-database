// Select/Create database
use ECommerceDB

// Insert products
db.products.insertMany([
    {
        product_id: 101,
        product_name: "Laptop",
        category: "Electronics",
        price: 999.99,
        stock: 20
    },
    {
        product_id: 102,
        product_name: "Smartphone",
        category: "Electronics",
        price: 499.99,
        stock: 35
    },
    {
        product_id: 103,
        product_name: "Keyboard",
        category: "Accessories",
        price: 49.99,
        stock: 50
    }
])

// Display all products
db.products.find()

// Find products with price less than 500
db.products.find({
    price: { $lt: 500 }
})

// Update product stock
db.products.updateOne(
    { product_id: 101 },
    { $set: { stock: 19 } }
)

// Update product price
db.products.updateOne(
    { product_id: 103 },
    { $set: { price: 45.99 } }
)

// Delete a product
db.products.deleteOne({
    product_id: 103
})