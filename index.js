
const cityFromUser = prompt("Type in a city please")

// <----- hitta rätt stad i arrayen ---->

const foundCity = findCity(cityFromUser);

function findCity(cityName) {
    for (city of cities) {
        if (city.name === cityName) {
            return city;
        }
        if (city.name !== cityName) {
            document.querySelector("h2").textContent = `${cityFromUser} finns inte i databasen`;
            document.querySelector("title").textContent = `Not Found`;
            document.querySelector("h3").textContent = ``;

        }
    }
}


let distanceTable = tableOfDistance();

function tableOfDistance() {
    let tabel = document.querySelector("#table");
    const rows = cities.length;
    const columns = cities.length + 1; // En extra för header-raden

        }
    }
}

