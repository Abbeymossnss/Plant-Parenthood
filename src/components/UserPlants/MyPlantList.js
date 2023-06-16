import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

export const MyPlantList = () => {
  const [plants, setPlants] = useState([]);
  const [filteredMyPlants, setFilteredMyPlants] = useState([]);

 const localPlantUser = localStorage.getItem("plant_user")
 const plantUserObject = JSON.parse(localPlantUser)

 
  useEffect(() => {
    fetch(`  http://localhost:8088/plants`)
      .then((response) => response.json())
      .then((plantArray) => {
        setPlants(plantArray);
      });
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
            <button>Edit My Plant</button>
            <button>Delete My Plant</button>

            <h2>My Plant Babies</h2>
            <article className="Plants">
                {filteredMyPlants.map((plant) => {
                    return (
                        <section className="plant">
                            <h2>{plant.name}</h2>
                            <header>{plant.notes}</header>
                        </section>
                    );
                })}
            </article>
        </>
    );

            }



















