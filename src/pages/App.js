
import { Routes, Route } from "react-router-dom"
import APropos from "./About/APropos"
import Home from "./Home/index"
import Header from '../components/Header'
import Footer from '../components/Footer'
import Error from './Error/error'
import Rentals from './Rentals/rentals'

function App() {
  return (
    <div className="App">
      <div>
        <Header />
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/APropos" element={<APropos />} />
            <Route path="*" element={<Error />} />
            <Route path="/Rentals/:id" element={<Rentals />}></Route>
        </Routes>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
