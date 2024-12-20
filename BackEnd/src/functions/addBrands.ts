import { getData, Brand } from "../dataStore";



export function addBrands(name: string, logo: string) {
    const data = getData();

    if (!name) {
        throw new Error("Name is a required field and cannot be null.");
    }

    // Normalize the input name to ensure consistent comparison
    const normalizedName = name.trim().toLowerCase();

    // Check if a brand with the same normalized name already exists
    const brands = data.brands.find((u) => u.name.toLowerCase() === normalizedName);

    if (brands) {
        throw new Error(`The brand '${name}' already exists.`);
    }

    // Create a new brand with the provided name and logo
    const brand: Brand = {
        name: capitalizeFirstLetter(name.trim()),
        logo: logo,
        cars: []
    };

    data.brands.push(brand);

    return brand;
}

// Helper function to capitalize the first letter of a string
function capitalizeFirstLetter(name: string): string {
    return name.charAt(0).toUpperCase() + name.slice(1).toLowerCase();
}