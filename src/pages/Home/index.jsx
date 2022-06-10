
import RentalListing from "../../components/RentalListing";
import BannerHeaderHome from '../../components/Banner/bannerHeaderHome';
import {useEffect, useState} from 'react'
import rentals from '../../local-json/rentals.json'

function Home() {
    const [datas, setDatas] = useState(null)

    useEffect(() => {
        setDatas(rentals)
    }, [])

    console.log(datas)


return (
    <div className="App">
        <main>
            <BannerHeaderHome />
            <RentalListing  datas={datas}/>
        </main>
    </div>
);
}

export default Home;
