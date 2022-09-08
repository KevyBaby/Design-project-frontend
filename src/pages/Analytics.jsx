import { Link } from "react-router-dom"
import React from "react"
import { BiDollar, BiHome } from "react-icons/bi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { BsFillLightningChargeFill } from "react-icons/bs";
import "./Analytics.css"

export const Analytics = () => {
    return (
        <React.Fragment>

            <div className="layout">
                <header className="header-style">
                    <p className="header-text">ANALYTICS</p>
                </header>
                <main className="nav-stack">
                    <nav className="nav-layout">
                        <div className="navstack-layout">
                            <div className="link">
                                <Link to="/EnergyCosts">
                                    <BiDollar className="icon" />
                                    <br />
                                    <p className="nav-text">Costs</p>
                                </Link>
                            </div>
                            <div className="link">
                                <Link to="/EnergyConsumption">
                                    <BsFillLightningChargeFill className="icon" />
                                    <br />
                                    <p className="nav-text">Consumption</p>
                                </Link>
                            </div>
                            <div className="link">
                                <Link to="/MapRoutes">
                                    <FaMapMarkerAlt className="icon" />
                                    <br />
                                    <p className="nav-text">Map Routes</p>
                                </Link>
                            </div>
                            <div className="link">
                                <Link to="/">
                                    <BiHome className="icon" />
                                    <br />
                                    <p className="nav-text">Home</p>
                                </Link>
                            </div>
                        </div>
                    </nav>
                </main>
            </div>
        </React.Fragment>
    )
}