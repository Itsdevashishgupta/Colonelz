import React from "react";
import { useState } from "react"; 
import AppBar from "@mui/material/AppBar"; 
import Box from "@mui/material/Box"; 
import CssBaseline from "@mui/material/CssBaseline";  
import Drawer from "@mui/material/Drawer"; 
import Toolbar from "@mui/material/Toolbar"; 
import photo from '../Project/logo.png'
import { Link } from "react-router-dom";
import Data from './Data'
import Noti from '../notification/App'
import { LayoutDashboard, LayoutList, Menu, MessageCircleCodeIcon, Timer, Users, Warehouse } from "lucide-react";
import ProjectData from './ProjectData'

const drawWidth = 280; 

function App() { 
	const [mobileViewOpen, setMobileViewOpen] = React.useState(false); 

	const handleToggle = () => { 
		setMobileViewOpen(!mobileViewOpen); 
	};
  
  const [formData] = useState({
    projectStatus: 'Painting',
    projectStartDate: '2024-01-20',
    timelineDate: '2024-01-20',
    projectBudget: '5000',
    receivedBudget: '2000',
    remainingBudget: '3000',
  });

	const responsiveDrawer = ( 
		<div style={{ backgroundColor: "#FFFFFF", 
			height: "100%",fontFamily:"'Nunito Sans', sans-serif", }}> 
      <div className="mt-5 px-7">
	        <img src={photo} className='w-[22%] ml-[15%]' alt="" />
        <span>
          <h1 className=' font-bold text-red-600 border-b-2 w-28 text-lg border-red-200 ml-[5%]'>COLONELZ</h1>
          <p className=' text-xs font-semibold ml-[5%]'>BUILDING RELATIONSHIPS</p>
        </span>
        </div>
        <div className=" pr-10 pl-4 text-medium mt-[10%] font-semibold">
          <Link to="/">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%]  flex py-[9px] px-6 rounded-md">
            <LayoutDashboard/><h2 className="ml-3">Dashboard</h2></button>
          </Link>
          <Link to="/project">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex   py-[9px] px-6 rounded-md">
            <LayoutList/><h2 className="ml-3">All Projects</h2></button>
          </Link>
          <Link to="/inventory">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-6 rounded-md">
            <Warehouse/><h2 className="ml-3">Inventory</h2></button>
          </Link>
          <Link to="/mom">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-6 rounded-md">
            <Timer/><h2 className="ml-3">MOM</h2></button>
          </Link>
          <Link to="/lead">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-6 rounded-md">
            <Users/><h2 className="ml-3">Lead Management</h2></button>
          </Link>
          <Link to="https://master.d1iuo6abnc6erf.amplifyapp.com/chat">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-6 rounded-md">
            <MessageCircleCodeIcon/><h2 className="ml-3">Chat</h2></button>
          </Link>
        </div>
 
		</div> 
	); 

	return ( 
		<div className="h-[100%] bg-[rgb(241 245 249)]"> 
			<div> 
				<Box sx={{ display: "flex" }}> 
					<CssBaseline /> 

					<AppBar 
						position="fixed"
						sx={{ 
							width: { sm: `calc(100% - ${drawWidth}px)` }, 
							backgroundColor: "rgb(241 245 249)",
              fontFamily:"'Nunito Sans', sans-serif",
              boxShadow:"none",
              paddingX:3
						}} 
           
					> 
												<Toolbar sx={{paddingX:2,
             backgroundColor:"#FFFFFF",
             borderRadius:1,mt:1,display:"flex",alignItems:"center",justifyContent:"space-between"}} > 
							<button className=" text-black invisible max-sm:visible">
								<Menu/>
							</button>
							<div>
                     <Noti/>
					 </div>

						 
						</Toolbar> 
					</AppBar> 
					<Box 
						component="nav"
						sx={{ width: { sm: drawWidth }, 
							flexShrink: { sm: 0 } }} 
					> 
						<Drawer 
							variant="temporary"
							open={mobileViewOpen} 
							onClose={handleToggle} 
							ModalProps={{ 
								keepMounted: true, 
							}} 
							sx={{ 
								display: { xs: "block", sm: "none" }, 
								"& .MuiDrawer-paper": { 
									boxSizing: "border-box", 
									width: drawWidth,
                  boxShadow:1 
								}, 
							}} 
						> 
							{responsiveDrawer} 
						</Drawer> 
						<Drawer 
							variant="permanent"
							sx={{ 
								display: { xs: "none", sm: "block" }, 
								"& .MuiDrawer-paper": { 
									boxSizing: "border-box", 
									width: drawWidth, 
								}, 
							}} 
							open 
						> 
							{responsiveDrawer} 
						</Drawer> 
					</Box> 
					<Box 
						component="main"
						sx={{ 
							flexGrow: 1, 
							p: 3, 
							width: { sm: `calc(100% - ${drawWidth}px)` }, 
						}} 
					> 
						<Toolbar /> 
            <div className={` flex-1  `}>
      
      <div className=' bg-white  py-5 mt-5 rounded-lg flex  '>
         <div className=' w-4/5 '>
       <h1 className=" text-2xl font-bold ml-4 ">Devashish Project</h1>       
       <h1 className=" text-md font-light mt-2 ml-4">Project Name: Interior designer</h1>     
       <h1 className=" text-md font-light mt-2 ml-4">Project ID: 443941</h1>     
       <h1 className=" text-md font-light mt-2 ml-4">Project Type: commercial</h1>     
       <h1 className=" text-md font-light mt-2 ml-4">Description: this is commercial project</h1>     
       </div>
       <div className='w-1/5'>
      <div className="relative">
     <button
       className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded ml-[55%]"
     
     >
       Edit
       
     </button>

     


   </div>
       </div>
       </div>
       
       <div className='flex pb-7 '>
       <div className='w-[43%] mr-5 '>
         <ProjectData mydata={formData} />
         </div>
         <div className='w-3/5  rounded-md bg-white mt-5'>
         <Data/>
         </div>
       </div>
      </div>

      
					</Box> 
				</Box> 
			</div> 
		</div> 
	); 
} 

export default App;
