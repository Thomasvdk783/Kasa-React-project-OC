/// Card rental item ///

import React, {Fragment, useState, useEffect } from "react";
import rentals from '../local-json/rentals.json';
import {Route, Link, Routes, useParams} from 'react-router-dom';




function RentalItem() { 
  const params = useParams();

  console.log(params)

  return (
    <div className="div-card-list">
      {
          rentals && rentals.map(({ id, title, cover }) =>(
            <Link  to={`/Rentals/${id}`}>
              <article src="" key={id} className="kasa-card-item">
                <h4 className="title-item">{title}</h4>
                <img className="cover-img" src={cover} />
              </article>
            </Link>
          ))
        }
    </div>
  );
}


export default RentalItem;
