const img = document.querySelector(".bg");
const loadText = document.querySelector(".loading-text");

let load = 0;
let timer = setInterval(blurring, 40);

function blurring() {
    load++;
    if (load > 99) {
        clearInterval(timer);
    }
    loadText.innerHTML = `${load}%`;
    loadText.style.opacity = scale(load, 0, 100, 1, 0);
    img.style.filter = `blur(${scale(load, 0, 100, 75, 0)}px)`;
}

// https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
function scale (number, inMin, inMax, outMin, outMax) {
    return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
}