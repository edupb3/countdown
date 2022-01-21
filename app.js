const labelSeconds = document.querySelector("#seconds");
const labelDays = document.querySelector("#days");


const date = new Date("01-January-2023");
const difference = date - new Date();
let seconds = (difference / 1000).toFixed(2);
let minutes = (seconds / 60).toFixed(2);
let hours = (minutes / 60).toFixed(2);
let days = Number.parseInt(hours / 24);
console.log(difference, seconds, minutes, hours, days);

labelDays.textContent = days;