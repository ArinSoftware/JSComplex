// NEW OBJECT SYNTAX

//1 - Shorthand Properties 

/* let name = 'arin', age = 5; */

/* const myObj = {
    name: name,
    age: age
} */

/* const myObj = {
    name,
    age
}

console.log(myObj.name);
console.log(myObj.age); */

//2 - Computed Property Names

/* let prop1 = 'name';

let myObj = {}

myObj[prop1] = 'arin'

console.log(myObj); */

/* let prop1 = 'name';

let myObj = {
    [prop1]: 'arin'
}

console.log(myObj); */


//3 - Short Method Syntax

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName: function() {
        return this.name + " " + this.surname
    }
} */

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName() {
        return this.name + " " + this.surname
    }
} */

/* console.log(person.fullName()); */

//4 - Object Destructuring

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName() {
        return this.name + " " + this.surname
    }
} */

/* let myVar1 = person.name;
console.log(myVar1);

let myVar2 = person.age;
console.log(myVar2); */

/* let { name: myVar1, age:myVar2 } = person;
console.log(myVar1);
console.log(myVar2); */

/* let { name: name, age: age } = person;
console.log(name);
console.log(age); */

/* let { name, age } = person;
console.log(name);
console.log(age); */

/* const books = [
    {      
      title: "Kırmızı Pazartesi",
      author: "Haruki Murakami",
      pageNum: 296,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064101-1.jpg",
      topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
    },
    {      
      title: "Şeker Portakalı",
      author: "Jose Muro de Vasconselos",
      pageNum: 200,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0000000064031-1.jpg",
      topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
    },
    {      
      title: "En Uzun Yüzyıl",
      author: "İlber Ortaylı",
      pageNum: 296,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001744876001-1.jpg",
      topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
    },
    {      
      title: "Dracula",
      author: "Bram Stoker",
      pageNum: 200,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001828853001-1.jpg",
      topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
    },
    {      
      title: "Karamazov Kardeşler",
      author: "Fyodor Mihayloviç Dostoyevski",
      pageNum: 200,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001803800001-1.jpg",
      topic: "İrlandalı yazar Bram Stoker’ın, iki taraf arasındaki bu irade ve güç çatışmasını işlediği ve korku edebiyatının başyapıtlarından biri sayılan Dracula, yayımlanmasının üzerinden yüz yılı aşkın süre geçmesine karşın, bugün de aynı ilgiyle okunuyor."
    },
    {      
      title: "Sultanın Korsanları",
      author: "Emrah Safa Gürcan",
      pageNum: 296,
      imageURL: "https://i.idefix.com/cache/600x600-0/originals/0001780787001-1.jpg",
      topic: "1968-1970 yılları arasında geçen olaylar, o günün toplumsal gerçeklerini de satırlara taşıyor. Ama romanın odağında bu toplumsal olaylar değil üçlü bir aşk var. Gençliğin rüzgârıyla hareketlenen İmkânsızın Şarkısını ölümle erken karşılaşan gençlerin hayatı yönlendiriyor. Hiçbir şeyin önem taşımadığı, amaçsızlığın ağır bastığı, özgür seksin kol gezdiği bir öğrenci hayatı... Ama diğer yanda da yoğun duygular var... İmkânsız aşklar, imkânsız şarkılar söyleten. Hemen hemen her Japon gencinin okuduğu roman anayurdu dışında da çok kişi tarafından sahipleniliyor."
    }

    ]


    for (const {title, author, pageNum} of books) {
        console.log(title + ': ' + author + ': ' + pageNum);
    }
 */





//5 - Spread Operator in Object Literals (...)

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName() {
        return this.name + " " + this.surname
    }
}

const person2 = {...person};

console.log(person2); */

/* const myObj1 = {
    name: 'arin',
    age: 6
}

const myObj2 = {
    job: 'student',
    gender: 'female'
}

const arin = {...myObj1, school: 'Zehra Baysal', ...myObj2};

console.log(arin); */


//6 - REST Operator in Object Literals


/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName() {
        return this.name + " " + this.surname
    }
} */

/* const {name, surname, age} = person;

console.log(name); */

/* const {name, ...rest} = person;

console.log(name);

console.log(rest); */

//7 - Object Values - Object Entries

/* const person = {
    name: 'John',
    surname: 'Doe',
    age: 40,
    fullName() {
        return this.name + " " + this.surname
    }
}

console.log(Object.keys(person));
console.log(Object.values(person));
console.log(Object.entries(person)); */