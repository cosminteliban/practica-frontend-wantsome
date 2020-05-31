// JavaScript ES6+

// BABEL - transpiler - transforma din ES6 in ES5


// let -

let x = 2;
x = 'hello'

console.log(x) //hello

// // const - este folosit pentru valori care raman mereu la fel.

const x;
const x = '2';


// // Scope -  Global scope - Function Scope - Block Scope

let bloc = 'global';

function apartament() {
  let tablou = 'Mona Lisa';
  console.log(bloc);

  function dormitor() {
    console.log(tablou)
  }

  dormitor();

}

apartament()
