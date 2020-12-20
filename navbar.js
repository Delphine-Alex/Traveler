const navItems = document.querySelectorAll('.nav-items')


let parsedUrl = new URL(window.location.href),
    pathName = parsedUrl.pathname;

navItems.forEach(x => {
    if (x.innerHTML === 'HOME' && pathName === '/index.html') {
        x.style.backgroundColor = '#DEE1E4'
        x.style.color = '#333a3a'
    } else if (x.innerHTML === 'HISTORY' && pathName === '/history.html') {
        x.style.backgroundColor = '#DEE1E4'
        x.style.color = '#333a3a'
    } else if (x.innerHTML === 'ACTIVITIES' && pathName === '/activities.html') {
        x.style.backgroundColor = '#DEE1E4'
        x.style.color = '#333a3a'
    } else if (x.innerHTML === 'ONLINE BOOKING' && pathName === '/booking.html') {
        x.style.backgroundColor = '#DEE1E4'
        x.style.color = '#333a3a'
    }

})