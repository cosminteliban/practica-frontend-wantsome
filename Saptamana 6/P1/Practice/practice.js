// Recap

// strings

var myFirstString = "My first String";

//numerotarea indexului pentru fiecare caracter in parte incepe de la 0

var stringLength = myFirstString.length //14

// function declaration types - intrebare de interviu - care sunt doua tipuri principale de declarare a unei functii?

//1.named function

function myFunctionDeclaration() {
    // cod - corpul functiei - blocul de cod
}

function myFunctionDeclaration(FirstParam, secondParam, thirdParam) // parametri
{
    var valueOfFirstParam = firstParam;
} 
// 2.function expression - declaratia functiei se atribuie unei variabile

var myExpressionDeclaration = function() {
    // cod                      function() - se numeste anonymus function - () -> face apel de functie

}

var resultWithArgs = myFunctionDeclaration ("A", "B", "C"); // ("A", "B", "C") sunt argumente


// Arrays - este folosit pentru a incapsula o colectie de mai multe valori.

 var fruits = ["mar", "banana", "pere"];
//  putem incapsula valori de un singur tip - un array de string uri

var random = ["mouse", 1, {key: 'value'}];
// putem incapsula si un array ce contine pe fiecare pozitie un tip de data diferit - ex - un string, un number si un obiect.
// primul element se afla pe pozitia 0

// Metode si Proprietati definite

// length - returneaza numarul de elemente dintr-un array

var myArray = ["madonna", "eminem", "will smith"];
var result = myArray.length; //stocam lungimea arrayului intr-o variabila numita result
console.log(result)  //3

// concat() - concateneaza 2 array-uri

var myArray = ["madonna", "eminem", "will smith"];
var mySecondArray = ["nightwish", "mettalica" ];
var result = myArray.concat(mySecondArray); // folosim concat pe prima variabila iar functiei concat ii oferim ca si argument valoarea pentru mySecondArray
console.log(result) // ["madonna", "eminem", "will smith", "nightwish", "mettalica"]

//Array.isArray - verifica daca un array este array - folosim cand vrem sa pasam un argument unei functii si vrem sa prevenim un caz de eroare
//si folosim un if la inceput, de exemplu.

var myArray = [20, 30, 40, 50];
var result = Array.isArray(myArray);
console.log(result) //true

// join() - transforma un array in string

var myArray = ["unu", "doi", "trei", "patru"];
var result = myArray.join(); //daca nu se pune nici un argument, automat join va pune virgula si va forma la final un string.
//daca i se ofera ca si argument caracterul spatiu, va fi obtinut un string al carui elemente vor fi separate prin spatiu.
console.log(result) // "unu, doi, trei, patru"

//push() - adauga un element la sfarsitul array ului

var myArray = ["unu", "doi", "trei", "patru"];
myArray.push("cinci");
console.log(myArray) // ["unu", "doi", "trei", "patru", "cinci"]



//array reprezinta o colectie - acestea structuri de date deservesc la mai multe scopuri:

//- queue - coada

//- stack  - stiva

var queue = [5    , 1, 2 ,3, 4]; 
// de fiecare data cand se adauga un nou element, se adauga la inceputul cozii. cand se elimina un element, se elimina mereu de la sfarsit/

var stack = [1, 2, 3,    5];
// toate elemente se adauga si se scot de la final.

queue.push(5)

stack.push(5)

// in javascript, array-ul functioneaza dupa exemplul de mai jos. funtioneaza ca un stack pentru metoda push de pe array uri si anume se adauga un element la sfarsitul array ului.

var myFirstArray = [1, 2, 3,    4];
myFirstArray.push(4);

// pop() - array ul este considerat a fi o stiva. mereu elimina ultimul element din array.

var myArray = ["unu", "doi", "trei", "cinshpe"];
myArray.pop();
console.log(myArray) //["unu", "doi", "trei"]

// shift() - array ul este considerat a fi o coada()


// unshift


// Exercitii generale


var obj = {
    a: 1,
    b: '13232',
    c: [1,3,4,5,6,{ nume: 'ciuperca'}],
    d: {
      d1: 123,
      d2: {
        d21: {
          potato: 1234
        }
      }
    },
    e: [{
      a: {
        a: {
          trew: "!!!!1234"
        }
      }
    }]
  }
console.log(obj.c[5].nume)


for (i = 1; i < 11; i++) {
  for (j = 0; j < 11; j++) {
      console.log(`${i} * ${j} = ${i*j}`)
  }
  console.log(`${i} * 0 = ${i*0}`);
  console.log(`${i} * 1 = ${i*1}`);
  console.log(`${i} * 2 = ${i*2}`);
  console.log(`${i} * 3 = ${i*3}`);
  console.log(`${i} * 4 = ${i*4}`);
  console.log(`${i} * 5 = ${i*5}`);
  console.log(`${i} * 6 = ${i*6}`);
  console.log(`${i} * 7 = ${i*7}`);
  console.log(`${i} * 8 = ${i*8}`);
  console.log(`${i} * 9 = ${i*9}`);
  console.log(`${i} * 10 = ${i*10}`);
}