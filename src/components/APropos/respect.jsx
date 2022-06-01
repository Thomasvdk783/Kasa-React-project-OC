import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Respect() {
    return (
        <div className="conatiner-a-propos">
            <div id="accordeon-respect" className="accordeon-respect">
                <h3>Respect</h3>
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </div>
            <div className="reponse-respect">
                <p>Le bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
        </div>
    );
    }
    
    export default Respect;