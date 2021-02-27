// PROMISE

/* const books = [
    {name: "Pinball 1973", author: "Haruki Murakami"},
    {name: "Özgürlük", author: "Zygmunt Bauman"},
    {name: "Turkiye'de Çağdaşlaşma", author:"Niyazi Berkes"}
]

const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
} */

/* const addNewBook = (newBook) => {
    books.push(newBook)
}
 */

/* addNewBook({name: "Berlin Hatıralım", author: "Hüsrev Gerede"});

listBooks(); */

/* const addNewBook = (newBook, callback) => {
    books.push(newBook)
    callback();
}

addNewBook({name: "Berlin Hatıralım", author: "Hüsrev Gerede"}, listBooks); */

/* const promise1 = new Promise(function(resolve, reject) {
    reject('ERROR2');
    resolve('DATA');
    resolve('DATA2');
    reject('ERROR');
    reject('ERROR2');
})

console.log(promise1); */

// pending (undefined) - fullfilled - rejected => PROMISE STATE

/* const promise1 = new Promise(function(resolve, reject) {
    //resolve('DATA');
    reject('ERROR');
}) */

//console.log(promise1.value);

/* promise1.then(function (value) {
    console.log(value)
}) */

/* promise1.then((value) => {
    console.log(value)
}) */

//promise1.then(value =>  console.log(value));
//promise1.catch(reason =>  console.log(reason));

/* const promise1 = new Promise((resolve, reject) => {
    
    //resolve();

    reject();

}) */

/* promise1.then(()=> {
    console.log('VERILER ALINDI');
}); */

/* promise1.catch(()=> {
    console.log('VERILER ALINMADI');
}); */

/* promise1
    .then(()=> {
        console.log('VERILER ALINDI');
    })
    .catch(()=> {
        console.log('VERILER ALINMADI');
    })
    .finally(()=> {
        console.log('ÇALIŞ KÖLE')
    }) */

/* const promise1 = new Promise((resolve, reject) => {
    
    //resolve();
    
    reject();
    
})

promise1.then(()=> {
        console.log('VERILER ALINDI');
},()=> {
    console.log('VERILER ALINMADIIIIII');
}

) */

const books = [
    {name: "Pinball 1973", author: "Haruki Murakami"},
    {name: "Özgürlük", author: "Zygmunt Bauman"},
    {name: "Turkiye'de Çağdaşlaşma", author:"Niyazi Berkes"}
]

const listBooks = () => {
    books.map((book, index) => {
        console.log(book, index)
    })
} 


/* const addNewBook = (newBook, callback) => {
    books.push(newBook)
    callback();
} */

/* const addNewBook = (newBook) => {
    const promise1 = new Promise((resolve, reject) => {
        books.push(newBook)
        //resolve(books)
        reject()
    })

    return promise1
} */

//addNewBook({name: "Berlin Hatıralım", author: "Hüsrev Gerede"}, listBooks);

/* addNewBook({name: "Berlin Hatıralım", author: "Hüsrev Gerede"})
.then(()=> {
    console.log('Yeni List');
    listBooks();
}).catch(()=> {
    console.log('HATA ALDIK 2')
}) */

const addTwoNumbers = (num1, num2) => {
    const promise2 = new Promise((resolve, reject) => {
        const sum = num1 + num2;
        (typeof num1 !== 'number' || typeof num2 !== 'number')
        ? reject('2 SAYI GİRMENİZ GEREKİR')
        : resolve(sum)
    })
    return promise2
}

addTwoNumbers(4,'8')
.then((value) => {
    console.log('TOPLAM: ', value)
})
.catch((reason) => {
    console.log('HATA: ', reason)
})