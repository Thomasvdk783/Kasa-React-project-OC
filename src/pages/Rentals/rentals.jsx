import React from "react";
import rentals from "../../local-json/rentals.json";
import SlideShow from "../../components/Rentals/SlideShow";
import Description from "../../components/Rentals/Description";
import Equipements from "../../components/Rentals/Equipements";

function Rentals() {
  // const params = useParams();
  const id = window.location.href.split("-").slice(-1);
  const result = rentals.filter((rental) => rental.id === id[0]);
  console.log(result);

  return (
    <div className="container-rentals-page">
      {result.map(({ title, location }) => (
        <div>
          <SlideShow />
          <div>
            <section>
                <h2 className="title-rental">{title}</h2>
                <h4 className="location-rental">{location}</h4>
            {/* composant */}
              <ul>
                <li>Cozy</li>
                <li>Canal</li>
                <li>Paris 10</li>
              </ul>
            {/* composant */}
            </section>
            <h3>Alexandre Dumas</h3>
            <figure>
              <img src="" alt="" />
            </figure>
            <ul>
              <li>stars</li>
              <li>stars</li>
              <li>stars</li>
              <li>stars</li>
              <li>stars</li>
            </ul>
            <section>
              <Description />
              <Equipements />
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rentals;
