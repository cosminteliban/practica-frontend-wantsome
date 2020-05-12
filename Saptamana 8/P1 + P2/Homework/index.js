//Ex1
//Vreau sa am o functie care sa-mi calculeze suma dintre 2 numere daca ele sunt diferite iar daca sunt egale sa-mi imulteasca suma lor cu 5
//ex myFunction(10, 5) - output 15 // myFunction(10,10) - output 100

let sumOrMult = (a, b) => {
  if (a === b) {
    return a * b;
  } else {
    return (a + b) * 5;
  }
}


console.log(sumOrMult(3, 4));



//Ex2
//Vreau sa am o functie care sa returneze true daca ambele numere sunt egale cu 30 sau daca suma lor este egala cu 30
//ex testFunction(30, 30) - true 
//testFunction(15,15) - true
//testFunction(10, 15) - false

let trueOrFalse = (a, b) => {
  if (a === 30 && b === 30) {
    return true;
  }
  else if ((a + b) === 30) {
    return true;
  }
  else return false;

}

console.log(trueOrFalse(15, 16));

const testFunction = (number1, number2) => number1 === 30 && number2 === 30 || number1 + number2 === 30;
console.log(testFunction(30, 20));


//Ex3
//Vreau sa am o functie care sa verifice un string si daca stringul incepe cu 'JS' sa returneze acel string iar daca nu incepe sa-l adauge
//checkString('JSisAwsome') - JSisAwsome
//checkString('isEasy') - JSisEasy
//checkString(null) - JS


let checkString = (str) => {
  if (str === null) {
    return str;
  } else if (str.includes('JS')) {
    return str;
  } else {
    return `JS ${str}`;
  }
}
console.log(checkString('isEasy'));


//Ex4
//Scrieti o functie care sa scoata literele/cifrele duplicate dintr-un string/numbar
//removeDuplicates('aabcdeef') - 'abcdef'
//removeDuplicates(122334) - 1234

const removeDuplicates = (aString) => {
  let noDuplicates = ''
  for (let i = 0; i < aString.length; i++) {
    if (noDuplicates.indexOf(aString[i]) !== -1) continue;
    noDuplicates += aString[i];
  }
  return noDuplicates;
}
console.log(removeDuplicates('aassdeeeewwwfe'));


//Ex5
// Gasiti cel mai lung string intr-o fraza
//findLongestString('Wantsome is Awsomeeee today') - output 'Awsomeeee'

let findWord = str => {
  let strSplit = str.split(' ');
  let result = 0;
  for (let i = 0; i < strSplit.length; i++) {
    if (strSplit[i].lenght > strSplit[result].length) {
      result = i;
    }
  }
  return strSplit[result];
}
console.log(findWord('Wantsome is Awesomeeee today'))


//Ex6
//Scrieti o functie care sa aiba output-ul asta
// *  
// * *  
// * * *  
// * * * *  
// * * * * *  

let duplicate = () => {
  let string = '';
  for (let i = 0; i < 5; i++) {
    string += '*';
    console.log(string);
  }
}
duplicate()

//ex7
const negativeNumbers = [];

function extractNegativeNumbers(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] < 0) {
      negativeNumbers.push(numbers[i]);
    }
  }
  // append any negative numbers found in the numbers array 
  // into the negativeNumbers array constant variable above

}
extractNegativeNumbers([1, 2, -5, 4, -6])

console.log(negativeNumbers)

//ex8
//Avem o functie cu 2 numere si un operator, vrem sa obtinem rezultatul in functie de operator - "add", "substract", "multiply", "divide"
//ex calculate(2, 5, "add") => 7
//calculate(10, 8, "substract") => 2

function calculate(firstNumber, secondNumber, operation) {
  if (operation === "add") {
    return firstNumber + secondNumber;
  }
  else if (operation === "substract") {
    return firstNumber - secondNumber;
  }
  else if (operation === "multiply") {
    return firstNumber * secondNumber;
  }
  else if (operation === "divide") {
    return firstNumber / secondNumber;
  }
}
console.log(calculate(10, 8, "substract"))



//Ex9
// Vreau sa am o functie care sa verifice daca numarul dat este divizibl cu 3, 5 sau ambele si sa printeze "THREE", "FIVE", "BOTH" iar daca nu este cu niciunul sa returneze numarul
// isDiv(15) => "BOTH"
// isDiv(9)=> "THREE"
// isDiv(7)=> 7

function isDivisible(number) {
  if (number % 3 === 0 && number % 5 === 0) {
    return "BOTH";
  }
  else if (number % 3 === 0) {
    return "THREE";
  }
  else if (number % 5 === 0) {
    return "FIVE";
  }
  else { return number }
}
console.log(isDivisible(15))


//Master exercises
//Ex9 
// Vreau sa pot afisa data si ziua sub urmatorul format:
// Azi este : Luni. 
// Ora este : 20 PM : 30 : 38


