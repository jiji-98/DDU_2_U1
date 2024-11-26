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

    for (let i = 0; i < (cities.length + 1); i++) {
        const cityIdCell = document.createElement("div");
        cityIdCell.classList.add("cell");
        cityIdCell.classList.add("head_column");
        cityIdCell.style.display = "grid";

        if (i === 0) {
            cityIdCell.textContent = "";
        } else {
            cityIdCell.textContent = cities[i - 1].id;
        }
        tabel.appendChild(cityIdCell);
    }

    for (let j = 0; j < cities.length; j++) {
        let cityNameRow = document.createElement("div");
        cityNameRow.textContent = cities[j].id + " - " + cities[j].name;
        cityNameRow.classList.add("head_row");
        cityNameRow.classList.add("cell");
        if (j % 2 == 0) {
            cityNameRow.classList.add("even_row");
        }
        tabel.appendChild(cityNameRow);

        for (let k = 0; k < cities.length; k++) {
            const distanceCell = document.createElement("div");
            distanceCell.classList.add("cell");
            if (k % 2 == 0) {
                distanceCell.classList.add("even_col");
            }
            if (j % 2 === 0) {
                distanceCell.classList.add("even_row");
            }

            let cellDistanceValue = null;
            for (let distance of distances) {
                if (distance.city1 === cities[j].id && distance.city2 === cities[k].id) {
                    cellDistanceValue = distance.distance;
                }
                if (distance.city2 === cities[j].id && distance.city1 === cities[k].id) {
                    cellDistanceValue = distance.distance;
                }
            }

            if (cellDistanceValue) {
                distanceCell.textContent = cellDistanceValue / 10;
            }

            tabel.appendChild(distanceCell);
        }
    }
}

let cityNameBoxes = [];
for (let city of cities) {
    cityNameBoxes.push(city.name);
}
for (let i = 0; i < cityNameBoxes.length; i++) {
    let divCities = document.getElementById("cities");
    let cityPElement = document.createElement("p");
    cityPElement.classList.add("cityBox");
    cityPElement.textContent = cityNameBoxes[i];
    divCities.appendChild(cityPElement);
}

let closestCity = undefined;
let furthestCity = undefined;
let closestDistance = Infinity;
let furthestDistance = 0;

for (let path of distances) {
    if (path.city1 === foundCity.id || path.city2 === foundCity.id) {
        let diffCity;
        if (path.city1 === foundCity.id) {
            diffCity = path.city2;
            console.log(diffCity);
        } else {
            diffCity = path.city1;
            console.log(diffCity);
        }
        if (path.distance < closestDistance) {
            closestDistance = path.distance;
            closestCity = diffCity;
            console.log(closestCity);
            console.log(diffCity);
        }
        if (path.distance > furthestDistance) {
            furthestDistance = path.distance;
            furthestCity = diffCity;
            console.log(furthestCity);
            console.log(diffCity);
        }
    }
}

