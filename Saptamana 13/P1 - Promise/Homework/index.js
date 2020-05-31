// 1. Creati o functie care primeste un numar ca si argument si returneaza un Promise care testeaza daca valoarea este
// mai mica sau mai mare decat 10 - se va face reject / resolve in functie de valoarea de adevar a conditiei de
// comparatie.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const promiseForNumber = (number) => {
  return new Promise((resolve, reject) => {
    if (number < 10) {
      resolve(number);
    } else {
      reject(number);
    }
  });
};


promiseForNumber(7)
  .then((result) => {
    console.log(`The result is number ${result} and is less than 10`);
  })
  .catch((result) => {
    console.log(`The result is number ${result} and is greater or equal to 10`);
  });


promiseForNumber(10)
  .then((result) => {
    console.log(`The result is number ${result} and is less than 10`);
  })
  .catch((result) => {
    console.log(`The result is number ${result} and is greater or equal to 10`);
  });



// 2. Creati o functie care primeste un string ca si argument si returneaza un Promise care testeaza daca acesta contine
// sau nu cuvantul “promise” - se va face reject / resolve in functie de valoarea de adevar a conditiei specificate.
// Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.

const promiseForString = (string) => {
  return new Promise((resolve, reject) => {
    if (string === "promise") {
      resolve(string);
    } else {
      reject(string);
    }
  });
};

promiseForString("promise")
  .then((result) => {
    console.log("This phrase contains the word promise");
  })
  .catch((result) => {
    console.log("This phrase does not contain the word promise");
  })

promiseForString("notAPromise")
  .then((result) => {
    console.log("This phrase contains the word promise");
  })
  .catch((result) => {
    console.log("This phrase does not contain the word promise");
  })





/*
3. Creati o functie care primeste un singur parametru si returneaza un Promise. 

Folosind setTimeout, dupa 500ms, acest Promise fie va face resolve, fie va face reject, 
in functie de urmatoarele cazuri: 

daca input-ul este un string, 
    Promise-ul se va rezolva cu rezultatul avand valoarea string-ului uppercased; 
daca input-ul nu este un string,
   Promise-ul va face reject cu rezultatul avand valoarea string-ului fara nicio modificare.

Apelati functia si folositi consumatorii then si catch pentru a trata ambele cazuri.
*/

const promiseForString2 = (inputStr) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (typeof inputStr === "string") {
        resolve(inputStr.toUpperCase());
      } else {
        reject(inputStr);
      }
    }, 3000);
  });
};

const returnedPromiseCorrectly = promiseForString2("myString");
const returnedPromiseIncorrectly = promiseForString2(4);

returnedPromiseCorrectly
  .then((result) => {
    console.log(`String-ul uppercased este:  ${result}`);
  })
  .catch((error) => {
    console.log(`String-ul pentru cazul de eroare este: ${error}`);
  })
  .finally(() => console.log("Promise-ul a fost executat"));

returnedPromiseIncorrectly
  .then((result) => {
    console.log(`String-ul uppercased este:  ${result}`);
  })
  .catch((error) => {
    console.log(`String-ul pentru cazul de eroare este: ${error}`);
  })
  .finally(() => console.log("Promise-ul a fost executat"));




//     4. Creati doua functii care folosesc Promises pentru a putea face o inlantuire (Promise chain). Prima functie,
// capitalizeWords(), va primi ca si argument un array de cuvinte si va aplica o operatiune de capitalize pe acestea.
// A doua functie, sortWords(), va primi ca si argument rezultatul primului Promise si va sorta cuvintele in ordine
// alfabetica. In cazul in care array-ul initial contine un element cu o valoare diferita de tipul string, se va face reject.


const promiseChain = (array) => {
  return new Promise((resolve, reject) => {
    let onlyWord = !array.find((item) => {
      return typeof item !== String;
    });

    if (onlyWord) {
      resolve(array);
    } else {
      reject(array);
    }
  });
};

let capitalizeWords = (array) => {
  return array.map((item) => {
    return item.toUpperCase();
  });
}

let sortWords = (array) => {
  return array.sort();
}

let aaa = promiseChain(['zzz', 'aaa',1, 'bbb'])
  .then((array) => {
    return array.map((item) => {
      return item.toUpperCase();
    });
  })
  .then((array) => {
    return array.sort();
  }).catch(e => {
    console.log(e);
  });

  console.log(aaa);

//n-am reusit sa dau de capat acestui exercitiu. am incercat ceva dar nu e ce trebuia.


// 5. Implementati functionalitatea anterior prezentata si folositi-o pentru a apela mai multe API-uri externe, la alegere (
//     cel putin 3 )