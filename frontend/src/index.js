const BASE_URL = "http://localhost:3000"
const CARS_URL = `${BASE_URL}/cars`
const USERS_URL = `${BASE_URL}/users`
const FAVORITES_URL = `${BASE_URL}/favorites`

function fetchCars() {
    fetch(CARS_URL)
.then( res => res.json())
.then( res => console.log('cars', res));
}

fetchCars()
