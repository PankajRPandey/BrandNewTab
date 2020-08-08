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

window.onload = function() {
    setRandomWallpaperBG();
}

function setRandomWallpaperBG() {
    document.body.style.backgroundImage = "url('')"; //perform page onload when button is clicked
    function getScreenResolution() {
        return window.outerWidth + 'x' + window.outerHeight;
    }
    let res = getScreenResolution();
    document.body.style.backgroundImage = "url('https://source.unsplash.com/random/" + res + "')";
}

function refreshPage(){
    window.location.reload();
} 

document.getElementById("bgGradient").addEventListener("click", setRandomGradientBG);
document.getElementById("bgWallpaper").addEventListener("click", refreshPage);
document.getElementById("floatingBtn").addEventListener("click", toggleCircularMenu);
