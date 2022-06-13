import React from "react";
import rentals from "../../local-json/rentals.json";
import SlideShow from "../../components/Rentals/SlideShow";
import DropComponents from "../../components/Rentals/DropComponents";
import Tags from "../../components/Rentals/Tags";
import { useState, useEffect } from 'react';

function Rentals() {
  const [datasRentals, setDatasRentals] = useState(null)

  useEffect(() => {
    setDatasRentals(rentals)
  }, [])

  const id = window.location.href.split("-").slice(-1);
  const result = rentals.filter((rental) => rental.id === id[0]);



  return (
    <div className="container-rentals-page">
      {result.map(({ title, id , location, host }) => (
        <div key={id}>
          <SlideShow datas={datasRentals}/>
          <div className="header-profil-rental">
            <section className="left-content-profil-rental">
                <h2 className="title-rental">{title}</h2>
                <h4 className="location-rental">{location}</h4>
                <Tags datas={datasRentals}/>
            </section>
            <section className="right-content-profil-rental">
              <div className="container-profil-host">
                <h3 className="host-name">{host.name}</h3>
                <figure>
                  <img className="img-host" src={host.picture} alt="" />
                </figure>
                
              </div>
              
              <ul>
                <li>stars</li>
              </ul>
            </section>
          </div>
          <section>
            <DropComponents datas={datasRentals} />
          </section>
        </div>
      ))}
    </div>
  );
}

export default Rentals;
