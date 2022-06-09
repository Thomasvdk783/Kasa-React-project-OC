import React from "react";
import rentals from "../../local-json/rentals.json";
import { Route, Link, Routes, useParams } from "react-router-dom";

function SlideShow() {
  // const params = useParams();
  const id = window.location.href.split("-").slice(-1);

  // comparer rental avec l'id de la page
  // retrenscire la data
  const result = rentals.filter((rental) => rental.id === id[0]);
  console.log(result)

  return (
    <div className="slideshow-container">
      <div>
        {
          result.map(({pictures}) => (
            <img className="img-slide-show" src={pictures[2]} />
          ))
        }
      </div>
    </div>
  );
}

export default SlideShow;
