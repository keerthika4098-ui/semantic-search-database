use HospitalDB

// Create patient collection and insert one record
db.patients.insertOne({
    patient_id: 1,
    name: "Anita",
    age: 35,
    gender: "Female",
    disease: "Fever",
    doctor: "Dr. Kumar"
})

// Insert another patient
db.patients.insertOne({
    patient_id: 2,
    name: "Arun",
    age: 45,
    gender: "Male",
    disease: "Blood Pressure",
    doctor: "Dr. Priya"
})

// Display all patient records
db.patients.find()

// Find patient by ID
db.patients.findOne({
    patient_id: 1
})

// Find patients with Fever
db.patients.find({
    disease: "Fever"
})

// Update patient information
db.patients.updateOne(
    { patient_id: 1 },
    { $set: { disease: "Cold and Fever" } }
)

// Display updated record
db.patients.find({
    patient_id: 1
})