let hour = document.querySelector(".hours");
let minute = document.querySelector(".minutes");
let second = document.querySelector(".second");

let timer = true;
let hr = 0;
let min = 0;
let sec = 0;


function start() {
    if (timer == true) {
        timer = false;
        timeCalc()
    }
}

function stop() {
    if (timer == false) {
        timer = true;
    }
}

function timeCalc() {
    if (timer == false) {
        sec = sec + 1;

        if (sec == 60) {
            min = min + 1;
            sec = 0;
        }

        if (min == 60) {
            hr = hr + 1;
            min = 0
        }
        second.innerHTML = sec + " " + "Second";
        minute.textContent = min + " " + "Minutes";
        hour.textContent = hr + " " + "Hours";
        setTimeout("timeCalc()", 1000)
    }
}

function reset() {
    second.innerHTML = " 00 Second "
    minute.textContent = " 00 Minutes ";
    hour.textContent =" 00 Hours";
    timer = true;
    sec=0;
    min=0;
    hr=0;
}