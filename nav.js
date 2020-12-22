let navBloc = document.querySelector('nav');
let navInitPos = navBloc.offsetTop;
let backMove = document.querySelector('.back-move');
let cloneMenu = navBloc.cloneNode(true);
let backDirection = '';
let tempDir = 0;


window.addEventListener('scroll', menuTrans);


function menuTrans() {

    if (window.getComputedStyle(navBloc).display === 'flex') {
        let testExist = backMove.childNodes.length > 0;
        let navBlocBottom = navBloc.offsetTop + navBloc.offsetHeight;

        tempDir = parseInt(backMove.style.height);

        if (parseInt(backMove.style.height) >= navBloc.offsetHeight && scrollY > navBlocBottom) {
            backMove.style.height = navBloc.offsetHeight + 'px';
            if (!testExist) backMove.appendChild(cloneMenu);

        } else if (scrollY > navBloc.offsetTop) {
            backMove.style.height = ((window.scrollY - navBloc.offsetTop) / 2) + 'px';
            parseInt(backMove.style.height) > tempDir ? backDirection = 'DOWN' : backDirection = 'UP';
            tempDir = parseInt(backMove.style.height);

        } else if (scrollY < navBloc.offsetTop) {
            backMove.style.height = 0;
        }


        if (testExist && backDirection === 'UP') {
            backMove.removeChild(backMove.childNodes[0]);
        }
    }

}