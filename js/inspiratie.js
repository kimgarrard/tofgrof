/*jslint browser: true, devel: true, eqeq: true, plusplus: true, sloppy: true, vars: true, white: true*/
/*eslint-env browser*/
/*eslint 'no-console':0*/

var body = document.querySelector("body");
var button1 = document.querySelector(".section1 div > p");
var button2 = document.querySelector(".section2 div > p");

button1.addEventListener('click', function() {
  body.classList.add("slide1");
});

button2.addEventListener('click', function() {
  body.classList.add("slide2");
});



var obj = document.getElementById("value");
animateValue(obj, 100, 0, 5000);

function animateValue(obj, start, end, duration) {
  let startTimestamp = null;
  const step = (timestamp) => {
    if (!startTimestamp) startTimestamp = timestamp;
    const progress = Math.min((timestamp - startTimestamp) / duration, 1);
    obj.innerHTML = Math.floor(progress * (end - start) + start);
    if (progress < 1) {
      window.requestAnimationFrame(step);
    }
  };
  window.requestAnimationFrame(step);
}










var block = document.querySelector(".follow");
var svg = document.querySelector(".follow svg");


block.addEventListener('click', function() {
    block.classList.toggle("pulse");
});
