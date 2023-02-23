

// var timeEl = document.querySelector(".time");

// // Selects element by id
// var timeIdE1 = document.getElementById("time");



setInterval(function(){

// var timer = new Date(); javascript

var now = dayjs();
var reformatDate = now.format('MMM D, YYYY [at] h:mm:ss a')
// console.log("day js: " + now);
document.getElementById('timer').textContent = reformatDate;
},1000);

