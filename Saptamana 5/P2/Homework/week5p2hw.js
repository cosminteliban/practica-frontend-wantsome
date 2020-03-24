//1. Scrieti o functie care verifica daca un input este sau nu de tip string.


var is_string = function(str) {
    if (str === String)
      return true;
    else
      return false;   
      };

console.log(is_string('w3resource'));
console.log(is_string([1, 2, 4, 0]));


//nu reusesc sa gasesc varianta corecta. imi da false la ambele.

// 2.Scrieti o functie care verifica daca un string este gol sau nu


var is_Blank =  function(blank) {
  if (blank.length === 0)
  return true;
  else 
  return false;
}
console.log(is_Blank(''));
console.log(is_Blank('abc'));


// 3.Scrieti o functie accepta ca input un string si il transforma intr-un array de cuvinte:

var string_to_array = function(string) {
  return string.split(" ");
};
console.log(string_to_array("Robin Singh"));

// 4. Scrieti o functie care transforma un string in forma abreviata:

var abbrev_name = function(string) {
  var short_name = string.split(" ");
  if (short_name.length > 1) {
      return (short_name[0] + " " + short_name[1].charAt(0) + ".");
  }
  return short_name[0];
};
console.log(abbrev_name("Robin Singh"));

// 5. Scrieti o functie care face prima litera a unui string sa fie de tip capital ( litera mare ):

var capLetter = function(str){
  return str.charAt(0).toUpperCase() + str.slice(1);
}
    
 console.log(capLetter('js string exercises'));

// 6.Scrieti o functie care elimina un numar specificat de caractere pornind de la inceputul string-ului:

truncate_string = function (str, length) {
  
  if ((str.constructor === String) && (length>0)) {
      return str.slice(0, length);
  }
};
console.log(truncate_string("Robin Singh",4));

// 7.Scrieti o functie care specifica daca o caracterul de la o anumita pozitie specificata dintr-un string este litera mare sau nu:

function isUpperCaseAt(str, func) {
  return str.charAt(func).toUpperCase() === str.charAt(func);
     }
 console.log(isUpperCaseAt('Js STRING EXERCISES', 1));

//  8. Scrieti o functie care insereaza un string la o anumita pozitie intr-un alt string:

insert = function insert(str1, str2, position) {
  if(typeof(position) == "undefined") {
   position = 0;
 }
  if(typeof(str2) == "undefined") {
   str2 = '';
 }
  return str1.slice(0, position) + str2 + str1.slice(position);
   }
console.log(insert('We are doing some exercises.'));
console.log(insert('We are doing some exercises.','JavaScript '));
console.log(insert('We are doing some exercises.','JavaScript ',18));


// 9. Scrieti o functie care elimina prima aparitie a unui string dintr-un alt string:

function removeFirstString(str1, str2)       {
	var func = str1.indexOf(str2);
	if (func === -1) {
		return str1;
	}
	return str1.slice(0, func) + str1.slice(func + str2.length);
}

console.log(removeFirstString("The quick brown fox jumps over the lazy dog", 'the'));


// 10. Scrieti o functie care compara doua string-uri case-insensitive:

function compare_strings(str1, str2)
{
var compare = str1.toUpperCase() === str2.toUpperCase();
  return compare;
}

console.log(compare_strings('abcd', 'AbcD'));




// 11. Scrieti o functie care face ca primul caracter a unui string sa fie de tip uncapital:

function uncap(str){
  return str.charAt(0).toLowerCase() + str.slice(1);
}
 console.log(uncap('Js string exercises'));