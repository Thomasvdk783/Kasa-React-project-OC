import React from 'react';
import { useState } from 'react'
import ArrowDown from '../../../medias/ArrowDown.svg'
import ArrowUp from '../../../medias/ArrowUp.svg'


function Equipements(props) {
    const idEquipments = window.location.href.split("-").slice(-1);
    const result = props.datas && props.datas.filter((dataRental) => dataRental.id === idEquipments[0]);


    const [accordeonEquipements, setAccordeon] = useState(false)
    const handleDisplayAccordeon = () => {
        setAccordeon(!accordeonEquipements)
    }

    return (
        <div className="component-equipement">
            <div onClick={handleDisplayAccordeon} id="accordeon-equipements" className="accordeon-equipements">
                <h3 className="title-equipements">Equipements</h3>
                <img alt="arrow-down" src={ArrowDown} className="arrow-down"/>
            </div>
                {accordeonEquipements &&
                    <ul className="reponse-equipement">
                        {result && result.map(({equipments}) => (
                            equipments.map((item, index) => 
                            <li className="li-equipments"  key={index}>{item}</li>)
                        ))}
                    </ul>
                }
        </div>
    )
}

export default Equipements