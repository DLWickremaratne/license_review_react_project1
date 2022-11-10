import drivers from "./pages/drivers-content";
import DriversListCom from "./components/DriversListCom";


const DriversList = () => {
    return(
        <>
        <h1>Drivers List</h1>
        <DriversListCom drivers={drivers} />
        </>

    );
}

export default DriversList;