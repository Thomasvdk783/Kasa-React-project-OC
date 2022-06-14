import React from "react"
import { useState } from "react";
import ArrowLeft from '../../medias/ArrowLeft.svg'
import ArrowRight from '../../medias/ArrowRight.svg'

function SlideShow(props) {
  const id = window.location.href.split("-").slice(-1);
  const result = props.datas && props.datas.filter((data) => data.id === id[0]);
  const [picturesIndex, setPictureIndex] = useState(0)

  

  // step 1 : add onclick on arrow
  // step 2 : onclick call function
  // step 3 : décrémenter le picturesIndex dans une function
  // step 4: inrémenter le picturesIndex dans une autre function
  const [current, setCurrent] = useState(0)
  const length = picturesIndex.length;
  
  function nextPicture () {
    // alert('Hello dear friend !')
    setCurrent(current === length - 1 ? 0 : current + 1);
  }

  function previousPicture () {
    // alert('Welcome back dear friend !')
    setCurrent(current === 0 ? length -1 : current - 1);
  }


  // if(!Array.isArray(picturesIndex) || picturesIndex.length <= 0) {
  //   return null;
  // }

  

  return (
    <div>
      <div className="slideshow-container">
        <div className="container-arrows">
          <img onClick={previousPicture} className="arrow-left arrow" src={ArrowLeft} alt="arrow left slideshow"/>
          <img onClick={nextPicture} className="arrow-right arrow" src={ArrowRight} alt="arrow right slideshow" />
        </div>
        {
          result && result.map(({pictures, title, id}) => 
              <img key={id} alt={title} className="img-slide-show" src={pictures[picturesIndex]} />
        )}
      </div>
    </div>
  );
}

export default SlideShow;
