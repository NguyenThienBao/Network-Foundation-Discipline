let btn_hamburger = document.querySelector('.btn-hamburger');
let btn_close = document.querySelector('.btn-close');
let menu_outside = document.querySelector('.menu-outside');
let menu = document.querySelector('.menu');

btn_hamburger.addEventListener('click', function() {
    btn_hamburger.className = 'btn-hamburger hide';
    menu_outside.className = 'menu-outside show';
    menu.className = 'menu show';
})

btn_close.addEventListener('click', function() {
    btn_hamburger.className = 'btn-hamburger show';
    menu_outside.className = 'menu-outside hide';
    menu.className = 'menu hide';
})

menu_outside.addEventListener('click', function() {
    btn_hamburger.className = 'btn-hamburger show';
    menu_outside.className = 'menu-outside hide';
    menu.className = 'menu hide';
})