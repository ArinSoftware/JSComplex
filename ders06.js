// JS CLASSES

/*constructor function
function Person(name, surname, age) {

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = fullName;
}
*/

/* function fullName() {
    return this.name + " " + this.surname
} */

/* Person.prototype.fullName = function() {
    return this.name + " " + this.surname
}

Person.prototype.friends = ["Ela", "Rüzgar"]


const arin = new Person("Arin", "Çekiç", 5);
const elis = new Person("Elis", "Çekiç", 3);

console.log(arin);
console.log(elis);
console.log(arin.fullName());
console.log(elis.fullName());

console.log(arin.friends);
console.log(elis.friends);

arin.friends.push("Çınar");
console.log(arin.friends);
console.log(elis.friends); */

/* function Person(name, surname, age) {

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = fullName;
} */


// CLASS DECLARATION
/* class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["Ela", "Rüzgar"]
    }

    fullName() {
        return this.name + " " + this.surname
    }
} */


// CLASS EXPRESSION

const Person = class {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.friends = ["Ela", "Rüzgar"]
    }

    fullName() {
        return this.name + " " + this.surname
    }  
}

const arin = new Person("Arin", "Çekiç", 5);
const elis = new Person("Elis", "Çekiç", 3);

console.log(arin);
console.log(elis);
console.log(arin.fullName());
console.log(elis.fullName());

console.log(arin.friends);
console.log(elis.friends);
arin.friends.push("Çınar");
console.log(arin.friends);
console.log(elis.friends);

console.log(Person)

console.log(typeof Person)
