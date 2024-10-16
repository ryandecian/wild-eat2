//Traduction du site en Français et Anglais

document.addEventListener("DOMContentLoaded", () => {
    const dictionaryFrToEn = {
        "Les Délices du gout perdu": "Delights of Lost Taste",
        "Bourger en Folie": "Burger Madness",
        "Soshi de la chance": "Lucky Sushi",
        "Grand-père au sirop d'érables": "Grandpa in Maple Syrup",
        "Eau pluitée de la Seine": "Rainy Seine Water",
        "La Pasta La Vista, Chéri": "Pasta La Vista, Baby",
        "Au Bled de l'optimisme": "Field of Optimism",
        "Pizza de l'amour égaré": "Lost Love Pizza",
        "Diramilou": "Diramilou",
        "La Cuillière enchantée" : "The Enchanted Spoon",
        "La Maison du Bonheur éphémère" : "The House of Ephemeral Happiness",
        "Voyages autour de mon assiette" : "Journeys Around My Plate",
        "Adresse" : "Adress",
        "Actualités" : "News",
        "Explorez des plats uniques et authentiques allant des classiques revisités aux créations contemporaines" : "Explore unique and authentic dishes ranging from reimagined classics to contemporary creations",
        "Termes et conditions" : "Terms and Conditions",
        "Tout" : "All",
        "Plat" : "Dish",
        "Rechercher" : "Search",
        "Confidentialité" : "Privacy",
    }

    const dictionaryEnToFr = {
        "Delights of Lost Taste": "Les Délices du gout perdu",
        "Burger Madness": "Bourger en Folie",
        "Lucky Sushi": "Soshi de la chance",
        "Grandpa in Maple Syrup": "Grand-père au sirop d'érables",
        "Rainy Seine Water": "Eau pluitée de la Seine",
        "Pasta La Vista, Baby": "La Pasta La Vista, Chéri",
        "Field of Optimism": "Au Bled de l'optimisme",
        "Lost Love Pizza": "Pizza de l'amour égaré",
        "Diramilou": "Diramilou",
        "The Enchanted Spoon" : "La Cuillière enchantée",
        "The House of Ephemeral Happiness" : "La Maison du Bonheur éphémère",
        "Journeys Around My Plate" : "Voyages autour de mon assiette",
        "Adress" : "Adresse",
        "News" : "Actualités",
        "Explore unique and authentic dishes ranging from reimagined classics to contemporary creations" : "Explorez des plats uniques et authentiques allant des classiques revisités aux créations contemporaines",
        "Terms and Conditions" : "Termes et conditions",
        "All" : "Tout",
        "Dish" : "Plat",
        "Search" : "Rechercher",
        "Privacy" : "Confidentialité",
    }


    const classList = [
        ".restaurant-name",
        ".liste-plat",
        ".restaurant-card",
        ".icon-image",
        ".photo-plat",
        ".adresse",
        ".actual",
        ".slogan",
        ".search-input",
        ".filter-option",
        ".footer-translate",
        ]

    function translateFrToEn() {
        document.querySelectorAll(classList).forEach(element => {
            if (dictionaryFrToEn[element.innerText]) {
                element.innerText = dictionaryFrToEn[element.innerText];
            }   
        })
    }
    
    function translateEnToFr() {
        document.querySelectorAll(classList).forEach(element => {
            if (dictionaryEnToFr[element.innerText]) {
                element.innerText = dictionaryEnToFr[element.innerText];
            }
        });
    }

    function translateFrToEnFilter() {
        const searchInputEn = document.getElementById("search-input");
        searchInputEn.placeholder = "Search for a dish or restaurant";
    }

    function translateEnToFrFilter() {
        const searchInputFr = document.getElementById("search-input");
        searchInputFr.placeholder = "Rechercher un plat ou un restaurant"
    }

    
    const englishButton = document.querySelector('.english_flag');
    const frenchButton = document.querySelector('.french_flag');

    englishButton.addEventListener('click', translateFrToEn);
    frenchButton.addEventListener('click', translateEnToFr);
    englishButton.addEventListener('click', translateFrToEnFilter);
    frenchButton.addEventListener('click', translateEnToFrFilter);
});




//---------------------------------------------------------------------------

//Menu burger

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

