const menuToggler = document.getElementById('menu-toggle');
const navList = document.getElementById('menu-list');

menuToggler.addEventListener('click', () => {
    navList.classList.toggle('show');
});