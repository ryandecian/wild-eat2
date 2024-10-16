const menuBurger = document.querySelector('.menu_burger');
const closeBurger = document.querySelector('.close_burger');
const navigation = document.querySelector('.navigation')

function openMenu() {
    navigation.classList.add('open');
    menuBurger.style.display = 'none';
    closeBurger.style.display = 'block';
}

function closeMenu() {
    navigation.classList.remove('open');
    menuBurger.style.display = 'block';
    closeBurger.style.display = 'block';
}

menuBurger.addEventListener('click', openMenu);
closeBurger.addEventListener('click',closeMenu);

