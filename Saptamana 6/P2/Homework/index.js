// Nu aveti voie sa folositi console.log in corpul functiilor, ci doar in afara lor !

// - Se va lua in considerare si utilizarea de nume sugestive pentru functii, parametri, variable.


// - Fiecare functie trebuie sa fie precedata de un comentariu pe mai multe linii in care veti descrie sub forma de pseudocod logica functiei


// Veti crea un fisier javascript separat pe care il veti include intr-un fisier html. Verificarea se va face prin deschiderea paginii html in browser.



// 1. Scrieti o functie sub forma named function care accepta ca argument un CNP si verifica sexul unei persoane. 
// In urma apelului acestei functii, se va returna un text de forma "Persoana verificata este de sexul M/F".


// verifica cnp
// daca acesta incepe cu cifra 1
// printeaza "Persoana verificata este de sexul M"
// daca nu
// "Persoana verificata este de sexul F"

function verifica(cnp) {
    var cnpString = cnp.toString();

    if (cnpString.charAt(0) == 1) {
        return "Persoana verificata este de sexul M";
    }
    else {
        return "Persoana verificata este de sexul F";
    }

}

// 2. Scrieti o functie sub forma function expression care accepta ca argument o valoare numerica cuprinsa intre 1 si 10 si 
// decide calificativul punctajului. Criteriile sunt urmatoarele:
// - 1-3 = E 
// - 4-6 = D
// - 7-8 = B
// - 9 = A
// - 10 = A+
// Functia va returna un text de forma "Calificatul corespunzator punctajului [punctaj] este [calificativ]".

// verifica daca nota este mai mica sau egala cu 3
// daca da, rezulta calificativul E
// altfel, daca este mai mare decat 3 dar mai mica sau egala cu 6
// rezulta calificativul D
// altfel, daca este mai mare decat 6 dar mai mica sau egala cu 8
// rezulta calificativul B
// altfel, daca este egala cu 9
// rezulta calificativul A
// altfel, daca este egala cu 10
// rezulta calificativul A+

var score = function (numar) {
    var calificativ;
    if (numar <= 3) {
        calificativ = "E";
    }
    else if (numar <= 6) {
        calificativ = "D";
    }
    else if (numar <= 8) {
        calificativ = "B";
    }
    else if (numar == 9) {
        calificativ = "A"
    }
    else if (numar == 10) {
        calificativ = "A+"
    }
    return `Calificatul corespunzator punctajului ${numar} este ${calificativ}`;
}

// 3. Scrieti o functie care accepta ca argument numele marcii unei masini si returneaza un text de forma: "Marca [marca] se produce in [tara]".
// Trebuie sa aveti macar 6 cazuri. In cazul in care functia nu recunoaste marca, va returna "Marca este necunoscuta. "
// Scrieti codul in 3 variante diferite. In declararea functiei trebuie sa se regaseasca o functie anonima.
// Una dintre implementari trebuie sa fie bazata pe Object Literals 
// ( read:  https://ultimatecourses.com/blog/deprecating-the-switch-statement-for-object-literals )

// verifica in ce tara se produce marca de masina introdusa.
// daca marca introdusa se afla in baza noastra de date
// printeaza numele acesteia cat si tara de provenienta "Marca [marca] se produce in [tara]".
// dar daca marca introdusa nu se regaseste in baza noastra de date
// printeaza "Marca este necunoscuta".


var cars1 = function (marca) {
    var masini = {
        'Dacia': 'Romania',
        'Toyota': 'Japonia',
        'Renault': 'Franta',
        'Ford': 'USA',
        'Skoda': 'Cehia',
        'Fiat': 'Italia'
    };

    if (masini[marca]) {
        return `Marca ${marca} se produce in ${masini[marca]}.`
    } else {
        return "Marca este necunoscuta.";
    }
}

function cars2(argMarca) {
    var masini = [
        {
            marca: 'Dacia',
            tara: 'Romania'
        },
        {
            marca: 'Toyota',
            tara: 'Japonia'
        },
        {
            marca: 'Renault',
            tara: 'Franta'
        },
        {
            marca: 'Ford',
            tara: 'USA'
        },
        {
            marca: 'Skoda',
            tara: 'Cehia'
        },
        {
            marca: 'Fiat',
            tara: 'Italia'
        }
    ];
    var masinaNoastra = masini.find((masina) => {
        return masina.marca === argMarca;
    });

    if (masinaNoastra) {
        return `Marca ${masinaNoastra.marca} se produce in ${masinaNoastra.tara}.`
    }
    else {
        return "Marca este necunoscuta."
    }

}

var cars3 = function (marca) {
    var tara;
    if (marca == "Dacia") {
        tara = "Romania";
    }
    else if (marca == "Toyota") {
        tara = "Japonia";
    }
    else if (marca == "Renault") {
        tara = "Franta";
    }
    else if (marca == "Ford") {
        tara = "USA";
    }
    else if (marca == "Skoda") {
        tara = "Cehia";
    }
    else if (marca == "Fiat") {
        tara = "Italia";
    }
    else {
        return "Marca este necunoscuta."
    }

    return `Marca ${marca} se produce in ${tara}.`

}


// 4. // 4. Scrieti o functie de tip IIFE care:
// - sorteaza urmatorul array in functie de proprietatea "salary" a fiecarui obiect continut:
// var items = [
//   {name: "John",  salary: 20000 },
//   { name: "Danny", salary: 30500 },
//   { name: "Bekker", salary: 15000 }
// ];
// - afiseaza in consola array-ul sortat

// compara fiecare salariu al persoanelor din baza de date
// apoi ordoneaza lista in functie de valoarea fiecaruia

var comparatii = (function () {
    var items = [
        { name: "John", salary: 20000 },
        { name: "Danny", salary: 30500 },
        { name: "Bekker", salary: 15000 }
    ];
    items.sort(function (obiect1, obiect2) {
        return obiect1.salary - obiect2.salary;
    });
    return items;
})();

console.log(comparatii)


