// OBJECTS

// property -- method: Bir nesne ile iliskili func

/* const person = {

    name: "John",
    surname: "Doe",
    age: 40,
    languages: ["Turkish", "English", "Spanish"],
    fullName: function() {
        return this.name + " " + this.surname
    },
    address: {
        city: "Balıkesir",
        district: "Akçay"
    }

} */

// Object Literal

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName: function() {
        return this.name + " " + this.surname
    }
}

console.log(person);

// dot Notation

console.log(person.name);
console.log(person.age);
console.log(person.fullName());

person.job = "Student";

console.log(person);
console.log(person.job);

// bracket Notation

console.log(person['name']);
console.log(person['age']);
console.log(person['fullName']());
console.log(person['na' + 'me']) // 'na' + 'me' ---> 'name' */


/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName: function() {
        return this.name + " " + this.surname
    }
}

const arin = {----}

person.address = {};

console.log(person);

person.address.city = "Balıkesir";

console.log(person); */

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName: function() {
        return this.name + " " + this.surname
    }
} */

// CONSTRUCTOR ---> YAPICI


/* function Person(name, surname, age) {
    const obj = {};
    obj.name = name;
    obj.surname = surname;
    obj.age = age;
    obj.fullName = function() {
        return obj.name + " " + obj.surname
    }

    return obj;
const person2 = new Person("Ricardo", "Quaresma", 38);
console.log(person2);


} */

/* function Person(name, surname, age) {

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function() {
        return this.name + " " + this.surname
    }
} */


/* const person1 = new Person("John", "Doe", 40);
const person2 = new Person("Ricardo", "Quaresma", 38); */

/* const person1 = new Person("John", "Doe", 40);
console.log(person1)
console.log(person1.fullName());

const person2 = new Person("Ricardo", "Quaresma", 38);
console.log(person2)
console.log(person2.fullName()); */


// Object Constructor

/* const person1 = new Object();
person1.name = 'John';
person1.surname = 'Doe';
person1.age = 40;
person1.fullName = function() {
    console.log(this);
    return this.name + " " + this.surname;
}

console.log(person1);
console.log(person1.age);
console.log(person1.fullName()); */

// Object.create() ile nesne olusturmak

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName: function() {
        return this.name + " " + this.surname
    }
}

console.log(person);

const arin = Object.create(person);
arin.name = 'Arin';
arin.surname = 'Software';
arin.age = 5;

console.log(arin);
console.log(arin.fullName()); */