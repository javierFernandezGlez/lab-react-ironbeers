import {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import axios from "axios";
import Header from './Header';

function Beers() {

    const [beersArray, setBeersArray] = useState([]);

    const [filteredArray, setFilteredArray] = useState([]);

    const [search, setSearch] = useState("");

    useEffect(() => {
        // fetch('https://ironbnb-m3.herokuapp.com/apartments')
        //     .then(res => res.json())
        //     .then(json => setApartmentArray(json))
        axios.get('https://ih-beers-api2.herokuapp.com/beers')
            .then(function(res) {
                setBeersArray(res.data);
                setFilteredArray(res.data);
                console.log(res.data);
            }   
        )
    }, []);

    const updateFilteredArray = e => {
        console.log(e.target.value)
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${e.target.value}`)
            .then(function(res) {
                setFilteredArray(res.data);
                console.log(res.data);
            }   
        )
    };

    return (
        <div>
            <Header/>
            <div className="search">
                    <label><b>Search Beer</b></label>
                    <input type="text" onChange={updateFilteredArray}></input>
            </div>
            {filteredArray.map(singleBeer => {
                return (
                    <div>
                    <Link to={`/beer-details/${singleBeer._id}`}>
                        
                        <h3>{singleBeer.name}</h3>
                        
                    </Link>
                    <img src={singleBeer.image_url} alt={singleBeer.name} height={100}></img>
                        <p>{singleBeer.tagline}</p>
                        <h5>{singleBeer.contributed_by}</h5>
                    </div>
                )
            })}
        </div>
    );
}

export default Beers;