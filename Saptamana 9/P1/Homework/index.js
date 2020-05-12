// acum se printeaza in consola '1' '2' '3' '4' '5' .
// Vrem sa fie ordinea '3' '5' '2' '1' '4'
//hint setTimeout

const func1 = () => {
  setTimeout(() => console.log('1'), 4)
}

const func2 = () => {
  setTimeout(() => console.log('2'), 3)
}

const func3 = () => {
  setTimeout(() => console.log('3'), 0)
}

const func4 = () => {
  setTimeout(() => console.log('4'), 5)
}

const func5 = () => {
  setTimeout(() => console.log('5'), 2)
}


func1();
func2();
func3();
func4();
func5();



// 1  de folosit functiile increment, double, square

function customMap(array, callback) {
  var arr = [];
  for (var index in array) {
    arr.push(callback(array[index]));
  }
  return arr;
}

var randomArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];


const increment = (value) => {
  return value + 1;
}

console.log(customMap(randomArray, increment));  // Implement the function named print so that thos console.log would display the result [ 2, 3, 4, 5, 6, 7, 8, 9, 10 ] in the console


const double = (value) => {
  return value * 2;
}
console.log(customMap(randomArray, double));  // Implement the function named double so that thos console.log would display the result [ 2, 4, 6, 8, 10, 12, 14, 16, 18 ]

const square = (value) => {
  return value * value;
}


console.log(customMap(randomArray, square));  // Implement the function named square so that thos console.log would display the result [ 1, 4, 9, 16, 25, 36, 49, 64, 81 ]

// 2


// This function will go over every element in an array one by one, calling the
// callback with each item, adding the element to a new array only if
// the callback returns true, and finally returning the new array.


var filter = function (array, callback) {
  var filteredArray = [];
  for (var i = 0; i < array.length; i++) {
    var element = array[i];
    if (callback(element)) {
      filteredArray.push(element);
    }
  }
  return filteredArray;
};

// Call the filter function in 5 different cases ( 5 different filtering functions - example: filters the odd items, filter the items which are divisible by 3, etc... )



var randomArr = [3, 4, 5, 6, 7, 8, 9, 11, 12];



const oddItems = (value) => {
  return value % 2;
}

console.log(filter(randomArr, oddItems))



const evenNumbers = (value) => {
  return value % 2 === 0;
}

console.log(filter(randomArr, evenNumbers))



const divisible = (value) => {
  return value % 3 === 0;
}

console.log(filter(randomArr, divisible))



const remove = (value) => {
  return value - 6;
}

console.log(filter(randomArr, remove))



const doubleDigit = (value) => {
  return value > 10;
}

console.log(filter(randomArr, doubleDigit))



// 3 

/*
Write a function named multipleCallbacks that accepts 3 arguments:
	- an object containing a key name status that can have 2 different values: success or error
  - a function that should be called if the value of the status key is success
  - a function that should be called if the value of the status key is error
*/

const multipleCallbacks = (response, success, error) => {
  if (response.status === "success") {
    success(response.codename);
  }
  else if (response.status === "error") {
    error(response.codename);
  }

}

let onSuccess = (codename) => {
  console.log("mission" + codename + "accomplished");
}

let onError = (codename) => {
  console.log("mission" + codename + "failed");
}

let missionOne = {
  status: "success",
  codename: " have clean water - "
}

let missionTwo = {
  status: "error",
  codename: " visit Mars - "
}
multipleCallbacks(missionOne, onSuccess, onError)
multipleCallbacks(missionTwo, onSuccess, onError)