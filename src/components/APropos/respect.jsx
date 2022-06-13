import React from 'react';
import ArrowDown from '../../medias/ArrowDown.svg'
import ArrowUp from '../../medias/ArrowUp.svg'
import { useEffect, useState} from 'react'



function Respect() {
    
    const [accordeonRespect, setAccordeonRespect] = useState(false)
    const handleDisplayAccordeonRespect = () => {
        setAccordeonRespect(!accordeonRespect)
    }

    return (
        <div className="conatiner-a-propos">
            <div id="accordeon-respect" onClick={handleDisplayAccordeonRespect} className="accordeon-respect">
                <h3 className="title-h3-a-propos">Respect</h3>
                <img alt="arrow-down" src={ArrowDown} className="arrow-down"/>
            </div>
            {accordeonRespect && 
                <div className="reponse-respect">
                    <p>Le bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
                </div>
            }
        </div>
    );
    }
    
    export default Respect;