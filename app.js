const labelSeconds = document.querySelector("#seconds");
const labelMinutes = document.querySelector("#minutes");
const labelHours = document.querySelector("#hours");
const labelDays = document.querySelector("#days");
const labelYear = document.querySelector("#year");

const targetDay = "01";
const targetMonth = "01";
const targetYear = new Date().getFullYear()+1;
const targetDate = new Date(targetDay+"-"+targetMonth+"-"+targetYear);

setInterval(() => {
    const current = new Date();
    const difference = targetDate - current;
    let days = Math.floor(difference / 1000 / 60 / 60 / 24);
    let hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(difference / 1000 / 60 ) % 60;
    let seconds = Math.floor(difference / 1000) % 60;

    hours   = hours < 10   ? "0" + hours   : hours;
    minutes = minutes < 10 ? "0" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    labelDays.textContent = days;
    labelHours.textContent = hours;
    labelMinutes.textContent = minutes;
    labelSeconds.textContent = seconds;
    labelYear.textContent = targetYear;
    
}, 1000);

/**
 * fazer o ano mudar automaticamente
 * fazer o spinner funcionar 
 * refatorar o código
 * */