// OBJECTS - Part II

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName: function() {
        return this.name + " " + this.surname
    }
}

console.log(person);
console.log(person.name);
console.log(person.fullName());
//console.log(person.fullName2());
//console.log(person.job);
console.log(person.toString());
console.log(person.hasOwnProperty("name")); */

// OBJECT + name, surname, age, fullName() ----> person

/* const myObj = {};
console.log(myObj);
console.log(myObj.toString()); */

// OBJECT ---> myObj

/* function Person(name, surname, age) {

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function() {
        return this.name + " " + this.surname
    }
} */

/* const arin = new Person("Arin", "Çekiç", 6);
console.log(arin); */

// OBJECT + name, surname, age, fullName() ----> Person ----> arin

/* console.log(arin.toString());
console.log(arin.hasOwnProperty("age"));
console.log(arin.__proto__);
*/
/* const elis = new Person("Elis", "Çekiç", 4); 
console.log(elis);
elis.job = "Child";
console.log(elis);
console.log(elis.toString()); */

// OBJECT + name, surname, age, fullName() ----> Person + job ----> elis

/* elis.toString = function() {
    return "ELISSSSS";
}

console.log(elis.toString()); */

/* function Person(name, age) {

    this.name = name;
    this.age = age;
}

Person.prototype.fullName = function() {
    return this.name + " " + this.surname
}

Person.prototype.surname = "Çekiç";

const elis = new Person("Elis",  4);

const arin = new Person("Arin",  6);

console.log(elis);
console.log(arin); */


const person = {
    name: 'XXXXXXXX',
    surname: 'XXXXXX',
    age: 0,
    fullName: function() {
        return this.name + " " + this.surname
    }
}

const arin = Object.create(person);
console.log(arin);
console.log(arin.name);

arin.name = "Arin";

console.log(arin);

console.log(arin.age);

arin.age = 6;

console.log(arin.age);

console.log(arin);

console.log(arin.hasOwnProperty("age"));
console.log(arin.hasOwnProperty("surname"));

console.log("surname" in arin);

