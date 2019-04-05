class Person {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    set firstName(newFirstname) {
        this._firstName = newFirstname;
    }

    get firstName() {
        return this._firstName;
    }

    set lastName(newLastname) {
        this._lastName = newLastname;
    }

    get lastName() {
        return this._firstName;
    }

    set age(newAge) {
        if (!isNaN(newAge)) {
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

module.exports = Person;