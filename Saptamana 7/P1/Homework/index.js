
// <!-- Observatii: - inainte de a scrie o linie de cod, specificati un comentariu in care spuneti exact procedura pe care o urmati (ex: “declar functia
//     de tip named / function expression care accepta argumentele…, declar variabila x, fac comparatia y si verific daca z, samd… ); chiar daca nu duceti o
//     functie pana la capat, atasati codul cu comentarii pana la linia la care v-ati oprit;


//     1. Scrieti un for care itereaza de la 0 la 20. Pentru fiecare iteratie, verifica daca numarul curent este par sau impar si va
//     raporta acest lucru in consola. (exemplu: “2 este numar par”);
//     Scrieti functia in doua variante: while si for


//construiesc un loop pentru a executa un bloc de cod
//declar variabila i = 0, creez o interatie si pun conditia ca rezultatul final al iteratiei sa fie maxim 20
//verific daca restul variabilei este egal 0
//daca acesta este par, va raporta ca numarul este par
// altfel, va raporta ca numarul este impar
//folosesc functia console.log pentru a vedea rezultatul in consola

for (i = 0; i < 21; i++) {
    if (i % 2 == 0) {
        console.log(i + " este un numar par")
    }
    else {
        console.log(i + " este un numar impar")
    }

}

var i = 0
while (i < 21) {
    if (i % 2 == 0) {
        console.log(i + " este un numar par")
    }
    else {
        console.log(i + " este un numar impar")
    }

    i++;
}

//     2. Scrieti un for care itereaza de la 0 la 10. Pentru fiecare iteratie, se va multiplica numarul curent cu 9 si se va afisa
//     rezultatul. (exemplu: “3*9=27”).
//      Scrieti functia in doua variante: while si for


//construiesc un loop pentru a executa un bloc de cod
//declar variabila i = 0, creez o interatie si pun conditia ca rezultatul final al iteratiei sa fie maxim 10
//multiplic fiecare rezultat al iteratiei cu 9
//folosesc functia console.log pentru a vedea rezultatul in consola

for (i = 0; i < 11; i++) {
    console.log(i * 9);
}

var i = 0
while (i < 11) {
    console.log(i * 9);
    i++
}

//      3. Pentru fiecare cifra de la 1 la 10, afisati tabla inmultirii.
//     (exemplu: 1 * 0 = 0
//      1 * 1 = 1
//      …
//      1 * 10 = 10 )
//     Pentru a afisa in consola pe linie noua puteti concatena un string, la final, cu + “\n”.


//construiesc un loop pentru a executa un bloc de cod
//declar variabila i = 1, creez o interatie si pun conditia ca rezultatul final al iteratiei sa fie maxim 10
// mai construiesc un loop, in interiorul primului
//declar variabla j = 0, creez o interatie si pun conditia ca rezultatul final al iteratiei sa fie maxim 10
//multiplic fiecare rezultat al celor doua iteratii intre ele
//folosesc un template literal si incorporez cele doua variabile cat si rezultatul inmultirii lor
//folosesc functia console.log pentru a vedea rezultatul in consola



for (i = 1; i < 11; i++) {
    for (j = 0; j < 11; j++) {
        console.log(`${i} * ${j} = ${i * j}`)
    }
}


//     4. Pentru functia dezvoltata la cerinta 2 de la tema anterioara, verificati si afisati in consola fiecare calificativ care se
//     poate obtine pentru punctajele incepand de 1 la 10. (exemplu: “Pentru 2, obtii calificativul E. \n Pentru 7, obtii
//     calificativul B \n ...samd “). Atentie: Rezultatul calificativului trebuie sa fie obtinut prin utilizarea functiei
//     dezvoltata la tema anterioara !  -->

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
        calificativ = "A";
    }
    else if (numar == 10) {
        calificativ = "A+";
    }
    return `Calificatul corespunzator punctajului ${numar} este ${calificativ}`;

}


//construiesc un loop pentru a executa un bloc de cod
//declar variabila i = 1, creez o interatie si pun conditia ca rezultatul final al iteratiei sa fie maxim 10
//apelez functia score iar in interiorul ei apelez fiecare rezultat al variabilei
//folosesc functia console.log pentru a vedea rezultatul in consola


for (i = 1; i < 11; i++) {
    console.log(score(i))
}