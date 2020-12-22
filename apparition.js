let appaBloc = document.querySelectorAll('[class*=appa]');
let nav = document.querySelector('nav');
let direction = '';
let tempStat = 0;


function scollApa(){ 

    window.pageYOffset > tempStat ? direction='DOWN' : direction='UP';
    tempStat = window.pageYOffset;
    
    
    appaBloc.forEach( function(value) {   
                 
               
        let top = value.offsetTop;
        let bottom = value.offsetTop + value.offsetHeight;        
        let overlayTop = window.pageYOffset  ;
        let overlayBottom =  window.pageYOffset + window.innerHeight   ;  
        
 
        
        if (direction === 'DOWN'){
            if( top < overlayBottom && bottom > ( overlayTop + nav.offsetHeight ) ){  
                value.classList.remove('moveB');            
                void value.offsetWidth;
                value.classList.add('move');       
            } else {
                value.classList.remove('move');
                void value.offsetWidth;            
                value.classList.add('moveB');
            }
        } else if ( direction === 'UP' ){
            if( bottom > overlayTop ){  
                value.classList.remove('moveB');            
                void value.offsetWidth;
                value.classList.add('move');       
            } else {
                value.classList.remove('move');
                void value.offsetWidth;            
                value.classList.add('moveB');
            }
        }
  
    })
}

window.addEventListener('scroll',scollApa);