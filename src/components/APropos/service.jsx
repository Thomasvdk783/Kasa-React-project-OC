import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Service() {
    // var acc = document.getElementsByClassName("accordeon-service");
    // var i;

    // for (i = 0; i < acc.length; i++) {
    //     acc[i].addEventListener("click", function() {
    //       this.classList.toggle("active");
    //       var accordeonSservice = this.nextElementSibling;
    //       if (accordeonSservice.style.display === "block") {
    //         accordeonSservice.style.display = "none";
    //       } else {
    //         accordeonSservice.style.display = "block";
    //       }
    //     });
    //   }

    return (
        <div className="conatiner-a-propos">
            <div id="accordeon-service" className="accordeon-service">
                <h3 className="title-h3-a-propos">Service</h3>
                <FontAwesomeIcon icon="fa-solid fa-chevron-down" />
            </div>
            <div className="reponse-service">
                <p>Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.</p>
            </div>
        </div>
    );
    }
    
    export default Service;