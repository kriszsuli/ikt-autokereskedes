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
    new Auto('assets/car1.jpg', 35000000, 120, 1600, 2015, 95000),
    new Auto('assets/car2.jpg', 50000000, 150, 2000, 2018, 45000),
    new Auto('assets/car3.jpg', 200000000, 90, 1400, 2010, 130000),
    new Auto('assets/car4.webp', 4500000, 180, 2200, 2017, 60000),
    new Auto('assets/car5.jpg', 6000000, 250, 3000, 2020, 25000),
    new Auto('assets/car6.jpg', 5200000, 230, 3200, 2018, 30000),
    new Auto('assets/car7.jpg', 5800000, 240, 2900, 2019, 28000),
    new Auto('assets/car8.jpg', 4900000, 220, 3100, 2021, 22000),
    new Auto('assets/car9.jpg', 6100000, 260, 3300, 2017, 35000),
    new Auto('assets/car10.jpg', 5500000, 245, 3050, 2022, 18000),
    new Auto('assets/car11.webp', 5300000, 235, 3150, 2016, 40000),
    new Auto('assets/car12.jpg', 5900000, 255, 2800, 2018, 26000),
    new Auto('assets/car13.webp', 5000000, 210, 3250, 2020, 24000),
    new Auto('assets/car14.jpg', 6200000, 270, 3400, 2019, 20000),
    new Auto('assets/car15.webp', 5700000, 240, 2950, 2021, 19000),
    new Auto('assets/car16.jpg', 5400000, 230, 3000, 2017, 32000),
    new Auto('assets/car17.jpg', 5600000, 250, 3100, 2018, 27000),
    new Auto('assets/car18.jpg', 5100000, 225, 3200, 2022, 17000),
    new Auto('assets/car19.jpg', 6000000, 265, 3350, 2016, 38000),
    new Auto('assets/car20.jpg', 5800000, 245, 3050, 2019, 23000),
    new Auto('assets/car21.jpg', 5200000, 235, 3150, 2020, 25000),
    new Auto('assets/car22.webp', 5900000, 255, 2800, 2021, 16000),
    new Auto('assets/car23.jpeg', 5300000, 210, 3250, 2018, 29000),
    new Auto('assets/car24.jpg', 6100000, 270, 3400, 2017, 33000),
    new Auto('assets/car25.jpg', 5700000, 240, 2950, 2022, 15000),
    new Auto('assets/car26.jpg', 5400000, 230, 3000, 2019, 21000),
    new Auto('assets/car27.png', 5600000, 250, 3100, 2020, 22000),
    new Auto('assets/car28.jpg', 5100000, 225, 3200, 2018, 30000),
    new Auto('assets/car29.jpg', 6000000, 265, 3350, 2016, 37000),
    new Auto('assets/car30.jpg', 5800000, 245, 3050, 2019, 24000),
    new Auto('assets/car31.PNG', 5200000, 235, 3150, 2021, 14000)
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
