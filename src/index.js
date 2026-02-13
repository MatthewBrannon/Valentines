//Changing no
var b = document.getElementById("no-btn");
b.addEventListener("click", change);
function change() {

  do {
    var changeTop = (Math.random() * (document.getElementById("limit").offsetHeight));
  } while (changeTop > 600)
  console.log("top:" + changeTop);
  do {
    var changeLeft = (Math.random() * (document.getElementById("limit").offsetWidth));
  } while (changeLeft > 1200)
  console.log("left:" + changeLeft);

  b.style.top = changeTop + "px";
  b.style.left = changeLeft + "px";

}

//Code for increasing size on yes when clicking No
let myDiv = document.querySelector(".box");
let orgiSize = myDiv.getBoundingClientRect().width;
let increments = 0;

b.addEventListener("click", increaseDiv);

function increaseDiv() {
  increments += 20; // That is 10px on both sides...
  
  // Make the math here
  var percentage = Math.floor((orgiSize + increments) / orgiSize * 100) / 100
  
  console.log(percentage);
  myDiv.style.transform = `scale(${percentage})`; // That is a percentage value
}

var yes_btn = document.getElementById('yes-btn');
yes_btn.addEventListener("click", celebration);

function celebration() {
  location.assign('./celebration.html')
  var background_img = document.getElementById("bkgrnd").style.backgroundImage="url(./imgs/cele.jpg)";

}