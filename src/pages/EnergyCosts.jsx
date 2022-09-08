import "./EnergyCosts.css"
import { Header } from "../Components/Header"
import { StatsCard } from "../Components/StatsCard"
import { LineChart } from "../Components/LineChart"
import { BarChart } from "../Components/BarChart"
import { Database } from "../Api/Database"

export const EnergyCosts = () => {
    return (
        <>
            <Header title="Energy Costs" link="tab" />
            <div className="Body">
                <div className="statsCard-body">
                    {
                        Database.map((User) => {
                            return (
                                <StatsCard
                                    key={User?.id}
                                    type="cost"
                                    style="gold"
                                    driverName={User?.personalInfo?.eamil}
                                    vehicleModel={User?.vehicleInfo?.vehicleModel}
                                    vehicleModelYear={User?.vehicleInfo?.modelYear}
                                    feulCosumption={User?.analytics?.fuelConsumption}
                                    feulCosts={User?.analytics?.feulCost}
                                    behaviour={User?.analytics?.behaviour}
                                    energyConsumption={User?.analytics?.energyConsumption}
                                />
                            )
                        })
                    }
                </div>
                <div className="stats-chart">
                    <LineChart
                        type="cost"
                        title="Energy Cost"
                        vehicleModel={Database?.User?.vehicleInfo?.vehicleModel}
                        speed={Database?.User?.analytics?.rawspeed}
                        displacement={Database?.User?.analytics?.Displacement}
                        date={Database?.User?.analytics?.Date}
                    />
                    <BarChart />
                </div>
            </div>
        </>
    )
}
