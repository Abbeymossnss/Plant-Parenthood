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
              <div> insert Punny Plant Catchphrase here.</div>

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

  


