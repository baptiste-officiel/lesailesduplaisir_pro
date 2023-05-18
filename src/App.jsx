import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import PlanePage from "./pages/PlanePage";
import NavBar from "./components/Header/NavBar/NavBar";
import Footer from "./components/Footer/Footer";
import LocationPage from "./pages/LocationPage";
import FormationPage from "./pages/FormationPage";



function App() {

  return (
<>
<NavBar />
    <div className="App">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/plane" element={<PlanePage />} />
        <Route path="/location" element={<LocationPage />} />
        <Route path="/formation" element={<FormationPage />} />
      </Routes>
    </div>
    <Footer />
    </>
  )
}

export default App
