//Ex1: Creati un array care sa aiba length-ul 5. Demonstrati ca length-ul este 5.

var myArray = ['firstItem', 'secondItem', 'thirdItem', 'fourthItem', 'fifthItem'];
var result1 = myArray.length;
console.log(result1)

//Ex2: Din cele 2 arrayuri de mai jos, folositi o metoda sa avem unul singur

var array1 = ['Car', 'Vehicle'];
var array2 = ['House', 'Job'];

var result2 = array1.concat(array2);
console.log(result2)


//Ex3: Creati 2 variabile, una care sa dea true si una care sa dea false atunci cand folosim metoda isArray()

var trueArray = ['first', 'second', 'third'];
var result3 = Array.isArray(trueArray);
console.log(result3)

var falseArray = 'first second third';
var result4 = Array.isArray(falseArray);
console.log(result4)

//Ex4: Folositi o metoda pe arrayuri avand in vedere variabila de mai jos, sa obtinem rezultatul "one and two and three and four and five" 
// fara sa modificati variabila initiala

var numbers = ['one', 'two', 'three', 'four', 'five'];
var result5 = numbers.join(' and ');
console.log(result5)

//Ex5: Adaugati 2 elemente noi in arrayul de mai jos
var cars = ['Tesla', 'Dacia'];
cars.push('Ford', 'Fiat');
console.log(cars)

//Ex6: Avand rezultatul de la exercitiul anterior, scoateti ultimul element intrat.

cars.pop();
console.log(cars)

//Ex7: Avand rezultatul exercitiului anterior, adaugati elementul 'Dodge' la inceputul arrayului

cars.unshift('Ferrari');
console.log(cars)

//Ex8: Avand rezultatul exercitiului anterior, inversati ordinea elementelor din array

cars.reverse();
console.log(cars)

//Ex9: Avand in vedere rezultatul anterior Folositi o metoda pe arrayuri care sa inlocuiasca incepand de la elementul 'Tesla' si sa adauge alte 2 elemente noi - splice();

cars.splice(2, 3, 'Mertz', 'BMW');
console.log(cars)


//Ex10: Sortati urmatorul array de la mic la mare si de la mare la mic 
var arrayNumbers = [1, 5, 20, 30, 100];

arrayNumbers.sort(function (a, b) {
    return a - b;
});
console.log(arrayNumbers)

arrayNumbers.sort(function (a, b) {
    return b - a;
});
console.log(arrayNumbers)


//Ex11 : Aveti urmatorul array - folositi o functie care sa ia arrayul ca argument si sa-l returneze ordonat
var fruitsArray = ['Apple', 'Lemon', 'Banana', 'Orange', 'Bere', 'Mici'];

function sorteazaArray(array) {
    return array.sort();
}

console.log(sorteazaArray(fruitsArray))


// Ex1
// Creati un obiect "car"
// Adaugati proprietatea name si valoarea Tesla
// Adaugat proprietatea wheels si valoarea 4
// Schimbati valoarea name sa fie Mercedes
// Stergeti proprietatea name

var car = {};
car.name = 'Tesla';
car.wheels = 4;
car.name = 'Mercedes';
delete car.name;

console.log(car)


//Ex2
// Creati un obiect cu 4 proprietati
// Stocati "key"-urile intr-o variabila noua
// intr-o alta variabila vreau sa am toate key-urile cu litere mari
// Stocati valorile intr-o variabila noua
// intr-o alta variabila vreau sa am toate valorile cu litere mici
// vreau la final sa ma rezultatul un singur string care sa contina o fraza de genul "proprietatea1 proprietatea2 proprietatea3 proprietatea4 reprezinta ceva"

var om = {
    name: 'Gigica',
    varsta: 21,
    sex: 'Neutru',
    studii: 'Liceu'
}

var omKeys = Object.keys(om);
console.log(omKeys)

var omValues = Object.values(om);
console.log(omValues)

omValues.push('vrea la facultate');
var omString = omValues.join(" ");
console.log(omString)

//nu am gasit cum sa schimb dimensiunea literelor pentru key-uri si valori. Nici de rezultatul final nu sunt sigur daca asta trebuia sa iasa.


//Ex3
// Creati un obiect  cu 3 proprietati si una dintre ele sa reprezinte o  metoda
// Metoda din obiect vreau sa returneze sau sa printeze (console.log()) prima valoare impreuna cu a doua valoare.

var telefon = {
    name: 'Samsung',
    cameras: 4,
    call: function () {
        console.log(this.name + ' has ' + this.cameras + ' cameras')
    }

}
telefon.call()


//Ex4 
// Creati un obiect cu cateva proprietati
// "Copiati" obiectul printr-o metoda specifica obiectelor(vedeti pe google) si stocatil intr-o alta variabila
// Pe obiectul nou adaugam 2 noi proprietati
// Avem obiectul de mai jos, folosind o metoda pe obiecte faceti "merge" intre cele 2 obiecte si salvati-l sub un nume nou.
myHouse = {
    rooms: 3,
    zone: 'Bucium',
    animals: 1
}

newObject = {
    furniture: 'sofa',
    chairs: 6,
    table: 'a big one'
}

duplicateObject = Object.assign({}, newObject);
console.log(duplicateObject)

duplicateObject.electrics = 'microwave',
    duplicateObject.beds = 2
console.log(duplicateObject)

finalObject = Object.assign(myHouse, duplicateObject);
console.log(finalObject)


// Ex5 
// Creati un obiect care sa contina un alt obiect in interorul lui cu 2 proprietati
// Accesati proprietatile acelui obiect si stocati key-le intr-o variabila separata.
// transformati arrayul intr-un singur string care sa rezulte "proprietatea1 si proprietatea2 apartin obiectului x"

var father = {
    child: {
        name: 'Gigel',
        age: 12
    }
}

var keys = Object.keys(father.child);

var family = keys.join(' si ' ) + ' apartin obiectului father';

console.log(family)


//Ex6
// Avem obiectul : 
myObject = {
    surname: 'Applegate',
    name: 'John',
}
//Adaugati o metoda care sa sorteze cele 2 valori ale numelui.

var values = Object.values(myObject);
values.sort()
console.log(values)


//Ex7 
//Faceti o functie constructor
// Cu functia constructor creati 3 obiecte cu valori diferite
// Pentru toate valorile din acele obiecte transformatile in litere mari.



function Phone(name, memory, buttons) {
    this.name = name;
    this.memory = memory;
    this.buttons = buttons;
}

var first = new Phone('samsung', '256', 5);
var second = new Phone('LG', '516', 6);
var third = new Phone('Motorola', '128', 10);

console.log(first)


// Poate nu am inteles enuntul, dar nu am gasit cum sa schimb key-urile si valorile cu litere mici, respectiv litere mari.
// Valabil pentru exerctiile 2 si 7.