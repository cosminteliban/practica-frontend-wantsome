// Attach a button listener to the button onclick sau addEventListener
//
// On click on the button, make an AJAX request to reddit for results of cute puppies 
//
// For each of the elements in data.children, append a new <img> element to .text with the src as the child.data.thumbnail


const puppies = 'https://www.reddit.com/r/aww/search.json?q=puppy&restrict_sr=true'


let btn = document.getElementsByClassName("btn")[0];

btn.addEventListener("click", requestPuppies);


function requestPuppies() {
    let request = new XMLHttpRequest();
    request.open('GET', puppies);

    request.responseType = 'json';
    request.send();

    request.onload = function() {
        console.log(request.response);
        changePuppies(request.response.data.children);
    } 
}


function changePuppies(puppies) {
    let dog = document.getElementsByClassName("text")[0];
    puppies.forEach((element) => {
        let image = document.createElement("img");
        image.setAttribute("src", element.data.thumbnail);
        dog.appendChild(image);
    });
}


