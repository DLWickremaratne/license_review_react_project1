import { useParams } from "react-router-dom";
import drivers from "./drivers-content";
//useParams hook
const DriversPro = () => {
    const { driverId } = useParams();
    
    //driver id property of params 
    //const driverId = params.driverId;
    //js builtin find function

    const driver = drivers.find(driver => driver.id === driverId);
    return (
        <h1>This is the profile page for the profile id: { driverId }!</h1>
    );
}

export default DriversPro;
