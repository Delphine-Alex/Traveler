let burgerBtn = document.querySelector('.wrapper');
let sw = false;



burgerBtn.addEventListener('click', function() {
    let barreMenu = document.querySelectorAll('.barre');
    let burgerDiv = document.querySelector('.burger');
    let menu = document.querySelector('.menuBurger');
    let menuInt = menu.innerHTML;
    barreMenu[1].classList.toggle('changeMid')
    barreMenu[0].classList.toggle('changeTop');
    barreMenu[2].classList.toggle('changeBot');
    if (sw === false) { 
        menu.style.display = 'block';
        menu.style.bottom = (window.innerHeight - burgerDiv.offsetTop) + 'px';
        menu.classList.remove('animOff');
        void menu.offsetWidth;
        menu.classList.add('animOn');
        menu.innerHTML = '';
        menu.addEventListener('animationend', () => {
            menu.style.display = 'block';
            menu.innerHTML = menuInt;
        })
        sw = !sw;
    } else {
        menu.innerHTML = '';
        menu.classList.remove('animOn');
        void menu.offsetWidth;
        menu.classList.add('animOff');
        menu.addEventListener('animationend', () => {
            menu.style.display = 'none';

        })
        sw = !sw;
    }
})