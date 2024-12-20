import { getData } from "../dataStore";


export function deleteBrand(brandName: string) {
    const data = getData();

    const brand = data.brands.findIndex((u) => u.name.toLowerCase() === brandName.toLowerCase());

    if (!brand) {
        throw new Error("this brand does not exsist");
    }

    data.brands.splice(brand, 1);

    return {};
}