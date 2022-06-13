/// Listing rental Kasa ///

import RentalItem from "./RentalItem";

function RentalListing(props) {
  // console.log(props)
  return (
    <div>
      <section className="kasa-container-rental-listing">
        <RentalItem datas={props.datas}/>
      </section>
    </div>
  );
}

export default RentalListing;
