import { getData } from "../dataStore";


export function showAllBrands() {
    const data = getData();

    if (!data || !Array.isArray(data.brands)) {
        throw new Error("t");
    }

    return data.brands.map((brand) => ({
        name: capitalizeFirstLetter(brand.name),
        logo: brand.logo,
    })).sort((a, b) => a.name.localeCompare(b.name)); 
}

function capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}


export function showCars(company: string) {
    const data = getData();

    const brand = data.brands.find((u) => u.name.toLowerCase() === company.toLowerCase());

    if (!brand) {
        throw new Error(`Brand ${company} not found.`);
    }

    const showCars = [];

    for (const cars of brand.cars) {
        const car = {
            make: cars.make,
            model: cars.model,
            year: cars.year,
            image: cars.image
        }

        showCars.push(car);
    }

    return showCars;

}

export function showCarsStats(model: string) {
    const data = getData();

    let car;
    for (const brand of data.brands) {
        car = brand.cars.find((c) => c.model === model);

        if (car) {
            break;
        }
    }

    return car.stats;
}