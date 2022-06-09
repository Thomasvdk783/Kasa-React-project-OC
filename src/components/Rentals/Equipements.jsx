import React from 'react';
import rentals from '../../local-json/rentals.json'

function Equipements() {
    // const id = window.location.href.split("-").slice(-1);
    // const result = rentals.filter((rental) => rental.id === id[0]);

    return (
        <div className="component-equipement">
            <div id="accordeon-equipements" className="accordeon-equipements">
                <h3 className="title-equipements">Equipements</h3>
            </div>
            <div className="reponse-equipements">
            {/* {result.map(({equipements}) => (
                <ul className="ul-equipements">
                    <li>{equipements}</li>
                </ul>
            ))} */}
            </div>
        </div>
    )
}

export default Equipements