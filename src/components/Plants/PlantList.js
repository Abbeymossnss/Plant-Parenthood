import { useEffect, useState } from "react";
import "./PlantList.css";
import { useNavigate } from "react-router-dom";

export const PlantList = () => {
  const [plants, setPlants] = useState([]);
 

  useEffect(() => {
    fetch(`  http://localhost:8088/plants`)
      .then((response) => response.json())
      .then((plantArray) => {
        setPlants(plantArray);
      });
  }, []);

  return (
    <>
    <button>Low Light Plant Babies</button>
    <button>Low Maintenance Plant Babies</button>
      
      <h2>PLANT LIBRARY:</h2>

      <article className="Plants">
        {plants.map((plant) => {
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
};
