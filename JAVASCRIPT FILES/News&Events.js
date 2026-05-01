const $prev = document.querySelector('.prev');
const $next = document.querySelector('.next');



$next.addEventListener(
    'click',
    () => {
        const items = document.querySelectorAll('.item');document.querySelector('.slide').prepend(items[items.length - 1]); 
    },
);

$prev.addEventListener(
    'click',
    () => {
        const items = document.querySelectorAll('.item');document.querySelector('.slide').appendChild(items[0]);
    },
);