import { getData, Car, Stats, TrackTime } from "../dataStore";


export function addCar(make: string, model: string, year: number, image: string) {
    const data = getData();

    if (!make || !model) {
        throw new Error("no make or model was entered these are required fields");
    }

    const brand = data.brands.find((b) => b.name === make);

    if (!brand) {
        throw new Error(`The brand ${make} does not exist. Please create the brand before adding the car.`);
    }
    
    const checkModel = brand.cars.find((u) => u.model === model);

    if (checkModel) {
        throw new Error(`${model} already exsists in ${make}`);
    }

    const currentTime = new Date()

    const currentYear = currentTime.getFullYear();

    if (year < 1886 || year > currentYear) {
        throw new Error(`the year provided is invalid. Please provide an year between 1886 and ${currentYear}`);
    }

    const car: Car = {
        make: make,
        model: model,
        year: year,
        image: image,
        stats: null
    }

    brand.cars.push(car);

    
    return { car };
}