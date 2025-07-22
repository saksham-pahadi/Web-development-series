

// Select the database to use.
use('SigmaDatabase');

// Insert a few documents into the courses collection.
db.getCollection('Courses').insertMany([
  { "name": "java", "Price": 2000, "Constructor": "Harry" },
  { "name": "python", "Price": 1800, "Constructor": "Alice" },
  { "name": "javascript", "Price": 2200, "Constructor": "Bob" },
  { "name": "c++", "Price": 2500, "Constructor": "Charlie" },
  { "name": "ruby", "Price": 2100, "Constructor": "Daisy" },
  { "name": "go", "Price": 2300, "Constructor": "Ethan" },
  { "name": "kotlin", "Price": 2400, "Constructor": "Fiona" },
  { "name": "swift", "Price": 2600, "Constructor": "George" },
  { "name": "typescript", "Price": 2700, "Constructor": "Hannah" },
  { "name": "php", "Price": 1900, "Constructor": "Ivan" }
]
);



// Print a message to the output window.
console.log(`Done inserting documents into the Courses collection.`);


