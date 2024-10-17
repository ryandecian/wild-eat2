document.addEventListener('DOMContentLoaded', function() {
  const searchInput = document.getElementById('search-input');
  const restaurantCards = document.querySelectorAll('.restaurant-card');
  const mainElement = document.querySelector('main');

  // Créer le message "Aucun résultat" une seule fois
  const noResultsMessage = document.createElement('p');
  noResultsMessage.id = 'no-results-message';
  noResultsMessage.textContent = 'Aucun résultat';
  noResultsMessage.style.display = 'none';
  mainElement.appendChild(noResultsMessage);

  searchInput.addEventListener('input', function() {
    const searchTerm = this.value.toLowerCase().trim();
    let hasResults = false;

    restaurantCards.forEach(card => {
      const keywords = card.dataset.keywords.toLowerCase();
      if (keywords.includes(searchTerm)) {
        card.style.display = 'grid'; // Ou 'block', selon votre mise en page
        hasResults = true;
      } else {
        card.style.display = 'none';
      }
    });

    // Afficher ou masquer le message "Aucun résultat"
    if (!hasResults && searchTerm !== '') {
      noResultsMessage.style.display = 'block';
    } else {
      noResultsMessage.style.display = 'none';
    }
  });

  // Le code pour le menu burger reste inchangé
  const menuBurger = document.querySelector('.menu_burger');
  const closeBurger = document.querySelector('.close_burger');
  const navigation = document.querySelector('.navigation');

  if (menuBurger && closeBurger && navigation) {
    function openMenu() {
      navigation.classList.add('open');
    }

    function closeMenu() {
      navigation.classList.remove('open');
    }

    menuBurger.addEventListener('click', openMenu);
    closeBurger.addEventListener('click', closeMenu);
  }
});
