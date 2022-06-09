import React from 'react';
import rentals from '../../local-json/rentals.json'

function Description() {
    // const id = window.location.href.split("-").slice(-1);
    // const result = rentals.filter((rental) => rental.id === id[0]);

    return (
        <div>
            <div id="accordeon-description" className="accordeon-description">
                <h3 className="title-description">Responsabilite</h3>
            </div>
            {/* {result.map(({description}) => (
                <div className="reponse-description">
                    <p>{description}</p>
                </div>
            ))} */}
            
        </div>
    )
}

export default Description