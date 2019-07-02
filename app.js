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

const changeHeaderBgColor = () => {
    if (window.pageYOffset > 0) {
        header.style.opacity = "0";
    }
    else {
        header.style.opacity = "0";
    }
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
    if (colorChanger.checked) {
        document.querySelector('body').classList.toggle('darkMotif');
        menu.classList.toggle('darkMotif');
        header.classList.toggle('darkMotif');
    }
    else {
        document.querySelector('body').classList.toggle('darkMotif');
        menu.classList.toggle('darkMotif');
        header.classList.toggle('darkMotif');
    }
}

//do pomyślenia
/*const lockView = () => {
    console.log(`Scroll:${window.pageYOffset}`);
    let currentSection;
    for (let i = 0; i < sections.length; i++) {
        if (sections[i].offsetTop - 200 <= window.pageYOffset && window.pageYOffset < (sections[i].offsetTop + sections[i].offsetHeight))
            currentSection = sections[i];
    }
    if (currentSection.offsetTop - 100 <= window.pageYOffset && window.pageYOffset < currentSection.offsetTop)
        setTimeout(window.scrollTo({
            left: 0,
            top: currentSection.offsetTop - 40,
            behavior: "smooth",
        }), 2000);


}*/

menuBtn.addEventListener('click', showMenu);
menuElement.forEach(el => {
    el.addEventListener('click', showMenu);
    el.addEventListener('click', jumpToAnchor);
});
window.addEventListener('scroll', changeHeaderBgColor);
arrowDown.addEventListener('click', scrollToFirstElement);
colorChanger.addEventListener('click', changeColor);
//window.addEventListener('scroll', lockView);