import { Link } from "react-router-dom"
import "./Analytics.css"
import { ElectricVehicleEnergyConsumption } from "../components/ElectricVehicles"
import { ElectricVehiclesEnergyCosts } from "../components/ElectricVehicleCosts"
import { MapRoutes } from "../components/MapRoutes";
import { BsArrowLeft } from "react-icons/bs";
import {AnalyticsCards} from "../components/AnalyticsCards"
import {data} from "../data/energy"
console.log(data)

export const Analytics = () => {
  return (
    <div className="container">
      <header className="header-style">
        <Link to="/">
          <div className="back-button">
            <BsArrowLeft />
          </div>
        </Link><br />
        <h2>Analytics</h2>
      </header>
      <main>
        <div className="cards-layout">
          <AnalyticsCards style="#9b19f5" heading="Energy Consumption" stats={data[0].energyConsumption} />
          <AnalyticsCards style="#27aeef" heading="Total Displacement" stats={data[0].totaldisplacement} />
          <AnalyticsCards style="#b3d4ff" heading="Average Travel Speed" stats={data[0].averageSpeed} />
          <AnalyticsCards style="#115f9a" heading="Feul Consumption" stats={data[0].fuelConsumption} />
        </div>
        <div className="graph-layout">
          <ElectricVehicleEnergyConsumption />
          <ElectricVehiclesEnergyCosts />
        </div>
        <div className="map-layout">
          <MapRoutes />
        </div>
      </main>
    </div>

  )
}