import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';


export const MyPlantList = () => {
  const [plants, setPlants] = useState([]);
  const [filteredMyPlants, setFilteredMyPlants] = useState([]);

  const localPlantUser = localStorage.getItem("plant_user")
  const plantUserObject = JSON.parse(localPlantUser)
  const navigate = useNavigate()

   const plantsArray= () => {
     fetch(`  http://localhost:8088/plants`)
       .then((response) => response.json())
       .then((plantArray) => {
         setPlants(plantArray);
       });
   }

  useEffect(() => {
plantsArray()
  }, []);

  useEffect(
    () => {
      if (plantUserObject.staff) {
        // for employees
        setFilteredMyPlants(plants)
      }
      else {
        //for plant users
        const myPlants = plants.filter(plant => plant.userId === plantUserObject.id)
        setFilteredMyPlants(myPlants)
      }
    },
    [plants]
  )
  const handleDelete = (plantId) => {
    // Perform the delete operation
    fetch(`http://localhost:8088/plants/${plantId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then(() => {
        // Perform any necessary actions after successful deletion
        plantsArray()
        navigate("/UserPlants");

      })

  };






  /*return (
    <>
      <h2>My Plant Babies</h2>
      <button>Edit My Plant</button>
      <button>Delete My Plant</button>
  
      {(() => {
        if (plantUserObject.staff) {
          return (
            <article className="Plants">
              {plants.map((plant) => (
                <section className="plant" key={plant.id}>
                  <h2>{plant.name}</h2>
                  <header>{plant.notes}</header>
                </section>
              ))}
            </article>
          );
        } else if (!plantUserObject.staff) {
          return (
            <article className="Plants">
              {plants
                .filter((plant) => plant.userId === plantUserObject.id)
                .map((plant) => {
                  return (
                    <section className="plant" key={plant.id}>
                      <h2>{plant.name}</h2>
                      <header>{plant.notes}</header>
                    </section>
                  );
                })}
            </article>
          );
        } else {
          return null;
        }
      })()}
    </>
  );
  }
  */


  return (
    <>
      <h2>My Plant Babies</h2>
      <article className="Plants">
        {filteredMyPlants.map((plant) => {
          return (
            <>
              <section className="plant">
                <h2>{plant.name}</h2>
                <header>{plant.notes}</header>
                <Link to={`/MyPlants/${plant.id}/edit`}>Edit</Link>
                <button onClick={() => handleDelete(plant.id)}>Delete</button>
              </section>
            </>
          );
        })}
      </article>

    </>
  );



}







