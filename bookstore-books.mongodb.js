const database = "bookstore";
const collection = "books";

// Create a new database.
use(database);

// create author collection
// db.createCollection(collection);

// db.books.insertMany([
//     {
//         Title: "The Great Gatsby", Author: "F. Scott Fitzgerald", Genre: "Fiction", Published: "1925"
//     },
//     {
//         Title: "To Kill a Mockingbird", Author: "Harper Lee", Genre: "Fiction", Published: "1960"
//     },
//     {
//         Title: "A Brief History of Time", Author: "Stephen Hawking", Genre: "Science", Published: "1988"
//     }
// ])

// db.books.find({Author: "F. Scott Fitzgerald"});
// db.books.find({Genre: "Science"});

// db.books.updateOne({ Title: "The Great Gatsby" }, { $set: { Price: "$10" } });

// db.books.updateOne({ Title: "A Brief History of Time" }, { $set: { Published : "1987" } });

db.books.deleteOne({ Title: "To Kill a Mockingbird" });
