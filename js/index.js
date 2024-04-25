import './rellax.min.js';
import './three.min.js';
import './vanta.net.min.js';

const $ = document.querySelector.bind(document)
const $$ = document.querySelectorAll.bind(document)

const karta = $('.header-main');
let countGroup = 0;
const str = 'гарантированная высокоточная навигация в любых условиях';

const randome = () => {
    const min = 1, max = 99;
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

const removeStarsGroup = (group) => {
    setTimeout(() => {
        const arr = Array.from($$(`.${group}`));
        arr.forEach(item => item.remove());
    }, 7000)
}

const addStars = () => {
    for(let i = 0; i < 10; i++) {
        const star = document.createElement('div');
        star.className = `star starGroupe-${countGroup}`;
        star.style.top = randome() + '%';
        star.style.left = randome() + '%';
        karta.append(star);
    }
    removeStarsGroup('starGroupe-' + countGroup);
    countGroup = countGroup > 3 ? 0 : countGroup + 1;
} 
addStars();
setInterval(addStars, 2000);

const desc = $('.header-slogan_desc');
const timing = 70;

const printDesc = () => {
    desc.textContent = '';
    desc.textContent += str[0];
    const intervalId = setInterval(() => {
        let idx = desc.textContent.length;
        if(idx === str.length) {
            clearInterval(intervalId);
        } else {
            desc.textContent += str[idx];
        }
        
    }, timing)   
}
printDesc();
setInterval(printDesc, str.length * timing + 10000);

const header = $('.header-main');
const navBox = $('.nav-box');
const navPanelEl = $('.nav-panel');
let headerTopOffset = 0;
const innerHeight = window.innerHeight;



const mevuBackgroung = () => {
    headerTopOffset = header.getBoundingClientRect().top;
    
    if (headerTopOffset < -200) {
        if (!navBox.classList.contains('scrolled')) {
            navBox.classList.add('scrolled')
        }
    } else {
        if (navBox.classList.contains('scrolled')) {
            navBox.classList.remove('scrolled')
        }        
    }
}

const navPanel = () => {
    if ((innerHeight + headerTopOffset) < 150) {
        if (!navPanelEl.classList.contains('active')) {
            navPanelEl.classList.add('active');
        }
    } else {
        if (navPanelEl.classList.contains('active')) {
            navPanelEl.classList.remove('active');
        }
    }
}

document.addEventListener('scroll', () => {
    mevuBackgroung();
    navPanel();
})

VANTA.NET({
    el: ".backgroung-s2",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,
    color: 0x83888E,
    backgroundColor: 0x414D5D,
    points: 8.00,
    maxDistance: 21.00,
    spacing: 16.00
  })

const rellaxProcessPr = new Rellax('.rellax', {
    speed: -2,
    center: false,
    wrapper: null,
    round: true,
    vertical: true,
    horizontal: false
  });

