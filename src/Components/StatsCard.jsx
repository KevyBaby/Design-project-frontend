import "./StatsCard.css"

export const StatsCard = (props) => {
    return (
        <>
            <div className="card" style={{
                backgroundColor: `${props.behaviour === "Aggressive" ? "orange" : props.style}`
            }}>
                <div className="container">
                    <div>
                        <p><b>Email: </b>{props.driverName}</p>
                    </div>
                    <div>
                        <p><b>Model: </b>{props.vehicleModel} </p>
                        <p><b>Year: </b>{props.vehicleModelYear}</p>
                    </div>
                    <div><hr />
                        {props.type === "consumption" && (
                            <>
                                <p><b>Travel Start:</b>{props.travelStart}</p>
                                <p><b>Travel Stop:</b>{props.travelStop}</p>
                            </>
                        )}
                        <p><b>Driving Style:</b> {props.behaviour}</p>
                        {props.type === "consumption" && (
                            <>
                                <p><b>Total Displacement: </b>{props.totalDisplacement}</p>
                                <p><b>Average Speed:</b>{props.averageSpeed}</p>
                            </>
                        )}

                        {props.type === "consumption" && (
                            <>
                                <p><b>Fuel Consumption:</b> {props.fuelConsumption}</p>
                                <p><b>Energy Consumption:</b> {props.energyConsumption}</p>
                            </>
                        )}

                        {props.type === "cost" && (
                            <>
                                <p><b>Fuel Cost: </b> {props.feulCosts}</p>
                                <p><b>Energy Cost: </b> {props.energyConsumption}</p>
                            </>
                        )}

                    </div>
                </div>
            </div>
        </>
    )
}