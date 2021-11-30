// JavaScript Document
var hamburgerIcon = document.querySelector("header nav ul li:first-of-type");
var hamburgerMenu = document.querySelector("header section")

console.log(hamburgerIcon);
console.log(hamburgerMenu);

hamburgerIcon.addEventListener("click", function(){
    hamburgerMenu.classList.toggle("aan")
})