const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


// 1- versione macchinosa ma funzionante

left.addEventListener('mouseenter', () => {
    container.classList.remove('hover_right');
    container.classList.add('hover_left');
});

right.addEventListener('mouseenter', () => {
    container.classList.remove('hover_left');
    container.classList.add('hover_right');
});