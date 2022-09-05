"use strict";

const form = document.querySelector("#form");
const email = document.querySelector("#email");
const errorIcon = document.querySelector("#error-icon");
const errorMsg = document.querySelector("#error-msg");
const regEx =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

errorMsg.style.visibility = "hidden";
errorIcon.style.visibility = "hidden";

form.addEventListener("submit", (event) => {
    event.preventDefault();

    if (email.value.match(regEx)) {
        alert("Thank you for your submission!!");
        form.reset();
    } else {
        errorMsg.style.visibility = "visible";
        errorIcon.style.visibility = "visible";
    }
});

email.addEventListener("input", () => {
    errorMsg.style.visibility = "hidden";
    errorIcon.style.visibility = "hidden";
});
