import './App.css';
import { Routes, Route } from "react-router-dom"
import { LandingPage } from './pages/LandingPage';
import { VehicleFleet } from './pages/VehicleFleet';
import { Analytics } from './pages/Analytics';
import { Drivers } from './pages/Drivers';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/VehicleFleet" element={<VehicleFleet />} />
      <Route path="/Analytics" element={<Analytics />} />
      <Route path="/Drivers" element={<Drivers />} />
    </Routes>
  );
}

export default App;
