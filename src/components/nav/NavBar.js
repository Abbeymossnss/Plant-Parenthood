import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <ul className="navbar">
            <li className="navbar__item active">
                <Link className="navbar__link" to="/plants">Plant List</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/plants/create">Create Plant</Link>
            </li>
            <li className="navbar__item active">
                <Link className="navbar__link" to="/UserPlants">My Plant List</Link>
            </li>
       
            {
                localStorage.getItem("plant_user")
                    ? <li className="navbar__item navbar__logout">
                        <Link className="navbar__link" to="" onClick={() => {
                            localStorage.removeItem("plant_user")
                            navigate("/", {replace: true})
                        }}>Logout</Link>
                    </li>
                    : ""
            }
        </ul>
    )
}

// put logo on left hand corner of nav bar so it shows in every view