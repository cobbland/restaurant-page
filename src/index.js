import './styles.css';
import odinLogo from './odin.png';
import { generateHome } from './home';
import { generateAbout } from './about';
import { generateMenu } from './menu';

const header = document.querySelector('header');
const logoDiv = document.createElement('div');
const logoName = document.createElement('div');
const logo = document.createElement('img');
const navButtons = document.querySelector('nav');
const homeButton = document.getElementById('home-button');
const menuButton = document.getElementById('menu-button');
const aboutButton = document.getElementById('about-button');
const content = document.querySelector('#content');

logoDiv.className = 'logo';
logoName.innerText = "Odin Eats";
logo.src = odinLogo;

header.prepend(logoDiv);
logoDiv.appendChild(logo);
logoDiv.appendChild(logoName);

function emptyDiv(div) {
    while (div.firstChild){
        div.firstChild.remove();
    }
}

homeButton.classList.add('active-button');
generateHome(content);

navButtons.addEventListener('click', (button) => {
    if (button.target.innerText === 'Home') {
        button.target.classList.add('active-button');
        menuButton.classList.remove('active-button');
        aboutButton.classList.remove('active-button');
        emptyDiv(content);
        generateHome(content);
    } else if (button.target.innerText === 'Menu') {
        button.target.classList.add('active-button');
        homeButton.classList.remove('active-button');
        aboutButton.classList.remove('active-button');
        emptyDiv(content);
        generateMenu(content);
    } else if (button.target.innerText === 'About') {
        button.target.classList.add('active-button');
        menuButton.classList.remove('active-button');
        homeButton.classList.remove('active-button');
        emptyDiv(content);
        generateAbout(content);
    }
})


console.log("Hello, world!");