//Ex1
//Scrieti o functie multiplyByTen care atunci cand o apelam cu console.log(multiplyByTen(6)) sa avem 60 rezultat.

function multiplyByTen(firstNumber) {
    var result = firstNumber * 10;
    console.log(result);
  }
  
  multiplyByTen(6);
  
  //Ex2
  //Scrieti o functie myNameIs care sa ia un singur parametru si cand o apelam cu numele nostru sa returneze "Numele meu este ___"
  
  function myNameIs(CST) {
    var result = "Numele meu este " + CST;
    console.log(result);
    return result;
  }
  
  myNameIs("CST")