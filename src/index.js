"use strict";

import { me } from "./about.js";

let firstName = document.querySelector(".name");
let lastName = document.querySelector(".lastname");
let submitBtn = document.querySelector(".submit a");
let result = document.querySelector(".output");

submitBtn.addEventListener("click", (e) => {
  let fullName = `${firstName.value} ${lastName.value}`;
  result.innerText = fullName;
  window.localStorage.setItem("person", fullName.toString());
  console.log(me());
});