function dayTime() {
  let today = new Date();
  let day = today.toLocaleDateString('ro-RO', { weekday: 'long' });
  let firstStatement = `Astazi este: ${day}`
  let hour = today.getHours();
  let minute = today.getMinutes();
  let second = today.getSeconds();
  let meridian = checkAmPm(hour);
  let secondStatement = `Ora este: ${hour} ${meridian} : ${minute} : ${second}`;
  console.log(secondStatement)
}

function checkAmPm(hour) {
  if (hour >= 12) {
    return 'PM';
  }
  else {
    return 'AM';
  }
}


//ex10
// ATM-urile iti dau voie sa folosesti pin-uri din 4 sau 6 cifre. Faceti o functie care sa returneze true daca pin-ul e corect si false daca e gresit
// validPin("1234") => true
// validPin("12345") => false
// validPin("z23f") => false

function pinVerification(input) {
  let numberInput = String(input);
  let numbers = /^[0-9]+$/;
  let isNumber = numberInput.match(numbers);
  return (numberInput.length === 4 || numberInput.length === 6) && isNumber !== null;

}



// console.log(pinVerification("4444"))

// const validPin = pin => {
//   if (pin.length === 4 || pin.length === 6) {
//     if (isNaN(pin)) {
//       return false;
//     }
//     return true;
//   }
// }
// return false // rezolvare de la curs




//ex11 
//Folosind regex vreau sa scot toate vocalele dintr-un string
// removeVowels("Hey I am developer") => "Hy m dvlpr"

function removeVowels(str) {
  return str.replace(/[aeiou]/gi, '');
}

console.log(removeVowels('Hey I am developer'))



//ex12
//Vreau sa am o functie care sa verifice daca un numar este patrat
// isSquareNumber(-1) => false
// isSquareNumber(25) => true
// isSquareNumber(3) => false


function isSquareNumber(number) {
  return number > 0 && Math.sqrt(number) % 1 === 0;
}
console.log(isSquareNumber(25))



//ex13
// Vreau sa am o functie care sa verifice daca un cuvant este o anagrama- daca toate literele din primul string se regasesc in al doilea
// isAnagram("School master", "The class room") => true
// isAnagram("silent", "listen") => true

function verifyAnagram(word1, word2) {
  var str1 = word1.toLowerCase().split('').sort().join('').trim();
  var str2 = word2.toLowerCase().split('').sort().join('').trim();

  if (str1 === str2) {
    this.isAnagram = true;
  } else {
    this.isAnagram = false;
  }
  return this.isAnagram;
}


//Implementati toate exercitiile folosind sintaxa ES6
//Toate denumirile de variabile si functii trebuie sa fie in EN
//Folositi nume sugestive si aveti grija la indentare

/*
1. Implementati o functie care accepta ca parametru o valoare numerica si returneaza suma numerelor de la 1 pana la valoarea specificata
*/

let calculateSum = (number) => {
  let sum = 0;
  for (let i = 1; i <= number; i++) {
    sum = sum + i;
  }
  console.log(sum)
}


/*
2. Implementati o functie care accepta ca parametru un string si returneaza cel mai lung cuvant din acel string.
*/


let longestWord = (string) => {
  let words = string.split(' ');
  words.sort((firstWord, secondWord) => {
    return secondWord.length - firstWord.length;
  });
  console.log(words[0]);
}


/*
3. Implementati o functie care accepta ca parametru un string si ii face 'reverse'
*/

let reverse = (str) => {
  let reversedWord = str.split("").reverse().join("");
  console.log(reversedWord)
}


/*
4. Implementati o functie care accepta ca parametru un string si inlocuieste fiecare litera din acesta cu urmatoarea litera din alfabet
*/

let replace = (str) => {
  let newStr = "";
  for (i = 0; i < str.length; i++) {
    let asciiCode = str[i].charCodeAt();
    if ((asciiCode > 96 && asciiCode < 122) || (asciiCode > 64 && asciiCode < 90)) {
      newStr += String.fromCharCode(asciiCode + 1);
    }
    else if (asciiCode === 122) {  //z
      newStr += "a";
    }
    else if (asciiCode === 90) { //Z
      newStr += "A";
    }
    else {
      newStr += str[i];
    }
  }
  console.log(newStr)
}


// const switchLetters = string =>
//   string.replace(/[a-zA-Z]/g, function (i) {
//     switch (i) {
//       case "z":
//         return "a";
//       case "Z":
//         return "A";
//       default:
//         return String.fromCharCode(i.charCodeAt(0) + 1);
//     }
//   })
// console.log(switchLetters("abvfddZ  .!Zz")) // rezolvare de la curs




/*
5. Implementati o functie convertToTime care accepta ca parametru o valoare numerica si o converteste la numarul de ore si minute corespunzatoare.
Exemplu: input: 64  ->  output: 1:4
*/


const convertToTime = (number) => {
  console.log(`${(number / 60).toFixed(0)}:${number % 60}`)
}


/*
6. Implementati o functie care accepta ca parametru un string si returneaza string-ul cu toate literele ordonate alfabetic
*/


const orderAlphabet = (str) => {
  console.log(str.split("").sort().join(""))
}