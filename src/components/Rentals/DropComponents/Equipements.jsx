import React from 'react';
import { useState} from 'react'


function Equipements(props) {
    const idEquipments = window.location.href.split("-").slice(-1);
    const resultEquipements = props.datas.filter((data) => data.id === idEquipments[0]);

    const [accordeonEquipements, setAccordeon] = useState(false)
    const handleDisplayAccordeon = () => {
        setAccordeon(!accordeonEquipements)
    }

    return (
        <div className="component-equipement">
            <div onClick={handleDisplayAccordeon} id="accordeon-equipements" className="accordeon-equipements">
                <h3 className="title-equipements">Equipements</h3>
            </div>
            {resultEquipements.map(({equipments}) => (
                    <ul>
                        <li>{equipments}</li>
                    </ul> 
            ))}
        </div>
    )
}

export default Equipements