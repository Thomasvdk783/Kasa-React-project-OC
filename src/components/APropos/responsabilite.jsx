import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Responsabilite() {
    // var acc = document.getElementsByClassName("accordeon-responsabilite");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function() {
    //       this.classList.toggle("active");
    //       var accordeonRresponsabilite = this.nextElementSibling;
    //       if (accordeonRresponsabilite.style.display === "block") {
    //         accordeonRresponsabilite.style.display = "none";
    //       } else {
    //         accordeonRresponsabilite.style.display = "block";
    //       }
    //     });
    //   }

    return (
        <div className="conatiner-a-propos">
            <div id="accordeon-responsabilite" className="accordeon-responsabilite">
                <h3 className="title-h3-a-propos">Responsabilite</h3>
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </div>
            <div className="reponse-responsabilite">
                <p>La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.</p>
            </div>
        </div>
    );
    }
    
    export default Responsabilite;