function startTime() {
    var date = new Date();
    var hours = date.getHours();
    var minutes = date.getMinutes();
    var ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ' ' + ampm;
    document.getElementById('txt').innerHTML = strTime;
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

