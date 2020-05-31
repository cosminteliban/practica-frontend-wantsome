/* 
1. Creati o pagina HTML care sa includa un buton; Intr-un fisier index.js separat 
definiti o functie buttonEventHandler al carei cod sa porneasca o fereastra
de tip alerta in care se va afisa textul "Ai apasat pe buton.". Specificati prin 
intermediul onclick atasat elementului buton un event listener care sa declanseze
functia buttonEventHandler atunci cand se apasa pe buton.
*/

/*
2. Adaugati un nou element de tip text input. Specificati o noua functie textInputEventHandler.
care afiseaza o alta alerta cu textul ("Textul din input a fost schimbat"). Specificati
un event listener care sa corespunda actiunii descrise in textul afisat de alerta.
*/

/*
3. Adaugati un nou element de tip paragraf care sa contina textul "Sunt un cameleon.".
Definiti o noua functie cameleonEventHandler care schimba random culoarea paragrafului
atunci cand user-ul apasa orice tasta.
Hint: folositi addEventListener
*/



const buttonAlert = document.getElementById("button");
buttonAlert.onclick = () => {
    alert("Ai apasat pe buton");
}

const textChange = document.getElementById("textInput");
textChange.onchange = () => {
    alert("Textul din input a fost schimbat");
}

const changeColor = document.querySelector("textInput");
const pSelect = document.querySelector("P");


const newColor = () => {
    let colors = ["blue", "red", "yellow", "green", "purple"];
    let randomColor = colors[Math.floor(Math.random() * 5)]
    pSelect.style.color = colors[Math.floor(Math.random() * 5)]
    console.log(randomColor)
}

textChange.addEventListener("keydown", newColor);