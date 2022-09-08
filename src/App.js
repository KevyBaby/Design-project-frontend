import './App.css';
import { Routes, Route } from "react-router-dom"
import { LandingPage } from './pages/LandingPage';
import { VehicleFleet } from './pages/VehicleFleet';
import { EnergyConsumption } from './pages/EnergyConsumption';
import { Analytics } from './pages/Analytics';
import { MapRoutes } from './pages/MapRoutes';
import { Drivers } from './pages/Drivers';
import { EnergyCosts } from './pages/EnergyCosts';

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/VehicleFleet" element={<VehicleFleet />} />
      <Route path="/EnergyConsumption" element={<EnergyConsumption />} />
      <Route path="/Analytics" element={<Analytics />} />
      <Route path="/MapRoutes" element={<MapRoutes />} />
      <Route path="/Drivers" element={<Drivers />} />
      <Route path="/EnergyCosts" element={<EnergyCosts />} />
    </Routes>
  );
}

export default App;
