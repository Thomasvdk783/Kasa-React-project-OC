import React from "react";

function SlideShow(props) {
  // console.log("ok pour props", props)
  // const datasRental = props.datasRentals

  // const id = window.location.href.split("-").slice(-1);
  // const result = datasRental.filter((data) => data.id === id[0]);
  

  return (
    <div className="slideshow-container">
      <div>
        {/* {
          result.map(({pictures}) => (
            <img key={pictures.id} className="img-slide-show" src={pictures[2]} />
          ))
        } */}
      </div>
    </div>
  );
}

export default SlideShow;
