"use strict";

let mainValue = document.querySelector(".js-main-numbers"),
  key = document.querySelector(".description1"),
  locationRef = document.querySelector(".description2"),
  which = document.querySelector(".description3"),
  code = document.querySelector(".description4");

window.addEventListener("keydown", (event) => {
  mainValue.textContent = event.keyCode;
  key.textContent = event.key;
  locationRef.textContent = event.location;
  which.textContent = event.which;
  code.textContent = event.code;

  if (event.code === "Space") {
    key.textContent = "-";
  }
});
