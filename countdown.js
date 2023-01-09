const countdown =document.getElementById("countdown");
const loading =document.getElementById("loading");

const year =document.getElementById("year");
const days =document.getElementById("days");
const hours =document.getElementById("hours");
const minites =document.getElementById("minutes");
const seconds =document.getElementById("seconds");

const currentYear = new Date().getFullYear();
const NextYear = currentYear+1;
year.innerText=NextYear;

const newYearTime = new Date(`January 01 ${NextYear} 00:00:00`);

function updateCounter(){
    let currentTime = new Date();
    let diff = newYearTime - currentTime;

    let d = Math.floor(diff/1000/60/60/24);
    let h = Math.floor( (diff/1000/60/60) % 24);
    let m = Math.floor( (diff/1000/60) % 60);
    let s = Math.floor((diff/1000 )%60);

    days.innerText = d < 10 ? "0"+d : d;
    hours.innerText = h < 10 ? "0"+h : h;
    minites.innerText = m < 10 ? "0"+m : m;
    seconds.innerText = s < 10 ? "0"+s : s;
    }
    setInterval( ()=>{
        updateCounter()
    },1000)

setTimeout( ()=> {
  loading.remove();
  countdown.style.display = "flex";
},1000 )


