//classes are named with capital letter for differentiation
//unique because they have a function called a constructor
//each instance is called a 'state' of the class
//constructor accepts parameters, and they need to be stored using `this` keyword
//keyword new will tell JS to execute the method
//Object is like a superclass. Every class inherits from Object.

//gawd - finally figured out if you hit play on debugger with cursor at the end, 
//the code will run and you don't have to type that node bs!
//split the damned editor!!

class Employee {
    constructor(firstName, lastName, age) {
        this._firstName = firstName;
        this._lastName = lastName;
        this._age = age;
    }

    set firstName(newFirstname) {
        this._firstName;
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(newLastname) {
        this._firstName;
    }

    get lastName() {
        return this._firstName;
    }
    
    set age(newAge) {
        if(!isNaN(newAge)) {
        this._age = newAge;
        }
        else {
            this._age = 30;
        }
    }

    get age() {
        return this._age;
    }
}

var employee1 = new Employee('Brandon', 'Smith', 47);

var employee2 = {
    firstName: 'Laura',
    lastName: 'Long',
}

console.log(`${employee1.firstName} is ${employee1.age}`);
//^^calls get
employee1.firstName = 'Brent';
employee1.age = 'forty-seven';
//^^calls set


console.log(employee1);
console.log(employee2);
