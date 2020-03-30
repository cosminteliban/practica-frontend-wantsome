// Scrieti o functie care sa protejeze emailul unui user
// de ex: myFunction("ovidiu.grigoras@test.com") sa printeze "ovidiu...@test.com" sau "ovid...@test.com"

// myFunction = function (user_email) {
//     var avg, splitted, part1, part2;
//     splitted = user_email.split("@");
//     part1 = splitted[0];
//     avg = part1.length / 2;
//     part1 = part1.substring(0, (part1.length - avg));
//     part2 = splitted[1];
//     return part1 + "...@" + part2;
// };

// console.log(myFunction("ovidiu.grigoras@test.com"));

// 2.Scrieti o functie care sa faca uppercase la fiecare litera de la fiecare inceput de string
de ex: myFunction("i am superman") sa printeze "I Am Superman"


// var capLetter = function(str){
//     return str.charAt(0).toUpperCase() + str.slice(1);
//   }

//    console.log(capLetter('js string exercises'));

// var capLetter = function (str) {
//     var array1 = str.split(" ");
//     var newarray1 = [];

//     for (var i = 0; i < array1.length; i++) {
//         newarray1.push(array1[i].charAt(0).toUpperCase() + array1[i].slice(1));
//     }
// }

// // Scrieti o functie care sa schimbe literele unui string daca sunt uppercase cu lowercase si invers
// ex: myFunction("xxXyYzZZ") sa printeze "XXxYyZzz"


str = 'xxXyYzZZ';
res = '';

 {
    for (var i = 0; i < str.length; ++i) {
        c = str[i];
        if (c == c.toUpperCase()) {
            res += c.toLowerCase();
        } else if (c == c.toLowerCase()) {
            res += c.toUpperCase();
        } else {
            res += c;
        }
    }
}

myFunction = str() {
    for (var i = 0; i < str.length; i++)
}

// Scrieti o functie care sa concateneze un string de cate ori ii zicem
// de ex: myFunction("Wantsome", 2) sa printeze "WantsomeWantsome"

var palindrome = str() {
    str
}
