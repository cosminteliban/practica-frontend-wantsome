// The Car and the Truck class have similar behavior and properties.
// Rewrite them in a way such that they share those properties.

var Vehicle = function (driver, vehicle) {
  this.driver = driver;
  this.vehicle = vehicle;
  this.speed = 0;
  this.drive = function (mph) {
    this.speed = mph;
    return this.driver + ' driving at ' + mph + ' miles per hour';
  };
};

// var Car = function(driver) {
//   this.driver = driver;
//   this.speed = 0;
//   this.drive = function(mph) {
//     this.speed = mph;
//     return this.driver + ' driving at ' + mph + ' miles per hour';
//   };
// };

// var Truck = function(driver) {
//   this.driver = driver;
//   this.speed = 0;
//   this.cargo = [];
//   this.drive = function(mph) {
//     this.speed = mph;
//     return this.driver + ' driving at ' + mph + ' miles per hour';
//   };

//   this.loadCargo = function(cargo) {
//     this.cargo.push(cargo);
//     return this;
//   };

//   this.unloadCargo = function() {
//     return this.cargo.pop();
//   };
// };

var Car = new Vehicle("Stan", "car");

var Truck = new Vehicle("Bran", "truck");

Truck.cargo = [];
Truck.loadCargo = function (cargo) {
  this.cargo.push(cargo);
  return this;
};

Truck.unloadCargo = function () {
  return this.cargo.pop();
};

console.log(Car);
console.log(Truck);


//2. 

var Person = function () { };

Person.prototype.initialize = function (name, age, orice) {
  this.name = name;
  this.age = age;
  this.orice = orice;
}

//Creati un obiect numit Trainer care sa fie derivat din obiectul Person si implementati o metoda teach() ce primeste un string numit subject si printeaza
// [nume trainer] is now teaching [subject]

let Trainer = function (subject) {
  this.subject = subject;
  this.teach = function () {
    console.log(`${this.name} is teaching ${this.subject} and is ${this.age} years old. Accepta ${this.orice} ca si plata.`)
  }
}
Trainer.prototype = new Person();

let gigica = new Trainer("javascript");
gigica.initialize("gigica", 30, "nasturi");
gigica.teach()



//3.

// triunghi.constructor;                 // Triangle(a, b, c)   
// forma.isPrototypeOf(triunghi);        // true
// triunghi.getPerimeter();              // 48
// triunghi.getType();                   // "triunghi"


//cand dau console.log(triunghi.constructor) tre sa printeze Triangle(a,b,c)


function Triangle(a, b, c) {
  this.a = a
  this.b = b
  this.c = c
  this.type = "triunghi"
}

const forma = {
  getType: function () {
    return this.type
  }
}

Triangle.prototype = forma;
Triangle.prototype.constructor = Triangle;
let triunghi = new Triangle(18, 18, 12);

triunghi.getPerimeter = function () {
  return this.a + this.b + this.c
}

console.log(triunghi)