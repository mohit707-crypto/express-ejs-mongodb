var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/test', {useNewUrlParser: true, useUnifiedTopology: true});


var employeeSchema = new mongoose.Schema({
    name: String,
    email: String, 
    etype: String,
    hourlyrate: Number,
    totalHour: Number
      
});

var employeeModel = mongoose.model('employee',employeeSchema);  
var employees = new employeeModel ({Name:"mohit",
email:"mohit_khandar@yahoo.com",
etype:"hourly",
hourlyrate:10,
totalHour:16
});

console.log("Total Income of employee:Rs."+ employees.hourlyrate* employees.totalHour);