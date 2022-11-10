import { useParams } from "react-router-dom";
import drivers from "./drivers-content";
import NotFoundPage from "../NotFoundPage";

//useParams hook
const DriversPro = () => {
    const { driverId } = useParams();

    //driver id property of params 
    //const driverId = params.driverId;
    //js builtin find function

    const driver = drivers.find(driver => driver.fullName === driverId);

    if (!driver) {
        return <NotFoundPage />
    }
    
    return (
        <>
        <h1> {driver.fullName} </h1>
        <h1> {driver.branch} </h1>
        <h2> {driver.gender} </h2>
        <h2> {driver.teamName} </h2>

        </>
    );
}

export default DriversPro;
