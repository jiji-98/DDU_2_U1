const cityFromUser = prompt("Type in a city please")

const foundCity = findCity(cityFromUser);

function findCity(cityName) {
    for (let city of cities) {
        if (city.name === cityName) {
            return city;
        }
        if (city.name !== cityName) {
            document.querySelector("h2").textContent = `${cityName} finns inte i databasen`;
            document.querySelector("title").textContent = `Not Found`;
            document.querySelector("h3").textContent = ``;
        }
    }
}

let distanceTable = tableOfDistance();

function tableOfDistance() {
    let tabel = document.querySelector("#table");

        }
    }
}

