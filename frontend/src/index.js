const BASE_URL = "http://localhost:3000"
const CARS_URL = `${BASE_URL}/cars`
const USERS_URL = `${BASE_URL}/users`
const FAVORITES_URL = `${BASE_URL}/favorites`

function fetchCars() {
    fetch(CARS_URL)
.then( res => res.json())
.then( res => renderCars(res));
}

function renderCars(cars) {
    console.log('cars', cars)
    const carWraps = document.getElementById('cars-container');
    carWraps.innerHTML = '';
    
    cars.forEach(car => {
        const cardContainer = document.createElement('div');
        cardContainer.className = 'car-card';

        const carTitleModel = document.createElement('h1');
        carTitleModel.innerHTML = `${car.make} ${car.model}`
        carTitleModel.className = 'car-title';
        cardContainer.append(carTitleModel);

        const year = document.createElement('h2');
        year.innerHTML = car.year;
        year.className = 'car-year';
        cardContainer.append(year);

        const carLink = document.createElement('a');
        carLink.href = car.link;
        carLink.target = '_blank';
        const carImage = document.createElement('img');
        carImage.src = car.image;
        carImage.className = 'car-image';
        carLink.append(carImage);
        cardContainer.append(carLink);

        const carDescription = document.createElement('h3');
        carDescription.innerHTML = car.description;
        carDescription.className = 'car-description';
        cardContainer.append(carDescription);

        const favoriteButton = document.createElement('button');
        favoriteButton.textContent = 'Like';
        favoriteButton.className = 'favorite-button'
        cardContainer.append(favoriteButton);
        // addEventListener to favorite a car
        // have favorite button with id attached

        carWraps.append(cardContainer);
    })
}

fetchCars()
