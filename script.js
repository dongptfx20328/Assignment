"use strict";
const personalInfo = document.querySelector(".hidden-personal-info");
const tooltiptext = document.querySelector(".tooltiptext");
const form = document.querySelector(".form");
const regex =
  /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

document.querySelector(".submit").addEventListener("click", function (e) {
  e.preventDefault();
  const inputEmail = document.getElementById("email").value;
  if (!inputEmail.match(regex)) {
    // alert("Please enter email");
    tooltiptext.classList.remove("hidden");
  } else {
    personalInfo.classList.remove("hidden");
    form.classList.add("hidden");
  }
});

// View-more
const btnViewmore = document.querySelectorAll(".btnVM");
const btnViewless = document.querySelectorAll(".btnVL");
const showVM = document.querySelectorAll(".show-VM");
const showInfo = document.querySelectorAll(".hidden-info");
const button = document.querySelectorAll(".button");

console.log(btnViewmore, btnViewless, showVM);

for (let i = 0; i < showVM.length; i++) {
  showVM[i].addEventListener("mouseover", function () {
    btnViewmore[i].classList.remove("hidden");
  });
  showVM[i].addEventListener("mouseout", function () {
    btnViewmore[i].classList.add("hidden");
  });

  btnViewmore[i].addEventListener("click", function () {
    if (!showInfo[i].classList.contains("hidden")) {
      button[i].textContent = `▼ VIEW MORE`;
      showInfo[i].classList.add("hidden");
    } else {
      showInfo[i].classList.remove("hidden");
      button[i].textContent = `▲ VIEW LESS`;
    }
  });
}
