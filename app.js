const labelSeconds = document.querySelector("#seconds");
const labelMinutes = document.querySelector("#minutes");
const labelHours = document.querySelector("#hours");
const labelDays = document.querySelector("#days");

const targetDate = new Date("01-January-2023");
console.log(new Date().getFullYear()+1);

setInterval(() => {
    const current = new Date();
    const difference = targetDate - current;
    let days = Math.floor(difference / 1000 / 60 / 60 / 24);
    let hours = Math.floor(difference / 1000 / 60 / 60) % 24;
    let minutes = Math.floor(difference / 1000 / 60 ) % 60;
    let seconds = Math.floor(difference / 1000) % 60;

    labelDays.textContent = days;
    labelHours.textContent = hours;
    labelMinutes.textContent = minutes;
    labelSeconds.textContent = seconds;
    
}, 1000);

