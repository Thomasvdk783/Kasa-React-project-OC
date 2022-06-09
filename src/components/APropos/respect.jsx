import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Respect() {
    // var acc = document.getElementsByClassName("accordeon-respect");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function() {
    //       this.classList.toggle("active");
    //       var accordeonRespect = this.nextElementSibling;
    //       if (accordeonRespect.style.display === "block") {
    //         accordeonRespect.style.display = "none";
    //       } else {
    //         accordeonRespect.style.display = "block";
    //       }
    //     });
    //   }

    return (
        <div className="conatiner-a-propos">
            <div id="accordeon-respect" className="accordeon-respect">
                <h3 className="title-h3-a-propos">Respect</h3>
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </div>
            <div className="reponse-respect">
                <p>Le bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.</p>
            </div>
        </div>
    );
    }
    
    export default Respect;