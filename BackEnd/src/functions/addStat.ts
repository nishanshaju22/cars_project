import { getData, TrackTime, Stats } from "../dataStore";

export function addStats( model: string, type: string, seats: number, fuelType: string,
    horsePower: number, torque: number, topSpeed: number, trackTime: TrackTime,
    engineType: string, fuelCapacity: number, tyrePressure: number
) {
    const data = getData();

    let car;
    for (const brand of data.brands) {
        car = brand.cars.find((c) => c.model === model);

        if (car) {
            break;
        }
    }

    if (!car) {
        throw new Error(`Car with model ${model} not found.`);
    }

    const trackTimes = {
        track: trackTime.track,
        time: trackTime.time
    };

    const stats: Stats = {
        type: type,
        seats: seats,
        fuelType: fuelType,
        fuelCapacity: fuelCapacity,
        horsePower: horsePower,
        tyrePressure: tyrePressure,
        engineType: engineType,
        topSpeed: topSpeed,
        torque: torque,
        trackTime: trackTimes
    };

    car.stats = stats;

    return { car };
}