// PRE: create separate module to import fetch function(request) in index.js

//Folosind fetch() prima data returnam userii cu id-ul mai mare ca 5
//.then - returnam user names si city
//hint nu uitati sa transformati primul raspuns ca si json
// const url = "https://jsonplaceholder.typicode.com/users"

// fetch(url)
//   .then(response => response.json())
//   .then(myJson => myJson.map(index => console.log(index.username, index.id)));


//Ex1. 
//Setati 3 cookie-uri cu numele, profesia si varsta voastra
//Stocatile in 3 variabile dupa si afisatile in consola
//Setati 2 cookie-uri (cu ce valori vreti voi) care sa expire la un momendat
// Stocatile si pe astea in alte 2 variabile
// La final vrem sa vedem 5 cookieuri in console.log


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