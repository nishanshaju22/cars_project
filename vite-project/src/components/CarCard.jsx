import { useNavigate } from 'react-router-dom'
import '../css/Models.css'
import { deleteCars } from '../Apis/api';

const CarCard = ({companey}) => {

    async function handleDelete() {
        try {
            await deleteCars(companey.make, companey.model);
            window.location.reload(); // Refresh page
        } catch (error) {
            console.error('Error deleting brand:', error);
        }
    }

    function reroute() {
        window.location.href="/models"
    }

  return (
    <div className='moive-card'>
        <div className='movie-poster'>
            <img src={companey.image} alt={companey.model} onClick={reroute}/>
        </div>
        <div className='movie-info'>
            <h3>{`${companey.make} ${companey.model} (${companey.year})`}</h3>
            <div className='delete-cars' onClick={handleDelete}></div>
        </div>
    </div> 
  )
}

export default CarCard;