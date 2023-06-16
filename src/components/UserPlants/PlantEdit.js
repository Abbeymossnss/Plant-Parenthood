import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useParams } from "react-router-dom";


export const PlantEdit = () => {

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


    // TODO: What is the variable in which you stored the route parameter?
    const { plantId } = useParams()

    // TODO: Get the ticket state from the API.

      useEffect(() => {
    fetch(`  http://localhost:8088/plants?id={plantId}`)
      .then((response) => response.json())
      .then((plantArray) => {
   const singlePlant = plantArray[0]
        updatePlant(singlePlant)
      });
  }, []);

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

    const handleSaveButtonClick = (event) => {
        event.preventDefault()

        // TODO: Write the fetch for the PUT request to replace the object being edited
        fetch(`http://localhost:8088/plants/${plant.id}`, {
              method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(plant)
        })
         .then(response => response.json())
        .then(() => {
                navigate("/plants")
            })
         }
        


    return <form className="ticketForm">
        <h2 className="ticketForm__title">Service Ticket</h2>
        <fieldset>
            <div className="form-group">
                <label htmlFor="description">Description:</label>
                <textarea
                    required autoFocus
                    type="text"
                    style={{
                        height: "10rem"
                    }}
                    className="form-control"
                    value={ticket.description}
                    onChange={
                        (evt) => {
                            // TODO: Update state with a modified copy
                        }
                    }>{ticket.description}</textarea>
            </div>
        </fieldset>
        <fieldset>
            <div className="form-group">
                <label htmlFor="name">Emergency:</label>
                <input type="checkbox"
                    onChange={
                        (evt) => {
                            // TODO: Update state with a modified copy
                        }
                    } />
            </div>
        </fieldset>
        <button
            onClick={() => handleSaveButtonClick()}
            className="btn btn-primary">
            Save Edits
        </button>
    </form>
}
   
   
   
   
    
    
    
    
    
    
    
    
    
    