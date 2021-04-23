"use strict";

let mainValue = document.querySelector(".js-main-numbers"),
  key = document.querySelector(".text1"),
  locationRef = document.querySelector(".text2"),
  which = document.querySelector(".text3"),
  code = document.querySelector(".text4");

window.addEventListener("keydown", (event) => {
  mainValue.textContent = event.keyCode;
  key.textContent = event.key;
  locationRef.textContent = event.location;
  which.textContent = event.which;
  code.textContent = event.code;
});
