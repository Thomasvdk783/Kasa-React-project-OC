/// Listing rental Kasa ///

import react from 'react'
import Description from "./DropComponents/Description";
import Equipements from "./DropComponents/Equipements";

function DropComponents(props) {
  return (
    <div className="container-drop-components">
            <Description datas={props.datas} />
            <Equipements datas={props.datas} />
    </div>
    );
}

export default DropComponents;
