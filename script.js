"use strict";

const cross = document.querySelector(".close-icon");
const cookie = document.querySelector(".cookie-message");
const acceptBtn = document.querySelector(".btn");
cross.addEventListener("click", function () {
  cookie.classList.add("hidden");
});
acceptBtn.addEventListener("click", function () {
  cookie.classList.add("hidden");
});
