const labelSeconds = document.querySelector("#seconds");


const date = new Date("01-January-2023");
const difference = date - new Date();
let seconds = (difference / 1000).toFixed(2)
let minutes = (seconds / 60).toFixed(2);
let hours = (minutes / 60).toFixed(2);
let days = (hours / 24).toFixed(2);
console.log(difference, seconds, minutes, hours, days);