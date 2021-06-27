const loadText = document.querySelector('.loading_text');
const bg = document.querySelector('.bg');

let load = 0;

let int = setInterval(huRotate, 20);

function huRotate() {
    load++

    if (load > 99) {
        clearInterval(int)
    }
    console.log(load);

    loadText.innerHTML = `${load}%`;

    loadText.style.opacity = scale(load, 0, 100, 1, 0);

    bg.style.filter = `hue-rotate(${scale(load, 0, 100, 90, 360)}deg)`
    /**
     * utilizzo map a range of num to another num range
     */
    function scale(number, inMin, inMax, outMin, outMax) {
        return (number - inMin) * (outMax - outMin) / (inMax - inMin) + outMin;
    }
};