class Auto {
    constructor(name, image, price, power, engine, year, km) {
        this.name = name;
        this.image = image;
        this.price = price;
        this.power = power;
        this.engine = engine;
        this.year = year;
        this.km = km;
    }
}

const autos = [
    new Auto("Mercedes-AMG GT 43 4matic", 'assets/car1.jpg', 55000000, 120, 1600, 2015, 95000),
    new Auto("Lamborghini Huracán Tecnica", 'assets/car2.jpg', 50000000, 150, 2000, 2018, 45000),
    new Auto("Bugatti Chiron", 'assets/car3.jpg', 200000000, 90, 1400, 2010, 130000),
    new Auto("Patty Wagon", 'assets/car4.webp', 4500000, 180, 2200, 2017, 60000),
    new Auto("The Mystery Machine", 'assets/car5.jpg', 6000000, 250, 3000, 2020, 25000),
    new Auto("Reliant Robin RK-2", 'assets/car6.jpg', 5200000, 230, 3200, 2018, 30000),
    new Auto("The Shane", 'assets/car7.jpg', 5800000, 240, 2900, 2019, 28000),
    new Auto("Balloon", 'assets/car8.jpg', 4900000, 220, 3100, 2021, 22000),
    new Auto("what", 'assets/car9.jpg', 6100000, 260, 3300, 2017, 35000),
    new Auto("Skibidi McQueen", 'assets/car10.jpg', 5500000, 245, 3050, 2022, 18000),
    new Auto("Bodhi", 'assets/car11.webp', 5300000, 235, 3150, 2016, 40000),
    new Auto("Mario Kart 24V Ride-On Racer Vehicle 1/1 Mario’s Kart", 'assets/car12.jpg', 5900000, 255, 2800, 2018, 26000),
    new Auto("Slick Car", 'assets/car13.webp', 5000000, 210, 3250, 2020, 24000),
    new Auto("Lincoln's Toe Truck", 'assets/car14.jpg', 6200000, 270, 3400, 2019, 20000),
    new Auto("wroom", 'assets/car15.webp', 5700000, 240, 2950, 2021, 19000),
    new Auto("Banana Car", 'assets/car16.jpg', 5400000, 230, 3000, 2017, 32000),
    new Auto("💋 car", 'assets/car17.jpg', 5600000, 250, 3100, 2018, 27000),
    new Auto("Toyota Yuma Hattori", 'assets/car18.jpg', 5100000, 225, 3200, 2022, 17000),
    new Auto("Lamborghini Urus", 'assets/car19.jpg', 6000000, 265, 3350, 2016, 38000),
    new Auto("kevin", 'assets/car20.jpg', 5800000, 245, 3050, 2019, 23000),
    new Auto("Oscar Mayer Hot Dog Car", 'assets/car21.jpg', 5200000, 235, 3150, 2020, 25000),
    new Auto("Ya'qub Qamar Ad-Din Dibiazah", 'assets/car22.webp', 5900000, 255, 2800, 2021, 16000),
    new Auto("International Harvester L-170", 'assets/car23.jpeg', 5300000, 210, 3250, 1951, 29000),
    new Auto("Opel Astra H 1.6", 'assets/car24.jpg', 6100000, 270, 3400, 2017, 33000),
    new Auto("HW Track Manga", 'assets/car25.jpg', 5700000, 240, 2950, 2022, 15000),
    new Auto("DaBaby Car", 'assets/car26.jpg', 5400000, 230, 3000, 2019, 21000),
    new Auto("cool car", 'assets/car27.png', 5600000, 250, 3100, 2020, 22000),
    new Auto("LPS Safari Car", 'assets/car28.jpg', 5100000, 225, 3200, 2018, 30000),
    new Auto("Kia Sorento 2.5 CRDi", 'assets/car29.jpg', 6000000, 265, 3350, 2005, 37000),
    new Auto("🥒", 'assets/car30.jpg', 5800000, 245, 3050, 2019, 24000),
    new Auto("Lada 2105", 'assets/car31.PNG', 5200000, 235, 3150, 2021, 14000),
    new Auto("Gene Simons VW KISS", 'assets/car31.jpg', 3200000, 292, 1150, 2001, 4000),
    new Auto("Leyland Cars Mini 1000 Mark IV", 'assets/car32.jpg', 9000000, 100, 6942, 1991, 94000),
    new Auto("Reliant Supervan III", 'assets/car33.webp', 1500000, 210, 3200, 1992, 103000),
    new Auto("HW Disney Bundle Vehiculos De Juguete", 'assets/car34.webp', 5500000, 400, 1200, 2011, 25000),
    new Auto("Mitsubishi Lancer Evolution VIII", 'assets/car35.webp', 1900000, 100, 300, 2021, 35000),
    new Auto("Honda Civic Type-R Hatchback", 'assets/car36.webp', 1200000, 1, 100, 2023, 100),
    new Auto("Aston Martin DB3", 'assets/car37.jpg', 5400000, 250, 4000, 1998, 3500),
    new Auto("Kawasaki Jet Ski", 'assets/car38.jpg', 10000000, 500, 4000, 2004, 15500),
    new Auto("Citroën C5 Aircross", 'assets/car39.jpg', 500000, 3, 200, 1887, 35000),
    new Auto("Superbike közepes motor", 'assets/car40.jpg', 5699, 0.1, 15, 2025, 1),
    new Auto("Little Tikes 612060 Red Ride-On", 'assets/car41.webp', 15999, 0.05, 15, 2025, 2),
    new Auto("doejhon", 'assets/car42.jpg', 600000, 1, 100, 1945, 3000),
    new Auto("Cadillac V16 Fleetwood Landaulette", 'assets/car43.jpeg', 1200000, 500, 100, 1956, 9000)
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
                <p><strong>Elnevezés:</strong> ${car.name}</p>
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
