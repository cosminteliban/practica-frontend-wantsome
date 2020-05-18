const url = 'https://ron-swanson-quotes.herokuapp.com/v2/quotes';


let xhr = document.getElementById("xhr");

xhr.addEventListener('click', requestQuote);


function requestQuote() {
    let request = new XMLHttpRequest();
    request.open('GET', url);

    request.responseType = 'json';
    request.send();

    request.onload = function () {
        console.log(request.response);
        changeQuote(request.response);
    }
}


function changeQuote(quote) {
    let paraghrap = document.getElementById("quote"); //quote.data.chilren<- array
    paraghrap.textContent = quote[0];
}

