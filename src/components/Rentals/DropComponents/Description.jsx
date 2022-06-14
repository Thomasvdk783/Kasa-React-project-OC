import React from 'react';
import { useState } from 'react';
import ArrowDown from '../../../medias/ArrowDown.svg'
import ArrowUp from '../../../medias/ArrowUp.svg'

function Description(props) {
    const idDescription = window.location.href.split("-").slice(-1);
    const result = props.datas && props.datas.filter((data) => data.id === idDescription[0]);

    const [accordeonDescription, setAccordeon] = useState(false)
    const handleDisplayAccordeon = () => {
        setAccordeon(!accordeonDescription)
    }

    const [showArrowUp, setShowArrowUp] = useState(true)
    const handleDisplayArrowUp = () => {
        setShowArrowUp(!showArrowUp)
    }

    return (
        <div>
            <div onClick={handleDisplayAccordeon} id="accordeon-description" className="accordeon-description">
                <h3 className="title-description">Description</h3>
                <img alt="arrow-down" src={ArrowDown} className="arrow-down"/>
            </div>
            {accordeonDescription &&
                <div className="reponse-description">
                    {result && result.map(({description, id}) => (
                        <p key={id}>{description}</p>
                    ))}
                </div>  
            }            
        </div>
    )
}

export default Description