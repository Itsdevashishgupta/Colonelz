import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./Components/admin/Dashboard/Dashboard";

import {  useMode } from "./theme";
import Project from "./Components/admin/Project/Project";
import  Inventory  from './Components/admin/Inventory/inventory'
import MOM from './Components/admin/MOM/MOM'
import Lead from './Components/admin/Lead/Lead'
import User from './Components/admin/User/User'
import Client from './Components/admin/User/Client'
import UserMom from './Components/admin/Project/MOM/MOM'

function App() {
  const [theme, colorMode] = useMode();
  const [isSidebar, setIsSidebar] = useState(true);

  return (
       <>  
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/project" element={<Project/>} />
              <Route path="/project/mom" element={<UserMom/>} />
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
