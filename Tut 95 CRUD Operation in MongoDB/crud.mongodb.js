use("CrudDb")

console.log(db)

db.createCollection("Courses")

// CREATE

// db.Courses.insertMany([
//   { name: "MongoDB Basics", price: 0, assignments: 12, projects: 45 },
//   { name: "Node.js Essentials", price: 499, assignments: 8, projects: 30 },
//   { name: "Express.js Mastery", price: 799, assignments: 10, projects: 25 },
//   { name: "React for Beginners", price: 999, assignments: 15, projects: 40 },
//   { name: "Advanced JavaScript", price: 599, assignments: 12, projects: 35 },
//   { name: "TypeScript Crash Course", price: 699, assignments: 9, projects: 20 },
//   { name: "Full Stack Bootcamp", price: 1499, assignments: 18, projects: 60 },
//   { name: "Frontend Fundamentals", price: 399, assignments: 7, projects: 22 },
//   { name: "Backend API Dev", price: 899, assignments: 11, projects: 33 },
//   { name: "Database Design", price: 299, assignments: 6, projects: 15 }
// ]
// )




// READ

// let a = db.Courses.find({ price:0 })

// console.log(a.toArray())


// let b = db.Courses.findOne({ price:0 })

// console.log(b)


// UPDATE

// db.Courses.updateOne(
//   { price:0 }, {$set:{price: 1000}})


// db.Courses.updateMany(
//   { price:0 }, {$set:{price: 1000}})


// DELETE

// db.Courses.deleteOne({ price: 1000 })

db.Courses.deleteMany({ price: 1000 })