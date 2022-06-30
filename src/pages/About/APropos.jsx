
import BannerHeaderAPropos from "../../components/Banner/bannerHeaderAPropos";
import React from "react";
import Fiabilite from "../../components/APropos/fiabilite"
import Respect from "../../components/APropos/respect"
import Service from "../../components/APropos/service"
import Responsabilite from "../../components/APropos/responsabilite"

function APropos() {
return (
    <div className="a-propos">
        <div>
            <BannerHeaderAPropos />
        </div>
        <div>
            <Fiabilite/>
            <Respect />
            <Service />
            <Responsabilite />
        </div>
        
    </div>
);
}

export default APropos;
