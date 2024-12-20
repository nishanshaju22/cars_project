import { useNavigate } from 'react-router-dom'
import '../css/Models.css'
import { deleteBrand } from '../Apis/api';

export const Models = ({brand}) => {

    const navigate = useNavigate();

    function onNavigateToCars() {
        navigate('/cars', { state: { brand } });
    }

    async function handleDelete() {
        try {
            await deleteBrand(brand.name);
            window.location.reload(); // Refresh page
        } catch (error) {
            console.error('Error deleting brand:', error);
        }
    }

    return (
        <div className='movie-card'>
            <div className='movie-poster'>
                <img src={brand.logo} alt={brand.name} />
            </div>
            <div className='movie-info'>
                <h3 onClick={onNavigateToCars}>{brand.name}</h3>
                <div className='delete' onClick={handleDelete}></div>
            </div>
        </div> 
    )
}