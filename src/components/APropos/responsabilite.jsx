import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { useEffect, useState} from 'react'

function Responsabilite() {
    const [accordeonResponsabilite, setAccordeonResponsabilite] = useState(false)
    const handleDisplayAccordeonResponsabilite = () => {
        setAccordeonResponsabilite(!accordeonResponsabilite)
    }

    return (
        <div className="conatiner-a-propos">
            <div id="accordeon-responsabilite" className="accordeon-responsabilite" onClick={handleDisplayAccordeonResponsabilite}>
                <h3 className="title-h3-a-propos">Responsabilite</h3>
                {/* <FontAwesomeIcon icon="fa-solid fa-chevron-down" /> */}
            </div>
            {accordeonResponsabilite && 
                <div className="reponse-responsabilite">
                    <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
                </div>
            }
            
        </div>
    );
    }
    
    export default Responsabilite;