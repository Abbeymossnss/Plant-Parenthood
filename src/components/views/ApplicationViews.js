import { Outlet, Route, Routes } from "react-router-dom";
import { PlantList } from "../Plants/PlantList.js";
import { NewPlantForm } from "../Plants/PlantForm.js"
import { MyPlantList} from "../UserPlants/MyPlantList.js"
import { PlantEdit } from "../UserPlants/PlantEdit.js"


export const ApplicationViews = () => {

    return (
      <Routes>
        <Route
          path="/"
          element={
            <>
              <h1>Plant Parenthood</h1>
              <div>Becoming a plant parent offers a multitude of benefits, including the opportunity to cultivate responsibility, enhance the air quality of your home, and create a lush and inviting living space. However, it's crucial to remember that great house plants come with great responsibility. To support both current and aspiring plant parents, the Plant Parenthood website provides valuable insights into the care and maintenance requirements of various plants.
                Are you actively involved in your plant's care, or are you unintentionally neglecting your plant baby? Plant Parenthood helps you identify whether your plant needs more water or less, adequate sunlight or shade, and provides guidance to ensure your plants thrive in a healthy and balanced environment. Moreover, for those looking to embark on their plant-parenting journey, Plant Parenthood offers guidance in selecting the most suitable houseplants for your specific home conditions.
                Do you often find yourself forgetting the names and care requirements of your beloved plant babies? Plant Parenthood provides a convenient "My Plant" page where you can store information about your current plants for easy reference.
                Embrace the joy of nurturing plants and create your future plant-filled haven with the help of Plant Parenthood.
</div>

              <Outlet />
            </>
          }
        >
        </Route>
          <Route path="plants" element={<PlantList />} />
        <Route path="plants/create" element={<NewPlantForm />} />
          <Route path= "UserPlants" element={<MyPlantList />} />
          <Route path= "MyPlants/:plantId/edit" element={<PlantEdit />} />
      
  
      </Routes>

    );
  };

  


