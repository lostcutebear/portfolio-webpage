const nav = document.getElementById('nav');
const navBtn = document.getElementById('nav-btn');
const navBtnImg = document.getElementById('nav-btn-img');

const navMenu = () => {
    if(nav.classList.toggle('open')) {
        navBtnImg.src = './img/icons/nav-close.svg';
    } else {
        navBtnImg.src = './img/icons/nav-open.svg';
    }
}

AOS.init();
/* { 
    once: true - to turn off constant animation 
    disable: mobile - to turn off animations on mobile
}

*/