// CLASS DECLARATION
/* class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    fullName() {
        return this.name + " " + this.surname;
    }

    static showName = "Person";

    static staMethod() {
        console.log("STATIC METHOD ÇALIŞIYOR");
    }
}  */

/* console.log(typeof Person) */

/* const arin = new Person("Arin", "Çekiç", 5);
const elis = new Person("Elis", "Çekiç", 3); */

/* console.log(arin instanceof Person);
console.log(elis instanceof Person); */

/* console.log(arin);
console.log(elis);
 */

//console.log(arin.fullName());
//console.log(elis.fullName());
//console.log(Person.fullName());

//console.log(arin.showName);
//console.log(arin.staMethod());

/* console.log(Person.showName);
console.log(Person.staMethod()); */

/* class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    fullName() {
        return this.name + " " + this.surname;
    }

} 

const arin = new Person("Arin", "Çekiç", 5)

class Engineer extends Person {};  // Engineer -->Subclass (Child) Person --> Superclass (Parent)

const gurcan = new Engineer("Gürcan", "Çekiç", 40); */

/* console.log(arin);
console.log(gurcan); */

// OBJE + (name, surname...) => Person

// Person => Engineer

/* console.log(arin instanceof Person);
console.log(gurcan instanceof Engineer);
console.log(gurcan instanceof Person);
console.log(arin instanceof Engineer); */

/* class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    fullName() {
        return this.name + " " + this.surname;
    }

}

class Engineer extends Person {
    constructor(name, surname, age, job) {
        super(name, surname, age);
        this.job = job;
    }

    getMoney() {
        console.log("PARA KAZAN");
    }
}

const arin = new Person("Arin", "Çekiç", 5);

const gurcan = new Engineer("Gürcan", "Çekiç", 40, "engineer");

console.log(arin);
console.log(gurcan);

// OBJE + (name, surname, age) => Person

// Person  + job, getMoney() => Engineer

console.log(gurcan.getMoney());
//console.log(arin.getMoney());

console.log(arin instanceof Engineer); */


/* class Person {
    constructor(name, surname, age) {
        this.name = name;
        this.surname = surname;
        this.age = age;
    }

    fullName() {
        return this.name + " " + this.surname;
    }

}

class Engineer extends Person {
    constructor(name, surname, age, job) {
        super(name, surname, age);
      this.name = name;
        this.surname = surname;
        this.age = age; 
        this.job = job;
    }

    getMoney() {
        console.log("PARA KAZAN");
    }
}

const gurcan = new Engineer("Gürcan", "Çekiç", 40, "engineer"); */

class ExtendedArray extends Array {
    shuffle() {
        this.sort(() => Math.random() - 0.5);
    }
}

let myArr = new ExtendedArray(1,2,3,4,5);

console.log(myArr instanceof ExtendedArray);
console.log(myArr instanceof Array);
console.log(myArr);
myArr.shuffle();
console.log(myArr);
