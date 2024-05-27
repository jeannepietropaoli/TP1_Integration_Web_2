const menuBurgerButton = document.querySelector('.nav__burger-button');
const nav = document.querySelector('.nav--desktop');

menuBurgerButton.addEventListener('click', () => {
    nav.style.display = nav.style.display === 'inline-block' ? 'none' : 'inline-block';
    nav.classList.toggle('nav--desktop')
    nav.classList.toggle('nav--mobile');
})