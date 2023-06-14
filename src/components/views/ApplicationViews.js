import { Outlet, Route, Routes } from "react-router-dom";
import { PlantList } from "../Plants/PlantList.js";
import { NewPlantForm } from "../Plants/PlantForm.js"


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
          <Route path="plants" element={<PlantList />} />
        </Route>
        <Route path="plants" element={<NewPlantForm />} />
      
  
      </Routes>

    );
  };

  


