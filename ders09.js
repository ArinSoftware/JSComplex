/* ARROW FUNCTION */

//Function Declaration

/* console.log(square(4));

function square(num) {
    return (num*num);
}


// Function Expression

const square2 = function(num) {
    return (num*num)
}

console.log(square2(6));

// Arrow Function Expression

//const square3 = function(num) { return (num*num) };
//const square3 = (num) => { return (num*num) };
const square3 = num => (num*num);

console.log(square3(8));

 */

/* window.name = 'arin';

function tellName() {
    console.log(this);
    console.log(this.name);
}

tellName();

const person = {
    name: 'elis',
    tellName: function() {
        console.log(this);
        console.log(this.name)
    }
}

person.tellName(); */

/* window.name = 'arin';

const tellName = () => {
    console.log(this);
    console.log(this.name);
}

tellName();

const person = {
    name: 'elis',
    tellName: () => {
        console.log(this);
        console.log(this.name)
    }
}

person.tellName(); */

/* window.name = 'arin';

const person = {
    name: 'elis',
    tellName:function() {
        console.log(this);
        console.log(this.name);

        setTimeout(function() {
            console.log(this);
            console.log(this.name);
        }, 2000)
    }
}

person.tellName(); */

/* window.name = 'arin';

const person = {
    name: 'elis',
    tellName:function() {
        console.log(this);
        console.log(this.name);

        setTimeout(()=> {
            console.log(this);
            console.log(this.name);
        }, 2000)
    }
}

person.tellName(); */

/* const Person = (name, surname, age) => {

    this.name = name;
    this.surname = surname;
    this.age = age;
    this.fullName = function() {
        return this.name + " " + this.surname
    }
}

const person1 = new Person("John", "Doe", 40);

console.log(person1) */

/* window.year = 100;

const myObj = {
    year: 2020,
    showYear1: function() {
        console.log(this.year, this)
    },
    showYear2: () => console.log(this.year, this)
}

myObj.showYear1();
myObj.showYear2(); */

// CALL 

window.name = 'gurcan';
window.grade = 100;

const student = {
    examResult: () => {
        return this.name + " " + this.grade
    }
}

const student1 = {
    name: 'arin',
    grade: 80
}

const student2 = {
    name: 'elis',
    grade: 77
}

console.log(student.examResult.call(student1));
console.log(student.examResult.call(student2));

