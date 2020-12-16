const BASE_URL = "http://localhost:3000"
const CARS_URL = `${BASE_URL}/cars`
const USERS_URL = `${BASE_URL}/users`
const FAVORITES_URL = `${BASE_URL}/favorites`
const signupForm = document.querySelector('#signup-form')
const signupInputs = document.querySelectorAll(".signup-input")
const logout = document.getElementById('logout');
const carWraps = document.getElementById('cars-container');

const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
let currentUser;
let favorites = [];

signupForm.addEventListener('submit', function(e) {
    e.preventDefault();
    fetch(USERS_URL, {
        method: 'POST',
        headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
        },
        body: JSON.stringify({
            user: {
                email: signupInputs[0].value,
                password: signupInputs[1].value
            }
        })
    }).then(res => res.json())
    .then(res => {
        if (res.message) {
            alert(res.message);
        } else {
            currentUser = res;
            signupForm.style.display = 'none';
            carWraps.style.display = 'flex';
            logout.style.display = 'flex';
            fetchFavorites();
            fetchCars();
        }
    })
})

function fetchCars() {
    fetch(CARS_URL)
.then( res => res.json())
.then( res => renderCars(res));
}

function fetchFavorites(){
    fetch(BASE_URL + '/users/' + currentUser.id + '/favorites')
    .then(res => res.json())
    .then(res => {
        favorites = res
        console.log('res', res)
    })
}

function renderCars(cars) {
    carWraps.innerHTML = '';
    cars.forEach(car => {
        renderCar(car);
    })
}

function renderCar(car) {
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
        const favorite = favorites.find(fav => fav.car_id === car.id)
        favoriteButton.textContent = favorite ? FULL_HEART : EMPTY_HEART;
        favoriteButton.style.color = favorite ? 'red' : 'black';
        favoriteButton.className = 'favorite-button'
        cardContainer.append(favoriteButton);
        favoriteButton.addEventListener('click', () => handleFavoriteCar(car.id, favoriteButton))

        carWraps.append(cardContainer);
}

function handleFavoriteCar(carId, button) {
    if (button.style.color === 'red') {
        const favorite = favorites.find(fav => fav.car_id === carId);
        fetch(FAVORITES_URL + '/' + favorite.id, {
            method: "DELETE"
        }).then(() => {
            fetchFavorites();
            button.style.color = 'black';
            button.textContent = EMPTY_HEART;
        })
    } else {
        fetch(FAVORITES_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Accept: "application/json"
            },
            body: JSON.stringify({
                    user_id: `${currentUser.id}`,
                    car_id: `${carId}`
            })
    })
    .then( res => res.json())
    .then(() => {
        fetchFavorites();
        button.style.color = 'red';
        button.textContent = FULL_HEART;
    }); 
    }
}