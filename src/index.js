// Note: DOM elements should be created using JavaScript but styling can be done in a separate CSS file.

const content = document.querySelector('#content');

document.addEventListener('DOMContentLoaded',function(){

    const homeDiv = document.createElement('div');
    homeDiv.classList.add('d-home');
    const h11 = document.createElement('h1');
    h11.innerHTML = 'The';
    
    const h12 = document.createElement('h2');
    h12.innerHTML = 'RoadSide Cafe';

    const btn = document.createElement('button');
    btn.classList.add('menu-btn');
    btn.innerHTML = 'Let Me Check the Menu ';

    const menuDiv = document.createElement('div');
    menuDiv.classList.add('d-menu');

    const menuh1 = document.createElement('h1');
    menuh1.innerHTML = 'Menu';

    const contactDiv = document.createElement('div');
    contactDiv.classList.add('d-contact');

    const contacth1 = document.createElement('h1');
    contacth1.innerHTML = 'Contact';

    const AboutDiv = document.createElement('div');
    AboutDiv.classList.add('d-about');

    const abouth1 = document.createElement('h1');
    abouth1.innerHTML = 'About';

    homeDiv.appendChild(h11);
    homeDiv.appendChild(h12);
    homeDiv.appendChild(btn);
    content.appendChild(homeDiv);

    menuDiv.appendChild(menuh1);
    content.appendChild(menuDiv);

    contactDiv.appendChild(contacth1);
    content.appendChild(contactDiv);

    AboutDiv.appendChild(abouth1);
    content.appendChild(AboutDiv);

});