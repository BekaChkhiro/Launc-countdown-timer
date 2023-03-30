let countDownDate = new Date("April 2, 2023 00:00:00").getTime();

let myFunc = setInterval(() => {
    let now = new Date().getTime();
    let timeLeft = countDownDate - now;

    let days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    let hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    document.getElementById('days').innerHTML = days;
    document.getElementById('hours').innerHTML = hours;
    document.getElementById('minutes').innerHTML = minutes;
    document.getElementById('seconds').innerHTML = seconds;

    if (timeLeft < 0) {
        clearInterval(myFunc);
        document.getElementById('days').innerHTML = "";
    document.getElementById('hours').innerHTML = "";
    document.getElementById('minutes').innerHTML = "";
    document.getElementById('seconds').innerHTML = "";
    }
}, 1000);