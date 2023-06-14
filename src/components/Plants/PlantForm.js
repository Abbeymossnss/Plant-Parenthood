import { useEffect, useState } from "react";
import "./PlantForm.css";
import { useNavigate } from "react-router-dom";

export const NewPlantForm = () => {
    /*
           TODO: Add the correct default properties to the
           initial state object
       */
    const [newSunlightArray, changeNewSunlightArrayState] = useState([])
    const [plant, updatePlant] = useState({
        "name": "",
        "sunlightTypeId": 0,
        "maintenanceTypeId": 0,
        "notes":""
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

    
        /*
            TODO: Use the useNavigation() hook so you can redirect
            the user to the ticket list
        */

        // const localPlantUser = localStorage.getItem("plant_user")
        // const PlantUserObject = JSON.parse(localPlantUser)

    
            // TODO: Create the object to be saved to the API


            // TODO: Perform the fetch() to POST the object to the API
        

        return (
            <>
                <h1> Create a  new product</h1>

                <form>

                    <input value={plant.name}
                        type="text" 
                        placeholder="Name new plant..." 
                        onChange={
                            (evt) => {
                                const copyPlant={...plant}
                                copyPlant.name = evt.target.value
                                updatePlant(copyPlant)
                            }
                        }
                        />


                    {/* <input value={plant.image}
                        onChange={(evt) => changePlantImage(evt.target.value)}
                        type="text" placeholder="paste img url here.." /> */}

                    <input value={plant.notes}
                        type="text"
                         placeholder="Type Plant Details here..."
                        onChange={
                            (evt) => { 
                                const copyPlant={...plant}
                                copyPlant.notes = evt.target.value
                                updatePlant(copyPlant)
                            }
                        }
                               
                         />


                    <select value={plant.sunlightTypeId}
                        onChange={(evt) => changeChosenSunlightType(evt.target.value)}>
                        <option value="0">Pick a sunlight type...</option>
                        {newSunlightArray.map((sunlightType) => (
                            <option key={sunlightType.id} value={sunlightType.id}>{sunlightType.sunlightType}</option>
                        ))}
                    </select>

                    <button>Save Plant</button>
                </form>

            
            
            
            
            
            
            
            
            
            
            </>
           
        
        ) 
}
