const menuBtn = document.querySelector('.menuBtn');
const menu = document.querySelector('nav');
const menuElement = document.querySelectorAll('nav a');
const header = document.querySelector('header');
const arrowDown = document.querySelector('.arrowDown');
const firstSection = document.querySelector('#aboutMe');
const sections = document.querySelectorAll('section');
const colorChanger = document.querySelector('.colorChanger');

const showMenu = () => {
    menuBtn.classList.toggle("active");
    menu.classList.toggle('active');
    document.querySelector('body').classList.toggle('lockScroll');
}

const scrollToFirstElement = () => {
    window.scrollTo({
        left: 0,
        top: firstSection.offsetTop,
        behavior: "smooth",
    });
}

const jumpToAnchor = e => {
    window.scrollTo({
        left: 0,
        top: document.querySelector(`${e.target.dataset.anchor}`).offsetTop,
        behavior: "smooth",
    });
}

const changeColor = () => {
    colorChanger.classList.toggle('active');
    if (colorChanger.classList.contains('active')) {
        document.querySelector('body').classList.toggle('darkMotif');
        menu.classList.toggle('darkMotif');
    }
    else {
        document.querySelector('body').classList.toggle('darkMotif');
        menu.classList.toggle('darkMotif');
    }
}

menuBtn.addEventListener('click', showMenu);
menuElement.forEach(el => {
    el.addEventListener('click', showMenu);
    el.addEventListener('click', jumpToAnchor);
});
arrowDown.addEventListener('click', scrollToFirstElement);
colorChanger.addEventListener('click', changeColor);
