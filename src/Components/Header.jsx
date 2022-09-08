import "./Header.css"
import { Link } from "react-router-dom";

export const Header = (props) => {
    return (
        <header className="h-background">
            {
                props.link === "tab" ? (
                    <Link to="/Analytics">Back</Link>
                ) : (
                    <Link to="/">Back</Link>
                )
            }
            <div className="h-style">
                <h2>{props.title}</h2>
            </div>
        </header>
    )
}