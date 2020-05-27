window.addEventListener("DOMContentLoaded", settime);
const hour = document.getElementById('h');
const minute = document.getElementById('m');
const second = document.getElementById('s');
const day = document.getElementById('day');
const date = document.getElementById('date');
const month = document.getElementById('month');
const year = document.getElementById('year');
var mo = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
var da = ['Sunday', 'Monday', 'Tuesday', 'Wednesday','Thursday','Friday','Saturday'];
function settime(){

    let d = new Date();
    hour.innerHTML = d.getHours();
    minute.innerHTML = d.getMinutes();
    second.innerHTML = d.getSeconds();
    date.innerHTML = d.getDate();
    day.innerHTML = da[d.getDay()];
    month.innerHTML = mo[d.getMonth()];
    year.innerHTML = d.getFullYear();
}

setInterval(settime, 1000);