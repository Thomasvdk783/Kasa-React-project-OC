// KASA app ///

import React from "react";
import bannerApropos from "../../medias/bannerApropos.png";

function BannerHeaderAPropos() {
return (
    <div className='kasa-header-section2'>
        <figure>
            <img src={bannerApropos} className="kasa-banner-a-propos" />
        </figure>
    </div>
);
}

export default BannerHeaderAPropos;
