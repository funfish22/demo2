var open = document.querySelector('.js-open')
var close = document.querySelectorAll('.js-close')
var target = document.querySelector('.lightBox')
var body = document.querySelector('body')

open.addEventListener('click', openFn)

function openFn() {
    target.style.display = 'block';
    body.style.overflow =  'hidden';
}

for(var i=0; i< close.length; i++){
    close[i].addEventListener('click', closeFn)
}

function closeFn() {
    target.style.display = '';
    body.style.overflow =  '';
}