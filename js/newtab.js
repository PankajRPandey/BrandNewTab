function startTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    let greet = 'GOOD MORNING';
    if(hours>=12 && minutes>=0 && hours<18){
      greet = 'GOOD AFTERNOON';
    }else if(hours>=18){
        greet = 'GOOD EVENING';
    }

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    document.getElementById('clock').innerHTML = strTime;
    document.getElementById('greet').innerHTML = greet;
    var t = setTimeout(startTime, 500);
}
window.onload = function() {
    startTime();
    setBackgroundWallpaper();
}

function getScreenResolution() {
    return window.outerWidth + 'x' + window.outerHeight;
}

function setBackgroundWallpaper() {
    var res = getScreenResolution();
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/"+res+"')";
}

