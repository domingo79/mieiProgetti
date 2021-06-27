const left = document.querySelector('.left');
const right = document.querySelector('.right');
const container = document.querySelector('.container');


// v-1.0 versione macchinosa ma funzionante
/*
left.addEventListener('mouseenter', () => {
    container.classList.remove('hover_right');
    container.classList.add('hover_left');
});

right.addEventListener('mouseenter', () => {
    container.classList.remove('hover_left');
    container.classList.add('hover_right');
});
*/

// v-2.0
left.addEventListener('mouseenter', () => container.classList.add('hover_left'));
left.addEventListener('mouseleave', () => container.classList.remove('hover_left'));

right.addEventListener('mouseenter', () => container.classList.add('hover_right'));
right.addEventListener('mouseleave', () => container.classList.remove('hover_right'));