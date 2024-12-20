import React, { useEffect, useState } from 'react'
import "../css/Models.css"
import { Models } from '../components/Card'
import Navbar from '../components/Navbar'
import { addBrands, showAllBrands } from '../Apis/api'



export function Brands() {

    const [brands, setBrands] = useState([]);

    useEffect(() => {
        async function fetchBrands() {
            try {
                const res = await showAllBrands();
                setBrands(res);
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
    
    const [searchQuery, setSearchQuery] = useState("")
    const [input, setInput] = useState("")

    async function handleSubmit(e) {
        e.preventDefault();

        if (!searchQuery.trim() || !input.trim()) return;
    
        try {
            await addBrands(searchQuery, input);
            window.location.reload();
        } catch (error) {
            console.error('Error adding brand:', error);
        }
    }
       
    
    return (
        <div>
            <div>
                <form onSubmit={handleSubmit}>
                    <input value={searchQuery} onChange={(e) => {setSearchQuery(e.target.value)}} className={`search ${addActive ? "active" : ""}`} type='text' placeholder='Add Brand Name...'>

                    </input>
                    <input value={input} onChange={(e) => {setInput(e.target.value)}} className={`search2 ${addActive ? "active" : ""}`} type='text' placeholder='Add Logo URL...'>

                    </input>
                    
                    <button type='submit' className={`add-brand ${addActive ? "active" : ""}`}><p>Add Brand</p></button>
                </form>
            </div>
            <div className='add' onClick={toggleMenu}>
                <h3 className={`btn ${addActive ? "active" : ""}`}>
                    +
                </h3>
            </div>
            <div className='home'>
                <div className='movies-grid'>
                    {brands.map((brand) => <Models brand={brand} key={brand.id}/>)}
                </div>
            </div>
        </div>
    )
}

export default Models