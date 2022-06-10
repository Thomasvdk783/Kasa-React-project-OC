import React from 'react';
import { useEffect, useState} from 'react'


function Equipements(props) {
    const datasEquipements = props.datas

    // const id = window.location.href.split("-").slice(-1);
    // const result = datasEquipements.filter((data) => data.id === id[0]);
    // console.log(result);



    return (
        <div className="component-equipement">
            <div id="accordeon-equipements" className="accordeon-equipements">
                <h3 className="title-equipements">Equipements</h3>
            </div>
            <div className="reponse-equipements">

            </div>
        </div>
    )
}

export default Equipements