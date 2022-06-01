
import RentalListing from "../../components/RentalListing";
import BannerHeaderHome from '../../components/Banner/bannerHeaderHome';

function Home() {
return (
    <div className="App">
        <main>
            <BannerHeaderHome />
            <RentalListing />
        </main>
    </div>
);
}

export default Home;
