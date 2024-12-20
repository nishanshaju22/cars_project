import { getData } from "../dataStore";


export function deleteCars(make: string, model: string) {
    const data =  getData();

    const brand = data.brands.find((u) => u.name.toLowerCase() === make.toLowerCase());

    const car = brand.cars.findIndex((u) => u.model.toLowerCase() === model.toLowerCase());

    if (!car) {
        throw new Error("The car does not exsist");
    }

    brand.cars.splice(car, 1);

    return {};
}
