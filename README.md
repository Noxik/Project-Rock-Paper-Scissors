# Project-Rock-Paper-Scissors
Project Odin  1st JS


const container = document.querySelector('#container')
const para = document.createElement('p');
para.setAttribute('style', 'color: red');
para.textContent = ('Hey I\'m red');
container.appendChild(para);

const header = document.createElement("h3");
header.style.color = 'blue';
header.textContent = 'I\m a blue h3!';
container.appendChild(header);

const content = document.createElement('div');
content.style.cssText = 'border: 1px solid black; background-color: pink';
container.appendChild(content);

const headOne = document.createElement("h1");
headOne.textContent = "I'm in a div";
content.appendChild(headOne);

const pDiv = document.createElement("p");
pDiv.textContent = "ME TOO!";
content.appendChild(pDiv);
