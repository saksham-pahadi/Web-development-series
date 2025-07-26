const mongoose = require('mongoose');
const employeeSchema = new mongoose.Schema({
  name: String,
  salary: Number,
  language: String,
  city: String,
  isManager: Boolean
});

const Employees = mongoose.model('Employees', employeeSchema);
module.exports = Employees;