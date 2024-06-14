
/* Images Array : Vous avez un tableau d'images que vous voulez utiliser pour changer l'image de fond.
Index actuel de l'image : Vous suivez l'image actuelle avec currentImageIndex.
Sélection de l'élément header : Vous sélectionnez l'élément header avec document.querySelector('header').
Fonction changeBackground : Cette fonction change l'image de fond de l'élément header et met à jour l'index de l'image.
setInterval : Cette fonction appelle changeBackground toutes les 5 secondes (5000 millisecondes).
Initialisation : Vous appelez changeBackground une fois au début pour définir l'image de fond initiale.
Avec ce code, l'image de fond de l'élément header changera automatiquement toutes les 5 secondes, créant un effet de carrousel. */
const images = [
    '776622-le-grand-banquet-gaulois-du-parc-asterix-de-retour-pour-l-ete-2022.jpg',
    'Aerial_view_of_the_Congo_River_near_Kisangani.jpg',
    'pas-de-reseaux-sociaux-merci-de-citer-le-design-du-t-shirt-appareil-photo-interdit-icone-de-camera-barree-interdite-impossible-de-prendre-des-photos-2c78x48.jpg'
];

let currentImageIndex = 0;
const carouselBackground = document.querySelector('header');

function changeBackground() {
    carouselBackground.style.backgroundImage = `url(${images[currentImageIndex]})`;
    currentImageIndex = (currentImageIndex + 1) % images.length;
}

// Change the background image every 5 seconds (5000 milliseconds)
setInterval(changeBackground, 5000);

// Initialize with the first background image
changeBackground();

