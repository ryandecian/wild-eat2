const menu_burger = document.querySelector('.menu_burger');
const close_burger = document.querySelector('.close_burger');
const navigation = document.querySelector('.navigation')

function openMenu() {

    navigation.classList.add('open');

        menu_burger.style.display= "none";
        close_burger.style.display= "block";
    
    
}

function closeMenu() {

    navigation.classList.remove('open')

        menu_burger.style.display= "block";
        close_burger.style.display= "none";

}

menuBurger.addEventListener('click', openMenu);
closeBurger.addEventListener('click',closeMenu);

