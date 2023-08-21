const database = "library";
const collection = "books";

// Create a new database.
use(database);

// add one date
// db.books.insertOne({
//     title: 'Book One', description: 'Description of book one', genre: 'horror'
// })

// add multiple date
// db.books.insertMany([
//     {
//         title: 'Book Two',
//         description: 'Description of book two',
//         genre: 'music'
//     },
//     {
//         title: 'Book Three',
//         description: 'Description of book three',
//         genre: 'horror'
//     },
//     {
//         title: 'Book Four',
//         description: 'Description of book four',
//         genre: 'horror'
//     },
//     {
//     title: 'Book Five',
//         description: 'Description of book five',
//         genre: 'scifi'
//     }
// ])

/* update one data */
// first parameter is which item to update, second parameter is what to update
// db.books.updateOne({ title: "Book One" }, { $set: { genre: "scifi" } });

/* update many */
// first parameter is which items to update, second parameter is what to update
// db.books.updateMany({ genre: 'horror' }, { $set: { genre: "scifi" } });

/* delete one */
// which item to delete
// db.books.deleteOne({ title: 'Book Five' });

/* delete many */
// which items to update
// db.books.deleteMany({ genre: "romance" });

/* find one book */
// db.books.findOne({ genre: "scifi" });

/* find many books */
// db.books.find({ genre: 'scifi' });

/* find books */
db.books.find();
