import React from 'react';
import ArrowDown from '../../medias/ArrowDown.svg'
import ArrowUp from '../../medias/ArrowUp.svg'
import { useEffect, useState} from 'react'

function Responsabilite() {
    const [accordeonResponsabilite, setAccordeonResponsabilite] = useState(false)
    const handleDisplayAccordeonResponsabilite = () => {
        setAccordeonResponsabilite(!accordeonResponsabilite)
    }

    return (
        <div className="conatiner-a-propos">
            <div id="accordeon-responsabilite" className="accordeon-title" onClick={handleDisplayAccordeonResponsabilite}>
                <h3 className="title-h3-a-propos">Responsabilite</h3>
                <img alt="arrow-down" src={ArrowDown} className="arrow-down"/>
            </div>
            {accordeonResponsabilite && 
                <div className="accordeon-reponse">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            }
            
        </div>
    );
    }
    
    export default Responsabilite;