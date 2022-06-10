/// Card rental item ///

import React, {Fragment, useState, useEffect } from "react";
import {Route, Link, Routes, useParams} from 'react-router-dom';




function RentalItem(props) { 

  return (
    <div className="div-card-list">
      {
          props.datas && props.datas.map(({ id, title, cover }) =>(
            <Link  key={id} to={`/Rentals/${title.split(' ').join('-')}-${id}`}>
              <article src="" className="kasa-card-item">
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
