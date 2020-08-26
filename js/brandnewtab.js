var modal = document.getElementById("myModal");
// Get the button that opens the modal
var btn = document.getElementById("settings");
// Get the button that closes the modal
var cancelBtn = document.getElementById("cancelBtn");
// When the user clicks the button, open the modal 
btn.onclick = function () {
    modal.style.display = "block";
    document.getElementById('circularMenu').classList.remove('active');
}
// When the user clicks on cancel button close the modal
cancelBtn.onclick = function () {
    modal.style.display = "none";
    document.getElementById('circularMenu').classList.add('active');
}
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = "none";
        document.getElementById('circularMenu').classList.add('active');
    }
}


function startTime() {
    const date = new Date();
    let hours = date.getHours();
    let minutes = date.getMinutes();
    let ampm = hours >= 12 ? 'PM' : 'AM';

    let greet = 'Good morning';
    if (hours >= 12 && minutes >= 0 && hours < 18) {
        greet = 'Good afternoon';
    } else if (hours >= 18) {
        greet = 'Good evening';
    }

    hours = hours % 12;
    hours = hours ? hours : 12; // the hour '0' should be '12'
    minutes = minutes < 10 ? '0' + minutes : minutes;
    var strTime = hours + ':' + minutes + ampm;
    document.getElementById('clock').innerHTML = strTime;
    document.getElementById('greet').innerHTML = greet;
    var t = setTimeout(startTime, 500);
}
window.onload = function () {
    startTime();
    //setRandomWallpaperBG();
}

function setRandomGradientBG() {
    let hexValues = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e"];
    function populate(a) {
        for (let i = 0; i < 6; i++) {
            let x = Math.round(Math.random() * 10);
            let y = hexValues[x];
            a += y;
        }
        return a;
    }
    let newColor1 = populate('#');
    let newColor2 = populate('#');
    let angle = Math.round(Math.random() * 360);
    let gradient = "linear-gradient(" + angle + "deg, " + newColor1 + ", " + newColor2 + ")";
    document.body.style.background = gradient;
}

function toggleCircularMenu() {
    document.getElementById('circularMenu').classList.toggle('active');
}

function setRandomWallpaperBG() {
    let element = document.getElementById("mainContent");
    element.removeAttribute("class");
    function getScreenResolution() {
        return window.outerWidth + 'x' + window.outerHeight;
    }
    let res = getScreenResolution();
    fetch(`https://source.unsplash.com/random/${res}/?nature`).then((response) => {
        document.body.style.backgroundImage = `url('${response.url}')`;
    });
}

function refreshPage() {
    window.location.reload();
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function setRandomPatternBG() {
    document.body.style = '';
    let patternNo = getRandomInt(1, 20);
    let element = document.getElementById("mainContent");
    element.removeAttribute("class");
    element.classList.add("pattern" + patternNo);
}

document.getElementById("bgGradient").addEventListener("click", setRandomGradientBG);
document.getElementById("bgWallpaper").addEventListener("click", setRandomWallpaperBG);
document.getElementById("floatingBtn").addEventListener("click", toggleCircularMenu);
document.getElementById("bgPattern").addEventListener("click", setRandomPatternBG);


