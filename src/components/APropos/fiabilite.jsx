import React from 'react';
import { useEffect, useState} from 'react'
import ArrowDown from '../../medias/ArrowDown.svg'
import ArrowUp from '../../medias/ArrowUp.svg'

function Fiabilite() {

    const [accordeon, setAccordeon] = useState(false)
    const handleDisplayAccordeon = () => {
        setAccordeon(!accordeon)
    }

    return (

        <div className="conatiner-a-propos">
                <div id="accordeon-fiabilite" className="accordeon-fiabilite" onClick={handleDisplayAccordeon}>
                <h3 className="title-h3-a-propos">Fiabilité</h3>
                <img alt="arrow-down" src={ArrowDown} className="arrow-down"/>
            </div>
            {accordeon &&
            <div className="reponse-fiabilite">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées pas nos équipes.</p>
            </div>}
        </div>
    );
    }
    
    export default Fiabilite;