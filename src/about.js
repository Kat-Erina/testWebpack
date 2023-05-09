// "use strict";
// let date = document.querySelector(".date");
// let age = document.querySelector(".age");
// let relationshipStatus = document.getElementsByName("answer");
// console.log(relationshipStatus);
// let hobbies = document.querySelector(".hobbies");
// let finalResult = document.querySelector(".finalResult");
// let finalSubmitBtn = document.querySelector(".finalSubmit");
// let currentAge;

// let fullName = window.localStorage.getItem("person");

// date.addEventListener("change", () => {
//   let currentYear = new Date().getFullYear();
//   let selectedYear = new Date(date.value).getFullYear();

//   age.value = currentYear - selectedYear;
// });

// finalSubmitBtn.addEventListener("click", (e) => {
//   let me;
//   e.preventDefault();
//   for (let i = 0; i < relationshipStatus.length; i++) {
//     if (relationshipStatus[i].checked) {
//       me = relationshipStatus[i].value;
//       console.log(me);
//     }
//   }

//   finalResult.innerHTML = `<p>Name: ${fullName} </p>
//   <p>Age: ${age.value} </p>
//   <p>Hobbies: ${hobbies.value}</p>
//   <p>Married? - ${me} </p>`;

//   window.localStorage.setItem("extraInto", finalResult.innerText);
// });

//ვტესტავ index.html istvis 2 js is bundle-s

export function me() {
  return window.localStorage.getItem("person");
}
