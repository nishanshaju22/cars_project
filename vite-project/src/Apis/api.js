const BASE_URL = "http://127.0.0.1:3200/";

export async function getCars(company) {
    const res = await fetch(`${BASE_URL}show/cars/${company}`, {
        method: 'GET'
    })

    const data = await res.json()
    return data;
}

export async function showAllBrands() {
    const res = await fetch(`${BASE_URL}show/brands`, {
        method: 'GET'
    })

    const data = await res.json()
    return data;
}

export async function deleteBrand(brandName) {
    const res = await fetch(`${BASE_URL}brands/delete?brandName=${brandName}`, {
        method: 'DELETE'
    })
    
    const data = await res.json()
    return data;
}

export async function deleteCars(make, model) {
    const res = await fetch(`${BASE_URL}cars/delete?make=${make}&model=${model}`, {
        method: 'DELETE'
    })
    
    const data = await res.json()
    return data;
}

export async function addBrands(name, logo) {
    const res = await fetch(`${BASE_URL}add/brands`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Ensure the server knows you're sending JSON
        },
        body: JSON.stringify({
            name: name,
            logo: logo
        })
    });

    if (!res.ok) {
        // Handle HTTP errors
        const errorMessage = await res.text();
        throw new Error(`Error ${res.status}: ${errorMessage}`);
    }

    const data = await res.json();
    return data;
}

export async function addCar(make, model, year, image) {
    const res = await fetch(`${BASE_URL}add/cars`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Ensure the server knows you're sending JSON
        },
        body: JSON.stringify({
            make: make,
            model: model,
            year: year,
            image: image
        })
    });

    if (!res.ok) {
        // Handle HTTP errors
        const errorMessage = await res.text();
        throw new Error(`Error ${res.status}: ${errorMessage}`);
    }

    const data = await res.json();
    return data;
}