import React from 'react';
import ArrowDown from '../../medias/ArrowDown.svg'
import ArrowUp from '../../medias/ArrowUp.svg'
import { useEffect, useState} from 'react'

function Service() {
    const [accordeonService, setAccordeonService] = useState(false)
    const handleDisplayAccordeonService = () => {
        setAccordeonService(!accordeonService)
    }

    return (
        <div className="conatiner-a-propos">
            <div id="accordeon-service" className="accordeon-service" onClick={handleDisplayAccordeonService}>
                <h3 className="title-h3-a-propos">Service</h3>
                <img alt="arrow-down" src={ArrowDown} className="arrow-down"/>
            </div>
            {accordeonService &&
                <div className="reponse-service">
                    <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
                </div>
            }
            
        </div>
    );
    }
    
    export default Service;