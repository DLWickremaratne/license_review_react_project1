import { Link } from "react-router-dom";

const DriversListCom = ({ drivers }) => {
    return(
        
        <>
        {drivers.map(driver => (
            
            <Link key={driver.fullName} className="driverslist" to={`/drivers/${driver.fullName}`}>
                <h3>{driver.fullName}</h3>
                <h3>{driver.branch}</h3>
                <p>{driver.teamName}</p>
            </Link>
            
        
        ))}
        </>
    );
}

export default DriversListCom;