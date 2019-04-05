//import Person from './Person' ES6

var Person = require('./Person.js');
var Employee = require('./Employee.js');

var employee1 = new Person('Jeffrey', 'Andrews', 48);
var employee2 = new Employee('Jeffrey', 'Andrews', 48, 1002);

console.log(`${employee1.firstName} is ${employee1.age} years old`);
console.log(employee2);