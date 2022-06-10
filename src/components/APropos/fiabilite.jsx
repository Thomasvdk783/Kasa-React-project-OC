import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState} from 'react'


function Fiabilite() {

    const [accordeon, setAccordeon] = useState(false)
    const handleDisplayAccordeon = () => {
        setAccordeon(!accordeon)
    }

    return (

        <div className="conatiner-a-propos">
                <div id="accordeon-fiabilite" className="accordeon-fiabilite" onClick={handleDisplayAccordeon}>
                <h3 className="title-h3-a-propos">Fiabilité</h3>
                {/* <FontAwesomeIcon icon="fa-solid fa-chevron-down" /> */}
            </div>
            {accordeon &&
            <div className="reponse-fiabilite">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées pas nos équipes.</p>
            </div>}
        </div>
    );
    }
    
    export default Fiabilite;