import React from "react";
import { useState } from "react";

function SlideShow(props) {

  const id = window.location.href.split("-").slice(-1);
  const result = props.datas && props.datas.filter((data) => data.id === id[0]);
  
  const [picturesIndex, setPictureIndex] = useState(0)

  // step 1 : add onclick on arrow
  // step 2 : onclick call function
  // step 3 : décrémenter le picturesIndex dans une function
  // step 4: inrémenter le picturesIndex dans une autre function

  return (
    <div className="slideshow-container">
      <div>
        {
          result && result.map(({pictures, title, id}) => 
                <img key={id} alt={title} className="img-slide-show" src={pictures[picturesIndex]} />
        )}
      </div>
    </div>
  );
}

export default SlideShow;
