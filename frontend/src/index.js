const BASE_URL = "http://localhost:3000"
const CARS_URL = `${BASE_URL}/cars`
const USERS_URL = `${BASE_URL}/users`
const FAVORITES_URL = `${BASE_URL}/favorites`
const signupForm = document.querySelector('#signup-form')
const signupInputs = document.querySelectorAll(".signup-input")
const logout = document.getElementById('logout');
const carContainer = document.getElementById('cars-container');
const favoritesContainer = document.getElementById('favorites-container');
const subHeader = document.getElementById('sub-header');

const EMPTY_HEART = '♡';
const FULL_HEART = '♥';
let currentUser;
let favorites = [];

class Car {
    constructor(carAttributes) {
        this.make = carAttributes.make;
        this.model = carAttributes.model;
        this.year = carAttributes.year;
        this.description = carAttributes.description;
        this.link = carAttributes.link;
        this.image = carAttributes.image;
        this.id = carAttributes.id;
    }
render() {
    const favorite = favorites.find(fav => fav.car_id === this.id)
        return `<div class='car-card'>
            <h1 class='car-title'>${this.make} ${this.model}</h1>
            <h2 class='car-year'>${this.year}</h2>
            <a href=${this.link} target='_blank'><img src=${this.image} class='car-image' ></a>
            <h3 class='car-description'>${this.description}</h3>
            <button data-car-id=${this.id} class='favorite-button' style="color:${favorite ? 'red' : 'black'};">${favorite ? FULL_HEART : EMPTY_HEART}</button>
        </div>`
    }
}

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
    }).then(res => {
        return res.json()
    })
    .then(res => {
        if (res.message) {
            alert(res.message);
        } else {
            currentUser = res;
            signupForm.style.display = 'none';
            signupInputs[0].value = null;
            signupInputs[1].value = null;
            carContainer.style.display = 'flex';
            logout.style.display = 'flex';
            subHeader.style.display = 'flex';
            fetchFavorites();
            renderSubHeader();
        }
    })
    .catch(err => {
        console.log('err', err)
    })
})

logout.addEventListener('click', () => {
    carContainer.style.display = 'none';
    favoritesContainer.style.display = 'none';
    subHeader.style.display = 'none';
    logout.style.display = 'none';
    signupForm.style.display = 'block';
    currentUser = null;
})

function renderSubHeader() {
    subHeader.innerHTML = '';
    const greeting = document.createElement("div");
    greeting.innerHTML = `Hello ${currentUser.email}!`
    subHeader.append(greeting);

    const homeLink = document.createElement("div");
    homeLink.className = "section";
    homeLink.innerHTML = "Home";
    homeLink.addEventListener('click', () => {
        favoritesContainer.style.display = 'none';
        carContainer.style.display = 'flex';
    })
    subHeader.append(homeLink);

    const favoritesLink = document.createElement("div");
    favoritesLink.className = 'section';
    favoritesLink.innerHTML = "Favorites"
    favoritesLink.addEventListener('click', () => {
        carContainer.style.display = 'none';
        renderFavoriteCars();
        favoritesContainer.style.display = 'flex';
    })
    subHeader.append(favoritesLink)
}

function fetchCars() {
    fetch(CARS_URL)
.then( res => res.json())
.then( res => renderCars(res, carContainer));
}

function fetchFavorites(){
    fetch(BASE_URL + '/users/' + currentUser.id + '/favorites')
    .then(res => res.json())
    .then(res => {
        favorites = res
        renderFavoriteCars();
        fetchCars();
    })
}

function renderFavoriteCars() {
    let favoriteCars = favorites.map(fav => fav.car);
    renderCars(favoriteCars, favoritesContainer, true)
}

function renderCars(cars, container, isFavoritesLink=false) {
    container.innerHTML = '';
    cars.forEach(car => {
        container.innerHTML += new Car(car).render()
    })
    let favoriteButtons = document.querySelectorAll('.favorite-button')
    favoriteButtons.forEach(button => {
        button.addEventListener('click', function(e) {
            if (e.target.style.color !== 'red') {
                fetch(FAVORITES_URL, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json",
                        Accept: "application/json"
                    },
                    body: JSON.stringify({
                            user_id: `${currentUser.id}`,
                            car_id: `${e.target.dataset.carId}`
                    })
            })
            .then( res => res.json())
            .then(() => {
                fetchFavorites()
            }); 
            } else {
                const favorite = favorites.find(fav => fav.car_id.toString() === e.target.dataset.carId);
                fetch(FAVORITES_URL + '/' + favorite.id, {
                    method: "DELETE"
                }).then(() => {
                    fetchFavorites();
                })
            }
        })
    })
}