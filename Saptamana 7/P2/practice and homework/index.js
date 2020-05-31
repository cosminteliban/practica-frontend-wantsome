// 1. Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"


function emailProtect(mail) {
  var arond = mail.split("@");
  var secondArond = arond[1].split(".");
  var result = arond[0] + "..." + secondArond[1];
  console.log(result);
  return result;
}

emailProtect("telibanncosmin@gmail.com")

// 2. Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
//  de ex: myFunction("i am superman") sa printeze "I Am Superman"

var myFunction1 = function (string) {
  var spaces = string.split(" ");
  for (i = 0; i < spaces.length; i++) {
    spaces[i] = spaces[i].charAt(0).toUpperCase() + spaces[i].slice(1);
  }
  console.log(spaces.join(" "))
}

myFunction1("i am superman and i am super")



// 3. Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"


function wordSwitch(value) {
  var myArray = value.split("");
  var i = 0;
  while (i < myArray.length) {
    if (myArray[i] === myArray[i].toUpperCase()) {
      myArray[i] = myArray[i].toLowerCase();
    } else {
      myArray[i] = myArray[i].toUpperCase();
    };
    i++;
  }
  return myArray.join("");
};
console.log(wordSwitch("fefrferFERFERGERG"));


//  4. Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"


function myFunction(word, number) {
  let result = "";
  for (i = 0; i < number; i++) {
    result += word;
  }
  console.log(result)
}
console.log(myFunction(" super", 2))


// 5. A palindrome is a word or a phrase that is the same whether you read it backward or forwards, for example, the word
// 'level'. Scrieti o functie care verifica daca un string este palindrom; Implementati mai multe variante


function palindrome(value) {
  var checkPalindrome = value.split("");
  if (checkPalindrome.reverse().join("") === value) {
    return value + " is palindrome";
  }
    return value + " isn't a palindrome";
};

console.log(palindrome("ana"));


// 6. Implementati o functie care accepta ca argument un array compus din mai multe array-uri de valori numerice si
// returneaza un array care contine ca si elemente cele mai mari numere din fiecare array
// 7. Implementati o functie care face reverse la un string
// 8. Implementati o functie care calculeaza factorialul unui numar
// 9. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul se termina cu cel din urma
// 10. Implementati o functie care accepta doua argumente: un array si o functie de adevar. Functia returneaza primul
// element din array care trece testul specificat
// 11. Implementati o functie care accepta ca argumente doua string-uri si verifica daca primul string contine toate literele
// celui de-al doilea string
// 12. Implementati o functie care accepta ca argumente doi parametri: un array si o valoare. Functia afiseaza fiecare
// element al array-ului pana cand intalneste elementul cu valoarea specificata
// 13. Scrieti o functie care elimina toate valorile false dintr-un array: false, null, 0, "", undefined, NaN
// 14. Scrieti o functie care repeta un string de n ori specificate