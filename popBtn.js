let popBtn = document.querySelectorAll('[class*=popBtn]');
let popDiv = document.querySelectorAll('[class*=popDiv]');
let swi = Array(popBtn.length).fill(false);



popBtn.forEach((x, index) => {


    x.addEventListener('click', () => {
        let parent = popBtn[index].offsetParent;

        if (swi[index] === false) {
            popDiv[index].style.top = (parent.offsetTop + parent.offsetHeight - 15) + 'px';
            popDiv[index].style.left = (parent.offsetLeft + popBtn[index].offsetLeft - 60) + 'px';
            popDiv[index].classList.remove("visiblepopOff");
            void popDiv[index].offsetWidth;
            popDiv[index].classList.add("visiblepopOn");
            swi[index] = !swi[index];
            test = index;
        } else {
            popDiv[index].classList.remove("visiblepopOn");
            void popDiv[index].offsetWidth;
            popDiv[index].classList.add("visiblepopOff");
            swi[index] = !swi[index];
        }


    })


})


