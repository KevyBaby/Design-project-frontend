import "./EnergyConsumption.css"
import { Header } from "../Components/Header"
import { StatsCard } from "../Components/StatsCard"
import { BarChart } from "../Components/BarChart"
import { Database } from "../Api/Database"
import { LineChart } from "../Components/LineChart"

export const EnergyConsumption = () => {
    return (
        <>
            <Header title="Energy Consumption" link="tab" />
            <div className="Body">
                <div className="statsCard-body">
                    {
                        Database.map((User) => {
                            return (
                                <StatsCard
                                    key={User?.id}
                                    type="consumption"
                                    style="gold"
                                    driverName={User?.personalInfo?.eamil}
                                    vehicleModel={User?.vehicleInfo?.vehicleModel}
                                    vehicleModelYear={User?.vehicleInfo?.modelYear}
                                    fuelConsumption={User?.analytics?.fuelConsumption}
                                    behaviour={User?.analytics?.behaviour}
                                    energyConsumption={User?.analytics?.energyConsumption}
                                    travelStart={User?.analytics?.travelstart}
                                    travelStop={User?.analytics?.travelend}
                                    totalDisplacement={User?.analytics?.totaldisplacement}
                                    channelID={User?.analytics?.channelId}
                                    averageSpeed={User?.analytics?.averageSpeed}
                                />
                            )
                        })
                    }
                </div>
                <div className="stats-chart">
                    <BarChart />
                    <LineChart
                        type="consumption"
                        title="Energy Consumption"
                        vehicleModel={Database[0]?.vehicleInfo?.vehicleModel}
                        speed={Database[0]?.analytics?.rawspeed}
                        displacement={Database[0]?.analytics?.Displacement}
                        date={Database[0]?.analytics?.Date}
                    />
                </div>
            </div>
        </>
    )
}