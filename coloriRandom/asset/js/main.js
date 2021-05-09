
for (let i = 0; i < 100; i++) {
    const box = document.createElement('div');
    box.classList.add('box');
    document.querySelector('.container').appendChild(box);
}

const btn = document.querySelector('.btn');
const randomColorBlock = document.querySelectorAll('.box');

function RandomColorHexCode() {
    var chars = '0123456789abcdef';
    var colorLength = 6;
    var color = '';

    for (let i = 0; i < colorLength; i++) {
        const randomColor = Math.floor(Math.random() * chars.length);
        if (!color.includes(randomColor, randomColor + 1)) {
        }
        color += chars.substring(randomColor, randomColor + 1);
    }
    return '#' + color;
}

function addColor() {
    randomColorBlock.forEach(e => {
        var newColor = RandomColorHexCode()
        e.style.backgroundColor = newColor;
        e.innerHTML = newColor;
    })
}