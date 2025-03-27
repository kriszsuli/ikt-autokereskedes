class Auto {
    constructor(image, price, power, engine, year, km) {
        this.image = image;
        this.price = price;
        this.power = power;
        this.engine = engine;
        this.year = year;
        this.km = km;
    }
}

const autos = [
    new Auto('assets/car1.jpg', 3500000, 120, 1600, 2015, 95000),
    new Auto('assets/car2.jpg', 5000000, 150, 2000, 2018, 45000),
    new Auto('assets/car3.jpg', 2000000, 90, 1400, 2010, 130000),
    new Auto('assets/car4.webp', 4500000, 180, 2200, 2017, 60000),
    new Auto('assets/car5.jpg', 6000000, 250, 3000, 2020, 25000),
    new Auto('assets/car6.jpg', 6000000, 250, 3000, 2020, 25000),
    new Auto('assets/car7.jpg', 6000000, 250, 3000, 2020, 25000),
    new Auto('assets/car8.jpg', 6000000, 250, 3000, 2020, 25000),
    new Auto('assets/car9.jpg', 6000000, 250, 3000, 2020, 25000),
    new Auto('assets/car10.jpg', 6000000, 250, 3000, 2020, 25000),
    new Auto('assets/car11.webp', 6000000, 250, 3000, 2020, 25000)
];

function displayCars(cars) {
    const carList = document.getElementById('carList');
    carList.innerHTML = ''; // listát kiürítem
    cars.forEach(car => {
        const carElement = document.createElement('div');
        carElement.classList.add('car');
        carElement.innerHTML = `
            <img src="${car.image}" alt="Car">
            <div class="car-details">
                <p><strong>Ár:</strong> ${car.price} Ft</p>
                <p><strong>Teljesítmény:</strong> ${car.power} LE</p>
                <p><strong>Motortérfogat:</strong> ${car.engine} cm³</p>
                <p><strong>Évjárat:</strong> ${car.year}</p>
                <p><strong>Kilométeróra:</strong> ${car.km} km</p>
            </div>
        `;
        carList.appendChild(carElement);
    });
}

// szűrés
function filterCars(event) {
    event.preventDefault();

    const priceFilter = document.getElementById('priceFilter').value;
    const powerFilter = document.getElementById('powerFilter').value;
    const engineFilter = document.getElementById('engineFilter').value;

    const filteredCars = autos.filter(car => {
        return (
            (priceFilter === '' || car.price <= priceFilter) &&
            (powerFilter === '' || car.power >= powerFilter) &&
            (engineFilter === '' || car.engine >= engineFilter)
        );
    });

    displayCars(filteredCars);
}
document.getElementById('filterForm').addEventListener('submit', filterCars);

// megjelenítí a járgányokat
window.onload = () => {
    displayCars(autos);
};
