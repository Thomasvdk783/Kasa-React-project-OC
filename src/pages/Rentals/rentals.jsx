import React from "react";
import rentals from "../../local-json/rentals.json";
import SlideShow from "../../components/Rentals/SlideShow";
import DropComponents from "../../components/Rentals/DropComponents";
import { useState, useEffect } from 'react';

function Rentals() {
  const [datas, setDatas] = useState(null)

  useEffect(() => {
    setDatas(rentals)
  }, [])


  // const params = useParams();
  const id = window.location.href.split("-").slice(-1);
  const result = rentals.filter((rental) => rental.id === id[0]);

  return (
    <div className="container-rentals-page">
      {result.map(({ title, location, host }) => (
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
            <h3 className="host-name">{host.name}</h3>
            <figure>
              <img src={host.picture} alt="" />
            </figure>
            <ul>
              <li>stars</li>
              <li>stars</li>
              <li>stars</li>
              <li>stars</li>
              <li>stars</li>
            </ul>
            <section>
              <DropComponents datas={datas} />
            </section>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Rentals;
