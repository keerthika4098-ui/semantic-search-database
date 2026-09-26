// Select/Create database
use UniversityDB

// Create Students collection
db.students.insertMany([
    {
        student_id: 101,
        name: "Rahul",
        age: 20,
        department: "Computer Science",
        email: "rahul@gmail.com"
    },
    {
        student_id: 102,
        name: "Priya",
        age: 21,
        department: "Information Technology",
        email: "priya@gmail.com"
    }
])

// Create Courses collection
db.courses.insertMany([
    {
        course_id: "C101",
        course_name: "Database Management System",
        credits: 4
    },
    {
        course_id: "C102",
        course_name: "Python Programming",
        credits: 3
    }
])

// Create Academic Records collection
db.academic_records.insertMany([
    {
        student_id: 101,
        course_id: "C101",
        marks: 85,
        grade: "A"
    },
    {
        student_id: 102,
        course_id: "C102",
        marks: 90,
        grade: "A+"
    }
])

// Display students
db.students.find()

// Display courses
db.courses.find()

// Display academic records
db.academic_records.find()