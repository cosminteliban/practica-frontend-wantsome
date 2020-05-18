// Cerinta:
// La adresa http://bit.ly/json-colors-practice veti gasi un JSON care contine o lista de culori in formatul
// “nume-culoare”: “HEX-code”. Creati o pagina care sa afiseze toata lista de culori in felul urmator: fiecare linie a unei liste este
// asociata unei culori; o linie corespunzatoare unei culori va contine un patrat de dimensiuni 10x10 care are ca si background
// culoarea respectiva; langa patrat, este afisat numele culorii; folositi CSS pentru alinieri si afisati textul centrat pe verticala in
// raport cu patratul culorii; lista nu trebuie sa contina bullet points;
// 1. Initial, veti stoca toata lista JSON intr-o variabila prin intermediul careia veti parcurge datele
// 2. Lista JSON va fi descarcata de la URL-ul corespunzator folosind XMLHttpRequest si o veti stoca ulterior in variabila
// anterior creata la pasul 1 


let requestURL = 'https://raw.githubusercontent.com/bahamas10/css-color-names/master/css-color-names.json';

let request = new XMLHttpRequest();
request.open('GET', requestURL);

request.responseType = 'json';
request.send();


function makeList(list) {
    let colorList = document.createElement("ul");

    let keys = Object.keys(list);
    let values = Object.values(list);


    keys.forEach((element, i) => {
        let eachColor = document.createElement("li");
        let square = document.createElement("div");
        square.classList.add("square");
        square.style.backgroundColor = values[i];
        let span = document.createElement("span");
        span.textContent = element;

        eachColor.appendChild(square);
        eachColor.appendChild(span);

        colorList.appendChild(eachColor);

    });
    let body = document.querySelector("body");
    body.appendChild(colorList);
}

request.onload = function() {
    console.log(request.response);
    makeList(request.response);
}
