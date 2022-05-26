var second = 0;
var minute = 0;
var hour=0;
var clock;
var clicktime=0;
function countSecond() {

  second += 1;

  text=textt(second);
  text2=textt(minute);
  text3=textt(hour);
  document.getElementsByClassName("second")[0].textContent = text;
  document.getElementsByClassName("minute")[0].textContent = text2;
  document.getElementsByClassName("hour")[0].textContent = text3;
  if (second === 60) {
    minute += 1;
    second=0;
    document.getElementsByClassName("second")[0].textContent = 00;
    document.getElementsByClassName("minute")[0].textContent = minute;
  }else if (minute === 60) {
    hour += 1;
    minute=0;
    document.getElementsByClassName("minute")[0].textContent = 00;
    document.getElementsByClassName("hour")[0].textContent = hour;
  }
}

function reset() {
  second = 0;
  minute = 0;
  hour=0;
  document.getElementsByClassName("second")[0].textContent = "00";
  document.getElementsByClassName("minute")[0].textContent = "00";
  document.getElementsByClassName("hour")[0].textContent = "00";

}

function start() {
if(clicktime===0){
   clock=setInterval(countSecond, 1000);
   clicktime=1;
}
}

function stop() {

  clearInterval(clock);
  clicktime=0;
}

function textt(a){
  if (a < 10) {

    return "0" + a;
  } else {
    return a;
  }

}
