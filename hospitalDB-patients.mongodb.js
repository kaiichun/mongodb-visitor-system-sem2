/* global use, db */
// MongoDB Playground
// Use Ctrl+Space inside a snippet or a string literal to trigger completions.

const database = "hospitalDB";
const collection = "patients";

// Create a new database.
use(database);

// Create a new collection.
// db.createCollection(collection);

// db.patients.insertMany([
//     {
//         Name: "Anna White", Age: 30, Condition: "Flu", Department: "General Medicine"
//     },
//     {
//         Name: "James Green", Age: 45, Condition: "Broken Leg", Department: "Orthopedics"
//     },
//     {
//         Name: "Lucy Black", Age: 25, Condition: "Appendicitis", Department: "Surgery"
//     }
// ])

// db.patients.updateOne(
//     { Name: "Anna White" },
//     { $set: { Condition: "Recovered" , Department: "Recovery" } }
// );
// db.patients.find({ Age:{ $gt : 40 }});

// db.patients.updateOne(
//     { Name: "James Green" },
//     { $set: { EmergencyContact: "555-1234" } }
// );

// db.patients.count();

// db.patients.deleteMany({ Condition: "Recovered" });
