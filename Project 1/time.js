var second = 0;
var minute = 0;
var hour = 0;
var d = new Date();
let seconds = document.getElementById("second");
setInterval(function () {
  d = new Date();
  second = d.getSeconds() * 6;
  seconds.style.transform = `rotate(${second}deg)`;
}, 1000);

let minutes = document.getElementById("minute");

setInterval(function () {
  d = new Date();
  minute = d.getMinutes();
  let rotate = minute * 6 + 300;
  minutes.style.transform = `rotate(${rotate}deg)`;
}, 1000);

let hours = document.getElementById("hrs");
setInterval(function () {
  d = new Date();
  hour = d.getHours() > 12 ? d.getHours() - 12 : d.getHours();
  let rotate = hour * 30 + 90 ;

  hours.style.transform = `rotate(${rotate}deg)`;
}, 1000);
