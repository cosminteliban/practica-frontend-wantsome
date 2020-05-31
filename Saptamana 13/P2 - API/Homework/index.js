//fetch

//ex1.
//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json

const url = "https://jsonplaceholder.typicode.com/users"

fetch(url)
  .then(response => response.json())
  .then(myJson => myJson.map(user => ({ user: user.username, id: user.id })))
  .then(myJson => myJson.filter(user => user.id > 5))
  .then(response => console.log(response))
  // .then(myJson => console.log(myJson.map(user => ({name: user.name, city: user.address.city}))))


//ex2.

// //1. fetch some horror books
// //2. save the ones that have more than 230 pages
// //3. display the ones that have more than one author

const url2 = 'https://www.googleapis.com/books/v1/volumes?q=horror';

fetch(url2)
  .then(response => response.json())
  .then(data => console.log(data.items.map(book => book.volumeInfo)
    .filter(book => book.pageCount > 230)
    .filter(book => book.authors.length > 1)))



// //ex3.1

// // folosind fetch() vom face un post catre url-ul de mai jos
// // trebuie sa completati in options ce metoda folosim, ce punem in body si ce punem in headers.


const url3 = 'https://jsonplaceholder.typicode.com/posts';
const myPost = {
  title: 'Javascript Post is awesome',
  body: 'lorem ipsum etc',
  userId: 1
}

const options = {
  method: 'post',
  body: JSON.stringify(myPost),
  headers: {'Content-Type': 'application/json'}
};

fetch(url3, options)
  .then(res => {console.log(res.json())})





// //cookie

// //Ex1. 
// //Setati 3 cookie-uri cu numele, profesia si varsta voastra
// //Stocatile in 3 variabile dupa si afisatile in consola
// //Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// // Stocatile si pe astea in alte 2 variabile
// // La final vrem sa vedem 5 cookieuri in console.log


document.cookie1 = "name = Cosmin Teliban"
document.cookie2 = "ocupation = PR & Marketing"
document.cookie3 = "age = 30"
document.cookie4 = "day = Fri; Expires = Fri, 15 May 2020 14:28:00 GMT"
document.cookie5 = "year = 2020; Expires = Fri, 15 May 2020 14:28:00 GMT"

const myCookie1 = document.cookie1;
const myCookie2 = document.cookie2;
const myCookie3 = document.cookie3;
const myCookieExpire1 = document.cookie4;
const myCookieExpire2 = document.cookie5;

console.log(myCookie1);
console.log(myCookie2);
console.log(myCookie3);
console.log(myCookieExpire1);
console.log(myCookieExpire2);


//   //Ex2. 
// //Stocati in localStorage urmatoarele chei si valori ("width" "100px") ("height" "100px") ("background-color" "green")
// //stocatile in 3 variabile diferite
// // folositile pentru a construi un patrat cu ele

localStorage.setItem("width", "100px");
localStorage.setItem("height", "100px");
localStorage.setItem("background-color", "orange");

const width = localStorage.getItem("width");
const height = localStorage.getItem("height");
const background = localStorage.getItem("background-color");
const div = document.createElement("div");
div.style.width = width
div.style.height = height
div.style.background = background
document.body.appendChild(div)




// //ex3. Obiectul de mai jos il puneti intr-un fisier separat "world.json"
// //faceti fech intr-un fisier separat de index.js
// //importati fetch-ul in index.js
// // stocati tot raspunsul in localStorage - hint - stringify
// // Folosindu-va de html css si JS afisati autorul si tilul iar dedesubt video-ul sa putem da play(folositi media)
// // in functie de rating afisati atatea stele cat are ratingul de exemplu daca ratingul e 3 afisam sub video * * *



// import world from 'fetch.js';
// console.log(world);

//am facut json separat, am facut fatch intr-un fisier separat .js dar nu reusesc sa fac importul.
