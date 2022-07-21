

function openSettings() {
    document.getElementById("settingsbox").style.marginLeft = "420px";
    document.getElementById("openingButton").style.display = "none";
    document.getElementById("closingButton").style.display = "block";
}

function closeSettings() {
    document.getElementById("settingsbox").style.marginLeft = "130px";
    document.getElementById("openingButton").style.display = "block";
    document.getElementById("closingButton").style.display = "none";  
}

var studyTime = 1;
var breakTime = 2;
var secondsStart = 10;

function startFunction() {
getStudyTime = document.getElementById("study")
getStudyTime.innerHTML = studyTime;

getBreakTime = document.getElementById("break")
getBreakTime.innerHTML = breakTime;

document.getElementById("closingButton").style.display = "none";
getTimer = document.getElementById("timer")
getTimer.innerHTML = studyTime + ":00"; 

}

function decreaseStudyTime() {
    if(studyTime > 5) {
    studyTime = studyTime - 5;
    getStudyTime.innerHTML = studyTime;
    }
    getTimer.innerHTML = studyTime + ":00";
}

function decreaseBreakTime() {
    if(breakTime > 5) {
    breakTime = breakTime - 5;
    getBreakTime.innerHTML = breakTime;
    }
}

function increaseStudyTime() {
    if(studyTime < 60) {
    studyTime = studyTime + 5;
    getStudyTime.innerHTML = studyTime;
    }
    getTimer.innerHTML = studyTime + ":00";
}

function increaseBreakTime() {
    if(breakTime < 60) {
    breakTime = breakTime + 5;
    getBreakTime.innerHTML = breakTime;
    }
}

function start() {
    while(studyTime > 0) {
        studyTime = studyTime -1;
        getTimer.innerHTML = studyTime + ":" + secondsStart;
        setInterval(decreaseSecondsStudy, 1000);
    }
    breakTime = breakTime - 1;
    getTimer.innerHTML = breakTime + ":" + secondsStart;
    setInterval(decreaseSecondsBreak, 1000)
}

function decreaseSecondsStudy() {
    if(secondsStart > 0) {
        secondsStart = secondsStart - 1;
        getTimer.innerHTML = studyTime + ":" + secondsStart;
    } else if(secondsStart == 0) {
        studyTime = studyTime - 1;
        secondsStart = 59;
    }
}
function decreaseSecondsBreak() {
    if(secondsStart > 0) {
        secondsStart = secondsStart - 1;
        getTimer.innerHTML = breakTime + ":" + secondsStart;
    } else if(secondsStart == 0) {
        breakTime = breakTime - 1;
        secondsStart = 59;
    }
}


