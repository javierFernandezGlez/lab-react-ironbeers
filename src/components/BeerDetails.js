import { useParams } from "react-router-dom";

import { useEffect, useState } from "react";

import axios from "axios";
import Header from "./Header";


function BeerDetails() {

    const {singleBeerId} = useParams();

    const [beerObject, setBeerObject] = useState(null);

    useEffect(() => {
        // fetch(`https://ironbnb-m3.herokuapp.com/apartments/${apartmentId}`)
        //     .then(res => res.json())
        //     .then(json => setApartmentObject(json))
        axios.get(`https://ih-beers-api2.herokuapp.com/beers/${singleBeerId}`)
                .then(res => setBeerObject(res.data))
                .catch(err => console.log(err))
    }, [singleBeerId])

    return (
        
        <div>
            <Header></Header>
            {beerObject ? (
                <div>
                    <img src={beerObject.image_url} alt={beerObject.name} height={100}></img>
                    <div>
                        <h1>{beerObject.name}</h1>
                        <p>{beerObject.attenuation_level}</p>
                    </div>
                    
                    <div>
                        <p>{beerObject.tagline}</p>
                        <p>{beerObject.first_brewed}</p>
                    </div>
                    <p>{beerObject.description}</p>
                    <p>{beerObject.contributed_by}</p>
                </div>
            ): (
                <h1>No data</h1>
            )}
        </div>
    );
}

export default BeerDetails;