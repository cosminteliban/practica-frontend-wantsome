// Adaugati un tag script la final
// Schimbati stilul body-ului sa aiba font-family "Arial, sans-serif"
// Schimbati fiecare span(name, fav-drink, born-place) cu informatiile despre voi
// Iterati prin fiecare "li" si puneti clasa "listitem". Adaugati un tag style(in head) care seteaza o regula pentru .listitem sa aiba culoarea rosie
// Creati un element img si setati atributul src sa aiba o poza cu voi sau ceva random de pe net. Puneti acest element(append) la pagina noastra




const aBody = document.querySelector("body");
const aParagraph = document.createElement("p");
aParagraph.textContent = "Hello World";
aBody.appendChild(aParagraph);

aBody.style.fontFamily = "Arial, sans-serif";

const aName = document.getElementById("name");
aName.textContent = "Cosmin";

const aDrink = document.getElementById("fav-drink");
aDrink.textContent = "cafea";

const aPlace = document.getElementById("born-place");
aPlace.textContent = "Dorohoi";

const aList = document.querySelectorAll("li");
for (i = 0; i < aList.length; i++) {
    aList[i].classList.add("listitem")
}



const aHead = document.querySelector("head");
const aTag = document.createElement("style");
aTag.textContent = ".listitem {color: red}";
aHead.appendChild(aTag);



const image = document.createElement("img");
image.setAttribute("src","https://dubaiacademy.org/wp-content/uploads/2019/09/01-birth-month-If-You-Were-Born-In-Summer-This-Is-What-We-Know-About-You_644740429-icemanphotos.jpg")
image.style.objectFit = "contain";
image.style.width = "1000px";
aBody.appendChild(image);

