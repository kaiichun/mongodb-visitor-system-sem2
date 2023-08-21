const database = "hospitalDB";
const collection = "departments";

// Create a new database.

use(database);

// Create a new collection.

// db.createCollection(collection);

// db.departments.insertMany([
//   {
//     Department: "General Medicine",
//     Head: "Dr. Roberts",
//     Floor: 2,
//   },

//   {
//     Department: "Orthopedics",
//     Head: "Dr. Thompson",
//     Floor: 3,
//   },

//   {
//     Department: "Surgery",
//     Head: "Dr. Williams",
//     Floor: 4,
//   },
// ]);

// db.departments.find({ Head: "Dr. Thompson" });

// db.departments.insertOne({
//   Department: "Recovery",
//   Name: "Dr. Smith",
//   Floor: 2,
// });

db.departments.deleteMany({ Department: "Orthopedics" });
