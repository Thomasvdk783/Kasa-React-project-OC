import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Fiabilite() {
    
    const accordeon = document.getElementById("accordeon-fiabilite")
    console.log(accordeon)
    return (
        <div className="conatiner-a-propos">
            <div id="accordeon-fiabilite" className="accordeon-fiabilite">
                <h3>Fiabilité</h3>
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </div>
            <div className="reponse-fiabilite">
                <p>Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip, Lorem ipsum dolor sit amet, consectetur adip.</p>
            </div>
        </div>
    );
    }
    
    export default Fiabilite;