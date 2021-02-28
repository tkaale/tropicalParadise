const navBtn = document.querySelector('.burger-btn');
const nav = document.querySelector('.nav');
const navItem = document.querySelectorAll('.nav__item');

const menuStart = () => {
    nav.classList.toggle('nav--active');

    navItem.forEach(item => {
        item.addEventListener('click', () => {
            nav.classList.remove('nav--active');
        });
    });

    handleNavItemNavigation();
};

const handleNavItemNavigation = () => {
    let delayTime = 0;

    navItem.forEach(item => {
        item.classList.toggle('nav-items-animation');
        item.style.animationDelay = '.' + delayTime + 's';
        delayTime++;
    });
};

navBtn.addEventListener('click', menuStart);
