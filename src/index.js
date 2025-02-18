import './styles.css';
import odinLogo from './odin.png';

const header = document.querySelector('header');
const logoDiv = document.createElement('div');
const logoName = document.createElement('div');
const logo = document.createElement('img');
const navButtons = document.querySelector('nav');
const content = document.querySelector('#content');

logoDiv.className = 'logo';
logoName.innerText = "Odin Eats";
logo.src = odinLogo;

header.prepend(logoDiv);
logoDiv.appendChild(logo);
logoDiv.appendChild(logoName);

navButtons.addEventListener('click', (button) => {
    if (button.target.innerText === 'Home') {
        if (content.innerText === 'It worked!') {
        content.innerText = '';
        } else {
        content.innerText = 'It worked!';
        }
    }
})


console.log("Hello, world!");