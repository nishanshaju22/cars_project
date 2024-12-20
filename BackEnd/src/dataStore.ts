

export interface TrackTime {
    track: string | null,
    time: string | null
}

export interface Stats {
    type: string | null,
    seats: number | null,
    fuelType: string | null,
    horsePower: number | null,
    torque: number | null,
    topSpeed: number | null,
    trackTime: TrackTime,
    engineType: string | null,
    fuelCapacity: number | null,
    tyrePressure: number | null,
}

export interface Car {
    make: string,
    model: string,
    year: number,
    image: string,
    stats: Stats | null,
}

export interface Brand {
    name: string,
    logo: string,
    cars: Car[],
}


interface dataStore {
    brands: Brand[]
}

const data: dataStore = {
    brands: []
}

export const getData = (): dataStore => data;
