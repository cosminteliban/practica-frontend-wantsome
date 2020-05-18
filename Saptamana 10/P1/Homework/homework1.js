//1
//adaugati un tag script si adaugati urmatoarele functii
// sqrNum, halfNum, percentNum si areaCircle

//2 pentru fiecare button aveeti de adaugat un event listner
// care atunci cand este clickuit sa gaseasca valoarea inputului
// si sa afiseze rezultatul solutiei

//3
// Bonus: faceti sa functioneze si la key press pe langa click


const sqrButton = document.querySelector("#sqrButton");

const sqrNum = () => {
    const number = document.querySelector("#square").value;
    alert(number * number);
}

sqrButton.addEventListener("click", sqrNum);

const halfButton = document.querySelector("#halfButton");

const halfNum = () => {
    const number = document.querySelector("#half").value;
    alert(number / 2);
}

halfButton.addEventListener("click", halfNum);

const percentButton = document.querySelector("#prcButton");

const percentNum = () => {
    const firstNumber = document.querySelector("#percent1").value;
    const secondNumber = document.querySelector("#percent2").value;
    alert(firstNumber * 100 / secondNumber + "%");
}

percentButton.addEventListener("click", percentNum);

const areaButton = document.querySelector("#areaButton");

const areaCircle = () => {
    const number = document.querySelector("#area").value;
    alert(Math.PI * number * number);
}

areaButton.addEventListener("click", areaCircle);