import { useLocation } from 'react-router-dom';
import { addCar, getCars } from '../Apis/api';
import { useEffect, useState } from 'react';
import CarCard from '../components/carCard';
import '../css/Cars.css'



const Cars = () => {
    const location = useLocation();
    const { brand } = location.state || {}

    const [cars, setCars] = useState([]);

    useEffect(() => {
        async function fetchBrands() {
            try {
                const res = await getCars(brand.name);
                setCars(res);
                console.log(res);
            } catch (error) {
                console.error('Error fetching brands:', error);
            }
        }

        fetchBrands();
    }, []);

    const [addActive, setAddActive] = useState(false);
    
    const toggleMenu = () => {
        setAddActive(!addActive);
    };

    const [make, setMake] = useState("")
    const [models, setModels] = useState("")
    const [year, setYear] = useState("")
    const [image, setImage] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();

        if (!models.trim() || !year.trim() || !image.trim()) return;
    
        try {
            await addCar(brand.name, models, year, image);
            window.location.reload();
        } catch (error) {
            console.error('Error adding brand:', error);
        }
    }

    return (
        <div className='cars'>
            <div className='brand-overlay'></div>
            <div className="brand-background"></div>

            <div className='brands'>
                <a className='brand-name'>{brand?.name}</a>
                <img className="brand-logo" src={brand.logo} alt={brand.name} />
            </div>

            <div className={`add-values ${addActive ? "active" : ""}`}></div>
            
            <form onSubmit={handleSubmit}>
                <input value={models} onChange={(e) => {setModels(e.target.value)}} className={`add-model ${addActive ? "active" : ""}`} type='text' placeholder='Add Model...'>

                </input>

                <input value={year} onChange={(e) => {setYear(e.target.value)}} className={`add-year ${addActive ? "active" : ""}`} type='text' placeholder='Add Model Year...'>

                </input>
                
                <input value={image} onChange={(e) => {setImage(e.target.value)}} className={`add-image ${addActive ? "active" : ""}`} type='text' placeholder='Add an Image...'>

                </input>
                
                <button type='submit' className={`add-car ${addActive ? "active" : ""}`}><p>Add Car</p></button>
            </form>

            <div className='add-cars' onClick={toggleMenu}>
                <div className={`btn-cars ${addActive ? "active" : ""}`}>
                    +
                </div>
            </div>

            {cars.length === 0 ? (
                <div className='empty'></div>
            ) : (
                <div className='home'>
                    <div className='car-grid'>
                        {cars.map((car) => <CarCard companey={car} key={brand.id}/>)}
                    </div>
                </div>
            )} 
        </div>
    );
};

export default Cars;