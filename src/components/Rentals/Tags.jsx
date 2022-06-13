import React from "react";

function Tags(props) {
    const idEquipments = window.location.href.split("-").slice(-1);
    const result = props.datas && props.datas.filter((dataRental) => dataRental.id === idEquipments[0]);

    return(
        <div>
            <ul className="ul-tags">
                {result && result.map(({tags}) =>(
                    tags.map((item, index) => 
                        <li className="li-tags" key={index}>{item}</li>
                    )
                ))}
            </ul>
        </div>
    )
}

export default Tags