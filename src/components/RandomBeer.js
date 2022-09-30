import { useEffect, useState } from "react";

import axios from "axios";
import Header from "./Header";




function RandomBeer() {
    const [randomBeer, setRandomBeer] = useState(null);

    useEffect(() => {
        // fetch(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`)
        //     .then(res => res.json())
        //     .then(json => setApartmentObject(json))
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/random`)
                .then(res => setRandomBeer(res.data))
                .catch(err => console.log(err))
    }, [])

    return (
        
        <div>
            <Header></Header>
            {randomBeer ? (
                <div>
                    <img src={randomBeer.image_url} alt={randomBeer.name} height={100}></img>
                    <div>
                        <h1>{randomBeer.name}</h1>
                        <p>{randomBeer.attenuation_level}</p>
                    </div>
                    
                    <div>
                        <p>{randomBeer.tagline}</p>
                        <p>{randomBeer.first_brewed}</p>
                    </div>
                    <p>{randomBeer.description}</p>
                    <p>{randomBeer.contributed_by}</p>
                </div>
            ): (
                <h1>No data</h1>
            )}
        </div>
    );
}

export default RandomBeer;