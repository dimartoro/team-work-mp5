
setInterval(function(){

// var timer = new Date(); javascript

var now = dayjs();
var reformatDate = now.format('MMM D, YYYY [at] h:mm:ss a')
// console.log("day js: " + now);
document.getElementById('timer').textContent = reformatDate;
},1000);

