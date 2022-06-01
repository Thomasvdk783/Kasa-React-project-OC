// / Header KASA app ///

import React from "react";
import MaskGroup from "../../medias/MaskGroup.jpg";

function BannerHeaderHome() {
  return (
      <div className='kasa-header-section2'>
        <figure>
          <img src={MaskGroup} className="kasa-img-header" />
          <h1 className='kasa-title-header'>Chez vous, partout ailleurs</h1>
        </figure>
      </div>
  );
}

export default BannerHeaderHome;
