import React from 'react';
import rentals from '../../local-json/rentals.json';
import {Route, Link, Routes, useParams} from 'react-router-dom';

function SlideShow() {
    const params = useParams();

    console.log(params);
    
    let rentalsData = rentals;
    console.log(rentalsData);

    const id = window.location.search.split('id=')[1];
    const rentalsItems = !id ? rentalsData : rentalsData.filter(rental => rental.id === id);

    return (
        <div className="slideshow-container">
                <div>
                    <h1>{params.id}</h1>
                </div>
        </div>
    )
}

export default SlideShow