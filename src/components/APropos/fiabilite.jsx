import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'



function Fiabilite() {
    var acc = document.getElementsByClassName("accordeon-fiabilite");
    var i;

    for (i = 0; i < acc.length; i++) {
        acc[i].addEventListener("click", function() {
            console.log("clic ok")
          this.classList.toggle("active");
          var reponseFiabilite = this.nextElementSibling;
          if (reponseFiabilite.style.display === "block") {
            reponseFiabilite.style.display = "none";
          } else {
            reponseFiabilite.style.display = "block";
          }
        });
      }

    return (
        <div className="conatiner-a-propos">
            <div id="accordeon-fiabilite" className="accordeon-fiabilite">
                <h3 className="title-h3-a-propos">Fiabilité</h3>
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </div>
            <div className="reponse-fiabilite">
                <p>Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées pas nos équipes.</p>
            </div>
        </div>
    );
    }
    
    export default Fiabilite;