function startTimer(display) {
    var close = new Date(2019,08,17,16,00,00) ,
        diff,
        minutes,
        seconds;
    function timer() {
        // get the number of seconds that have elapsed since 
        // startTimer() was called
        diff = (close - Date.now())/1000;

        // does the same job as parseInt truncates the float
        minutes = (diff / 60) | 0;
        seconds = (diff % 60) | 0;

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds; 

        if (diff <= 0) {
            // add one second so that the count down starts at the full duration
            // example 05:00 not 04:59
            start = Date.now() + 1000;
        }
    };
    // we don't want to wait a full second before the timer starts
    timer();
    setInterval(timer, 1000);
}

    
var image = document.getElementById("image");
image.setAttribute("src","static/something.jpg");

function nextPhoto() {
    document.getElementById("text").innerHTML = "JKJKLOLOL"
  document.getElementById("image").setAttribute("src","static/something.jpg");
}

window.onload = function () {
        display = document.querySelector('#time');
    startTimer(display);
};