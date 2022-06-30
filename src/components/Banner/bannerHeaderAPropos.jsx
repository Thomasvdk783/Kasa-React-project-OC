// KASA app ///

import React from "react";
import bannerApropos from "../../medias/bannerApropos.png";

function BannerHeaderAPropos() {
return (
    <div className='kasa-header-section2'>
        <figure className="figure-banner-a-propos">
            <img src={bannerApropos} className="kasa-banner-a-propos" alt="Banner"/>
        </figure>
    </div>
);
}

export default BannerHeaderAPropos;
