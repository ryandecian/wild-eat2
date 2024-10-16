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



document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const filterSelect = document.getElementById('filter-select');
  const searchButton = document.getElementById('search-button');
  const restaurantCards = document.querySelectorAll('.restaurant-card');

  function filterRestaurants() {
    const searchTerm = searchInput.value.toLowerCase();
    const filterValue = filterSelect.value;

    restaurantCards.forEach(card => {
      const keywords = card.dataset.keywords.toLowerCase();
      const isVisible = keywords.includes(searchTerm) && 
                        (filterValue === '' || keywords.includes(filterValue));
      card.style.display = isVisible ? 'flex' : 'none';
    });
  }

  searchButton.addEventListener('click', filterRestaurants);
  searchInput.addEventListener('input', filterRestaurants);
  filterSelect.addEventListener('change', filterRestaurants);
});