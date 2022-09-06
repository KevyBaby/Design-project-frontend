import "./AnalyticsCards.css";

export const AnalyticsCards = (props) => {
    return (
        <div className="card" style={{
            backgroundColor : `${props.style}`
        }}>
            <div className="container">
                <h4><b>{props.heading}</b></h4>
                <p>{props.stats}</p>
            </div>
        </div>
    )
}