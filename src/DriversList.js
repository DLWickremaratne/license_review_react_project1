import { useState } from "react";

const Drivers = () => {
    const [drivers , setDrivers] = useState([{
        id: 1,
        fullName :"Dhanith Lakjaya",
        branch : "Kandy",
        gender: "male",
        teamName: "A"
    },
    {
        id: 1,
        fullName :"Pradeep",
        branch : "Kandy",
        gender: "male",
        teamName: "A"
    },
    ]
    );
    return (
        <main>
            {
                drivers.map((driver) => (
                    <p>{driver.fullName}</p>
                ))
            }
        </main>
    );
}

export default Drivers;

