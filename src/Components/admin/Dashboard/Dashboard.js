import React from "react"; 
import AppBar from "@mui/material/AppBar"; 
import Box from "@mui/material/Box"; 
import CssBaseline from "@mui/material/CssBaseline"; 
import Drawer from "@mui/material/Drawer"; 
import IconButton from "@mui/material/IconButton";  
import MenuIcon from "@mui/icons-material/Menu"; 
import Toolbar from "@mui/material/Toolbar";  
import photo from '../Project/logo.png'
import { Link } from "react-router-dom";
import { Card,CardContent } from "@mui/material";
import Data from './Data'
import Task from './Task'
import Noti from '../notification/App'
import { LayoutDashboard, LayoutList, Menu, MessageCircleCodeIcon, Timer, Users, Warehouse } from "lucide-react";


const drawWidth = 240; 

function App() { 
	const [mobileViewOpen, setMobileViewOpen] = React.useState(false); 

	const handleToggle = () => { 
		setMobileViewOpen(!mobileViewOpen); 
	}; 

	const responsiveDrawer = ( 
		<div style={{ backgroundColor: "#FFFFFF", 
			height: "100%",fontFamily:"'Nunito Sans', sans-serif", }}> 
      <div className="mt-5 px-6">
	        <img src={photo} className='w-[22%] ml-[15%]' alt="" />
        <span>
          <h1 className=' font-bold text-red-600 border-b-2 w-28 text-lg border-red-200 ml-[5%]'>COLONELZ</h1>
          <p className=' text-xs font-semibold ml-[5%]'>BUILDING RELATIONSHIPS</p>
        </span>
        </div>
        <div className=" pr-8 pl-4 text-medium mt-[10%] font-semibold">
          <Link to="/">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%]  flex bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 py-[9px] px-2 rounded-md">
            <LayoutDashboard/><h2 className="ml-3">Dashboard</h2></button>
          </Link>
          <Link to="/project">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-2 rounded-md">
            <LayoutList/><h2 className="ml-3">All Projects</h2></button>
          </Link>
          <Link to="/inventory">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-2 rounded-md">
            <Warehouse/><h2 className="ml-3">Inventory</h2></button>
          </Link>
          <Link to="/mom">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-2 rounded-md">
            <Timer/><h2 className="ml-3">MOM</h2></button>
          </Link>
          <Link to="/lead">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-2 rounded-md">
            <Users/><h2 className="ml-3">Lead Management</h2></button>
          </Link>
          <Link to="https://main.dkada6vw7g925.amplifyapp.com/chat">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-2 rounded-md">
            <MessageCircleCodeIcon/><h2 className="ml-3">Chat</h2></button>
          </Link>
        </div>
 
		</div> 
	); 

	return ( 
		<div className="h-[100vh] bg-[rgb(241 245 249)] overflow-hidden "> 
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
							<button className=" text-black invisible max-sm:visible" onClick={handleToggle}  >
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
            <div className="flex max-sm:flex-col max-sm:flex w-[100%] justify-between max-sm:mr-24px max-sm:">
            <Card sx={{ minWidth: 275,overflow:"auto",width:"43%"  } } >
    <CardContent>
   
    <Task/>
    </CardContent>
    
  </Card>
            <Card sx={{ minWidth: 275,overflow:"auto", width:"55%" } } className=" max-sm:mt-6 " >
    <CardContent>
    
    <Data/>
    </CardContent>
    
  </Card>
  </div>
 
					</Box> 
				</Box> 
			</div> 
		</div> 
	); 
} 

export default App;
