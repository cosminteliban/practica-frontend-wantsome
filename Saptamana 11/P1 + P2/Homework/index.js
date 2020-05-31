
//ex.1.
// Scrieti o functie care sa mute literele cu o litera mai incolo folosind .map
// de exemplu moveLetters('hello') // => 'ifmmp'
// moveLetters('abcxy') // => "bcdyz"
//hint : String.fromCharCode() String.charCodeAt()


const moveLetters = function (string) {
    let newString = string.split("")
        .map((letter) => {
            return String.fromCharCode(letter.charCodeAt() + 1);
        })
        .join("");
    console.log(newString);
}


// ex2
//   // Vreau sa am o functie care sa faca uppercase la cuvinte in functie ca in exemplu de mai jos
//   // changeWordCase('hey ppl, lets learn javascript together') // => "HEY ppl, LETS learn JAVASCRIPT together SOMETIME"


let changeWordCase = function (string) {
    let newString = string.split(" ")
        .map((word, i) => {
            if (i % 2 === 0) {
                return word.toUpperCase();
            }
            else {
                return word;
            }
        }).join(" ");
    console.log(newString);
}


//   // ex3
// // Faceti asftel incat toate variabilele de mai jois sa returneze ceea ce zice numele

const arr = [
    { name: 'sasha', sex: 'f', age: 7, species: 'cat' },
    { name: 'john', sex: 'm', age: 133, species: 'human' },
    { name: 'titus', sex: 'm', age: 62, species: 'human' },
    { name: 'kalifa', sex: 'f', age: 255, species: 'human' },
    { name: 'oreo', sex: 'm', age: 21, species: 'cat' },
];

let allCats = arr.filter((item) => {
    return item.species === "cat";
})
console.log(allCats)


let allHumans = arr.filter((item) => {
    return item.species === "human";
})
console.log(allHumans)


let allFemales = arr.filter((item) => {
    return item.sex === "f";
})
console.log(allFemales)


let totalOfAllAges = arr.reduce((acc, item) => {
    return acc + item.age;
}, 0)
console.log(totalOfAllAges)


let averageAgeOfCats = arr.filter((item) => {
    return item.species === "cat";
}).reduce((acc, item, i, array) => {
    return acc + item.age;
}, 0) / allCats.length;
console.log(averageAgeOfCats)


let averageAgeOfHumans = arr.filter((item) => {
    return item.species === "human";
}).reduce((acc, item, i, array) => {
    return acc + item.age;
}, 0) / allHumans.length;
console.log(averageAgeOfHumans)


let avgLengthOfNames = arr.reduce((acc, item) => {
    return acc + item.name.length;
}, 0) / arr.length;
console.log(avgLengthOfNames)



//   //ex 1.
// // Faceti o functie numita composedValue care ia ca argumente 2 functii si returneaza valoarea lor - // f1(f2(value))
// //ex composedValue(square, double, 5);  // 100
// // functia square returneaza patratul numarului iar double - dublul numarului

const composedValue = (function1, function2, number) => {
    return function1(function2(number));
}

const double = (number) => {
    return number * 2;
}

const square = (number) => {
    return number * number;
}

console.log(composedValue(square, double, "5"))


// //ex.2
// //faceti o functie 'compose' care atunci cand va fi apleata returneaza rezultatul altor 2 functii;
// //exemplu const myFunction = compose(square, double) 
// // myFunction(5)  --> 100
// // myFunction(10) --> 400  ...etc

const double2 = (number) => {
    return number * 2;
};

const square2 = (number) => {
    return number * number;
};

const myFunction = (number) => {
    return square2(double2(number));
};

console.log(myFunction(5));
console.log(myFunction(10));


// //ex.3
// //faceti o functie find care ia ca parametrii un array si o functie care testeaza arrayul si returneaza doar elmentele care trec testele.
// // find([1,2,3,4,5], isOdd); returneaza 1 3 5

const returnElements = (param1, param2) => {
    return param1.filter(param2);
}
let numbers = [1, 2, 3, 4, 5];
let isOdd = (item) => {
    return item % 2;
}
console.log(returnElements(numbers,isOdd))