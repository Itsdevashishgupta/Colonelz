import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/Dashboard/Dashboard";

import {  useMode } from "./theme";
import Project from "./Components/Project/Project";
import  Inventory  from './Components/Inventory/inventory'
import MOM from './Components/MOM/MOM'
import Lead from './Components/Lead/Lead'
import User from './Components/User/User'
import Client from './Components/User/Client'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
       <>  
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/project" element={<Project/>} />
              <Route path="/inventory" element={<Inventory/>} />
              <Route path="/mom" element={<MOM/>} />
              <Route path="/lead" element={<Lead/>} />
              <Route path="" element={<MOM/>} />
              <Route path="/user" element={<User/>} />
              <Route path="/client" element={<Client/>} />
            </Routes>
            </>
     
  );
}

export default App;
