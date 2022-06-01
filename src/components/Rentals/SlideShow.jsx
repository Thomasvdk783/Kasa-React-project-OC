import React from 'react';
import rentals from '../../local-json/rentals.json';
import {Route, Link, Routes, useParams} from 'react-router-dom';

function SlideShow() {
    
    
    let rentalsData = rentals;
    // Si l'id de la page correspond 
    const params = useParams();

    console.log(rentalsData.includes(params))
    

    return (
        <div className="slideshow-container">
                <div>
                    <h1>{params.id}</h1>
                </div>
        </div>
    )
}

export default SlideShow