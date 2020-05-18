function onNext() {
    let username = document.getElementById("username");
    let userError = document.getElementById("userError");
    let usernameRgx = /^[0-9a-z]+$/;

    if (username.value.length < 4 || !username.value.match(usernameRgx)) {
        userError.classList.remove("hidden");
    }
    else {
        userError.classList.add("hidden");
    }
    let email = document.getElementById("email");
    let emailError = document.getElementById("emailError");
    let emailRgx = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    if (!emailRgx.test(String(email.value).toLowerCase())) {
        emailError.classList.remove("hidden");
    }
    else {
        emailError.classList.add("hidden");
    }
    let firstName = document.getElementById("first");
    let firstNameError = document.getElementById("firstNameError");
    if (firstName.value) {
        firstNameError.classList.add("hidden");
    }
    else {
        firstNameError.classList.remove("hidden");
    }

    let lastName = document.getElementById("last");
    let lastNameError = document.getElementById("lastNameError");
    if (lastName.value) {
        lastNameError.classList.add("hidden");
    }
    else {
        lastNameError.classList.remove("hidden");
    }

    let phone = document.getElementById("phone");
    let phoneError = document.getElementById("phoneError");
    let phoneRgx = /^[0-9]+$/;
    let noSpaces = phone.value.split(" ").join("");
    if (noSpaces.length > 9 && noSpaces.match(phoneRgx)) {
        phoneError.classList.add("hidden");
    }
    else {
        phoneError.classList.remove("hidden");

    }

}

