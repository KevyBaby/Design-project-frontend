import React from "react"
import { Link } from "react-router-dom"
import "../pages/LandingPage.css"
import { AiFillCar } from "react-icons/ai";
import { BiDollar } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { SiGoogleanalytics } from "react-icons/si";
import { GiSteeringWheel } from "react-icons/gi";
import { BsFillLightningChargeFill } from "react-icons/bs";

export const LandingPage = () => {
    return (
        <React.Fragment>
            <div className="layout">
                <header className="header-style">
                    <p className="header-text">TRANSPORT SYSTEM</p>
                </header>
                <main className="nav-stack">
                    <nav className="nav-layout">
                        <div className="navstack-layout">
                            <div className="link">
                                <Link to="/VehicleFleet">
                                    <AiFillCar className="icon" />
                                    <br />
                                    <p className="nav-text">Vehicle Fleet</p>
                                </Link>
                            </div>
                            <div className="link">
                                <Link to="/EnergyConsumption">
                                    <BsFillLightningChargeFill className="icon" />
                                    <br />
                                    <p className="nav-text">Energy Consumption</p>
                                </Link>
                            </div>
                            <div className="link">
                                <Link to="/Analytics">
                                    <SiGoogleanalytics className="icon" />
                                    <br />
                                    <p className="nav-text"> Analytics</p>
                                </Link>
                            </div>
                        </div>
                        <div className="navstack-layout">
                            <div className="link">
                                <Link to="/EnergyCosts">
                                    <BiDollar className="icon" />
                                    <br />
                                    <p className="nav-text">Energy Costs</p>
                                </Link>
                            </div>
                            <div className="link">
                                <Link to="/Drivers">
                                    <GiSteeringWheel className="icon" />
                                    <br />
                                    <p className="nav-text"> Drivers</p>
                                </Link>
                            </div>
                            <div className="link">
                                <Link to="/MapRoutes">
                                    <FaMapMarkerAlt className="icon" />
                                    <br />
                                    <p className="nav-text">MapRoutes</p>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </main>
                <footer>
                    Social media links here
                </footer>
            </div>
        </React.Fragment>
    )
}
