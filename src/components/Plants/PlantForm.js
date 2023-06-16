import { useEffect, useState } from "react";
import "./PlantForm.css";
import { useNavigate } from "react-router-dom";

export const NewPlantForm = () => {
    /*
           TODO: Add the correct default properties to the
           initial state object
       */
 const localPlantUser = localStorage.getItem("plant_user")
    const plantUserObject = JSON.parse(localPlantUser)

    const [newSunlightArray, changeNewSunlightArrayState] = useState([])
    const [newMaintenanceArray, changeNewMaintenanceArrayState] = useState([])
    const [plant, updatePlant] = useState({
        "name": "",
        "sunlightTypeId": 0,
        "maintenanceTypeId": 0,
        "notes": "",
        "userId": 0
    })


    // const [plantName, changePlantName] = useState("")
    // const [plantImage, changePlantImage] = useState("")
    // const [plantNotes, changePlantNotes] = useState("")
    // const [chosenSunlightType, changeChosenSunlightType] = useState(0)


    useEffect(() => {
        fetch(`http://localhost:8088/sunlightTypes`)
            .then(response => response.json())
            .then((sunlightTypes) => {
                changeNewSunlightArrayState(sunlightTypes)
            })
    },

        [])

    useEffect(() => {
        fetch(`http://localhost:8088/maintenanceTypes`)
            .then(response => response.json())
            .then((maintenanceTypes) => {
                changeNewMaintenanceArrayState(maintenanceTypes)
            })
    },

        [])
    /*
        TODO: Use the useNavigation() hook so you can redirect
        the user to the ticket list
    */
  


    // TODO: Create the object to be saved to the API
    const navigate = useNavigate()
    // TODO: Perform the fetch() to POST the object to the API
    const savePlant = (evt) => {
        evt.preventDefault();


        const newPlantObjectToStringify = {
            "name": plant.name,
            "notes": plant.notes,
            "sunlightTypeId": plant.sunlightTypeId,
            "maintenanceTypeId": plant.maintenanceTypeId,
            "userId": plantUserObject.id

        }

        return fetch(`http://localhost:8088/plants`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newPlantObjectToStringify)
        })
            .then(response => response.json())
            .then(() => {
                navigate("/plants")
            })
    }








    return (
        <>
            <h1> Create New Plant!</h1>
            <form>
                <fieldset>
                    <h2>Name Your Plant:</h2>
                    <input value={plant.name}
                        type="text"
                        placeholder="Name new plant..."
                        onChange={
                            (evt) => {
                                const copyPlant = { ...plant }
                                copyPlant.name = evt.target.value
                                updatePlant(copyPlant)
                            }
                        }
                    />
                </fieldset>
                <fieldset>
                    <h2>Tell us about your Plant:</h2>
                    {/* <input value={plant.image}
                        onChange={(evt) => changePlantImage(evt.target.value)}
                        type="text" placeholder="paste img url here.." /> */}

                    <input value={plant.notes}
                        type="text"
                        placeholder="Type Plant Details here..."
                        onChange={
                            (evt) => {
                                const copyPlant = { ...plant }
                                copyPlant.notes = evt.target.value
                                updatePlant(copyPlant)
                            }
                        }
                    />
                </fieldset>
                <fieldset>
                    <h2> Sunlight Type Received:</h2>
                    <select
                        value={plant.sunlightTypeId}
                        onChange={
                            (evt) => {
                                const copy = { ...plant }
                                copy.sunlightTypeId = evt.target.value
                                updatePlant(copy)
                            }
                        }>
                        <option value="" defaultValue>Select Sunlight Type</option>
                        {newSunlightArray.map(sunlightType => (
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
                        onChange={
                            (evt) => {
                                const copy = { ...plant }
                                copy.maintenanceTypeId = evt.target.value
                                updatePlant(copy)
                            }
                        }>
                        <option value="" defaultValue>Select Maintenance Type</option>
                        {newMaintenanceArray.map(maintenanceType => (
                            <option key={maintenanceType.id} value={maintenanceType.id}>
                                {maintenanceType.maintenanceType}

                            </option>

                        ))}
                    </select>



                </fieldset>
                <button onClick={(save) => savePlant(save)}>Submit Plant</button>

            </form>











        </>


    )

}