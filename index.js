
const cityFromUser = prompt("Type in a city please")

// <----- hitta rätt stad i arrayen ---->

const foundCity = findCity(cityFromUser);

function findCity(cityName) {
    for (city of cities) {
        if (city.name === cityName) {
            return city;

        }
    }
}

