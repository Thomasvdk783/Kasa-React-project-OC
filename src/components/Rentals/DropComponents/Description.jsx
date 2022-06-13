import React from 'react';
import { useState, useEffect } from 'react';

function Description(props) {
    const idDescription = window.location.href.split("-").slice(-1);
    // const resultDescription = props.datas.filter((data) => data.id === idDescription[0]);

    const [accordeonDescription, setAccordeon] = useState(false)
    const handleDisplayAccordeon = () => {
        setAccordeon(!accordeonDescription)
    }

    return (
        <div>
            <div onClick={handleDisplayAccordeon} id="accordeon-description" className="accordeon-description">
                <h3 className="title-description">Description</h3>
            </div>
            {accordeonDescription &&
                <div className="reponse-description">
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos quibusdam adipisci iure vitae praesentium perspiciatis quisquam omnis, iusto commodi placeat ipsa quis pariatur iste doloremque! Vero laboriosam consequatur qui ullam.</p>
                </div> 
            }
            
            {/* {resultDescription.map(({description}) => (
                <div className="reponse-description">
                    <p>{description}</p>
                </div>  
            ))} */}
            
        </div>
    )
}

export default Description