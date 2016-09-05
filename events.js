
// When you type characters into the input field, the output element should mirror the text in the input field.
// The first section's text should be bold.
// The last section's text should be bold and italicized.

var output = document.getElementById("output-target");
var header = document.getElementById("page-header");
var title = document.getElementById("page-title");
var colorBtn = document.getElementById("add-color");
var hulkifyBtn = document.getElementById("make-large");
var captureItBtn = document.getElementById("add-border");
var roundItBtn = document.getElementById("add-rounding");
var guineaPig = document.getElementById("guinea-pig");
var userInput = document.getElementById("keypress-input");
var articleEl = document.getElementsByTagName("article-section");
// var userClickerAlerter = document.getElementById("article-section");

// userClickerAlerter.addEventListener("click", function() {
//   // Get the value chosen from the DOM
//   userClickerAlerter = event.target.value;
//   output = "<div> You clicked on the " + ouput.innerHTML + "</div>" 
//   console.log(userClickerAlerter);
// });
// 
title.addEventListener("mouseover", function(event) {
  output.innerHTML = "You moved your mouse over the header.";
});

title.addEventListener("mouseout", function(event) {
  output.innerHTML = "You left me!";
});

userInput.addEventListener("keyup", function(event){
  output.innerHTML = userInput.value;
});

colorBtn.addEventListener("click", function() {
  guineaPig.classList.toggle("blue");
})

hulkifyBtn.addEventListener("click", function() {
  guineaPig.classList.toggle("hulk");
});

captureItBtn.addEventListener("click", function() {
  guineaPig.classList.toggle("border");
});

roundItBtn.addEventListener("click", function() {
  guineaPig.classList.toggle("rounded");
});

for (var i = 0; i < articleEl.length; i++) {
  articleEl[0].classList.add("bold");
  articleEl[articleEl.length - 1].classList.add("itali");
}

var btns = document.getElementsByTagName("button");

for (var i = 0; i < btns.length; i++) {
  btns[i].classList.add("block");
}
