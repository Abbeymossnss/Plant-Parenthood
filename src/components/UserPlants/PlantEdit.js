import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

export const PlantEdit = () => {
    const localPlantUser = localStorage.getItem("plant_user");
    const plantUserObject = JSON.parse(localPlantUser);

    const [newSunlightArray, changeNewSunlightArrayState] = useState([]);
    const [newMaintenanceArray, changeNewMaintenanceArrayState] = useState([]);
    const [plant, updatePlant] = useState({
        name: "",
        sunlightTypeId: 0,
        maintenanceTypeId: 0,
        notes: "",
        userId: 0,
    });

    const { plantId } = useParams();
    const navigate = useNavigate();
    

    useEffect(() => {
        fetch(`http://localhost:8088/plants?id=${plantId}`)
            .then((response) => response.json())
            .then((plantArray) => {
                const singlePlant = plantArray[0];
                updatePlant(singlePlant);
            })
    
  
    }, []);

    useEffect(() => {
        fetch("http://localhost:8088/sunlightTypes")
            .then((response) => response.json())
            .then((sunlightTypes) => {
                changeNewSunlightArrayState(sunlightTypes);
            });
    }, []);

    useEffect(() => {
        fetch("http://localhost:8088/maintenanceTypes")
            .then((response) => response.json())
            .then((maintenanceTypes) => {
                changeNewMaintenanceArrayState(maintenanceTypes);
            });
    }, []);

    const handleSaveButtonClick = (event) => {
        event.preventDefault();

        fetch(`http://localhost:8088/plants/${plant.id}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(plant),
        })
            .then((response) => response.json())
            .then(() => {
            navigate("/UserPlants")
            });
    };
    
    
    return (
        <>
            <h1>Edit Your Plant!</h1>
            <form>
                <fieldset>
                    <h2>Edit Name:</h2>
                    <textarea
                        value={plant.name}
                        text="text"
                        placeholder="Rename Plant..."
                        onChange={(evt) => {
                            const copyPlant = { ...plant };
                            copyPlant.name = evt.target.value;
                            updatePlant(copyPlant);
                        }}
                    >
                        {plant.name}
                    </textarea>
                </fieldset>
                <fieldset>
                    <h2>Tell us about your Plant:</h2>
                    <textarea
                        value={plant.notes}
                        type="text"
                        placeholder="Edit Plant Details..."
                        onChange={(evt) => {
                            const copyPlant = { ...plant };
                            copyPlant.notes = evt.target.value;
                            updatePlant(copyPlant);
                        }}
                    >
                        {plant.notes}
                    </textarea>
                </fieldset>
                <fieldset>
                    <h2>Sunlight Type Received:</h2>
                    <select
                        value={plant.sunlightTypeId}
                        onChange={(evt) => {
                            const copy = { ...plant };
                            copy.sunlightTypeId = evt.target.value;
                            updatePlant(copy);
                        }}
                    >
                        <option value="0">Select Sunlight Type</option>
                        {newSunlightArray.map((sunlightType) => (
                            <option key={sunlightType.id} value={sunlightType.id}>
                                {sunlightType.sunlightType}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <fieldset>
                    <h2>Maintenance Type Required:</h2>
                    <select
                        value={plant.maintenanceTypeId}
                        onChange={(evt) => {
                            const copy = { ...plant };
                            copy.maintenanceTypeId = evt.target.value;
                            updatePlant(copy);
                        }}
                    >
                        <option value="0">Select Maintenance Type</option>
                        {newMaintenanceArray.map((maintenanceType) => (
                            <option key={maintenanceType.id} value={maintenanceType.id}>
                                {maintenanceType.maintenanceType}
                            </option>
                        ))}
                    </select>
                </fieldset>
                <button onClick={handleSaveButtonClick}>Save Changes</button>
            </form>
        </>
    );
};

































// import { useEffect, useState } from "react";
// import { useNavigate } from "react-router-dom";
// import { useParams } from "react-router-dom";


// export const PlantEdit = () => {

//     const localPlantUser = localStorage.getItem("plant_user")
//     const plantUserObject = JSON.parse(localPlantUser)

//     const [newSunlightArray, changeNewSunlightArrayState] = useState([])
//     const [newMaintenanceArray, changeNewMaintenanceArrayState] = useState([])
//     const [plant, updatePlant] = useState({
//         "name": "",
//         "sunlightTypeId": 0,
//         "maintenanceTypeId": 0,
//         "notes": "",
//         "userId": 0
//     })


//     // TODO: What is the variable in which you stored the route parameter?
//     const { plantId } = useParams()
//     const navigate = useNavigate()

//     // TODO: Get the ticket state from the API.

//     useEffect(() => {
//         fetch(`  http://localhost:8088/plants?id={plantId}`)
//             .then((response) => response.json())
//             .then((plantArray) => {
//                 const singlePlant = plantArray[0]
//                 updatePlant(singlePlant)
//             });
//     }, []);

//     useEffect(() => {
//         fetch(`http://localhost:8088/sunlightTypes`)
//             .then(response => response.json())
//             .then((sunlightTypes) => {
//                 changeNewSunlightArrayState(sunlightTypes)
//             })
//     },

//         [])

//     useEffect(() => {
//         fetch(`http://localhost:8088/maintenanceTypes`)
//             .then(response => response.json())
//             .then((maintenanceTypes) => {
//                 changeNewMaintenanceArrayState(maintenanceTypes)
//             })
//     },

//         [])

//     const handleSaveButtonClick = (event) => {
//         event.preventDefault()

//         // TODO: Write the fetch for the PUT request to replace the object being edited
//         fetch(`http://localhost:8088/plants/${plant.id}`, {
//             method: "PUT",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(plant)
//         })
//             .then(response => response.json())
//             .then(() => {
//                 navigate("/UserPlants")
//             })
//     }

//     return (
//         <>
//             <h1> Edit Your Plant! </h1>
//             <form>
//                 <fieldset>
//                     <h2>Edit Name:</h2>
//                     <textarea value={plant.name}
//                       text="text"
//                         placeholder="Rename Plant..."
//                         onChange={
//                             (evt) => {
//                                 const copyPlant = { ...plant }
//                                 copyPlant.name = evt.target.value
//                                 updatePlant(copyPlant)
//                             }
//                         }
//                     > {plant.name}
//                         </textarea>
//                 </fieldset>
//                 <fieldset>
//                     <h2>Tell us about your Plant:</h2>
//                     <textarea value={plant.notes}
//                         type="text"
//                         placeholder="Edit Plant Details..."
//                         onChange={
//                             (evt) => {
//                                 const copyPlant = { ...plant }
//                                 copyPlant.notes = evt.target.value
//                                 updatePlant(copyPlant)
//                             }
//                         }
//                     > {plant.notes}

//                     </textarea>
//                 </fieldset>
//                 <fieldset>
//                     <h2> Sunlight Type Received:</h2>
//                     <select
//                         value={plant.sunlightTypeId}
//                         onChange={
//                             (evt) => {
//                                 const copy = { ...plant }
//                                 copy.sunlightTypeId = evt.target.value
//                                 updatePlant(copy)
//                             }
//                         }>
//                         <option value="0">Select Sunlight Type</option>
//                         {newSunlightArray.map(sunlightType => (
                            
//                             <option key={sunlightType.id} value={sunlightType.id}>
//                                 {sunlightType.sunlightType}

//                             </option>
                            
//                         ))}
//                     </select>
//                 </fieldset>
//                 <fieldset>
//                     <h2>Maintenance Type Required:</h2>
//                     <select
//                         value={plant.maintenanceTypeId}
//                         onChange={
//                             (evt) => {
//                                 const copy = { ...plant }
//                                 copy.maintenanceTypeId = evt.target.value
//                                 updatePlant(copy)
//                             }
//                         }>
//                         <option value="0" >Select Maintenance Type</option>
//                         {newMaintenanceArray.map(maintenanceType => (
//                             <option key={maintenanceType.id} value={maintenanceType.id}>
//                                 {maintenanceType.maintenanceType}

//                             </option>

//                         ))}
//                     </select>



//                 </fieldset>
//                 <button onClick={handleSaveButtonClick}>Save Changes</button>

//             </form>











//         </>


//     )

// }













