

import drivers from "./pages/drivers-content";
import { Link } from "react-router-dom";

const DriversList = () => {
    return(
        <>
        <h1>Drivers List</h1>
        {drivers.map(driver => (
            
            <Link className="driverslist" to={`/drivers/${driver.fullName}`}>
                <h3>{driver.fullName}</h3>
                <h3>{driver.branch}</h3>
                <p>{driver.teamName}</p>
            </Link>
            
        
        ))}
        </>

    );
}

export default DriversList;