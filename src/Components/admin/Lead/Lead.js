import React from "react"; 
import AppBar from "@mui/material/AppBar"; 
import Box from "@mui/material/Box"; 
import CssBaseline from "@mui/material/CssBaseline";  
import Drawer from "@mui/material/Drawer";  
import Toolbar from "@mui/material/Toolbar"; 
import photo from '../Project/logo.png'
import { Link } from "react-router-dom";
import { Card,CardContent, TextField } from "@mui/material";
import Data from './Data'
import { LayoutDashboard, LayoutList, Menu, MessageCircleCodeIcon, Timer, Users, Warehouse } from "lucide-react";
import Noti from '../notification/App'
import ClearableProp from "./calender";
import SelectLabels from "./select";
import BasicTextFields from "../../Template/input";

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
            <button className=" font-['Nunito Sans', sans-serif] w-[100%]  flex py-[9px] px-2 rounded-md">
            <LayoutDashboard/><h2 className="ml-3">Dashboard</h2></button>
          </Link>
          <Link to="/project">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex    py-[9px] px-2 rounded-md">
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
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 py-[9px] px-2 rounded-md">
            <Users/><h2 className="ml-3">Lead Management</h2></button>
          </Link>
          <Link to="https://main.dkada6vw7g925.amplifyapp.com/chat">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-2 rounded-md">
            <MessageCircleCodeIcon/><h2 className="ml-3">Chat</h2></button>
          </Link>
        </div>
 
		</div> 
	); 

  const [state, setState] = React.useState({
		top: false,
		left: false,
		bottom: false,
		right: false,
	  });
	
	  const toggleDrawer = (anchor, open) => (event) => {
		console.log("yes");
		if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
		  return;
		}
	
		setState({ ...state, [anchor]: open });
	  };
	
	  const list1 = (anchor) => (
		<Box
		  sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400,fontFamily:"'Nunito Sans', sans-serif",marginBottom:12}}
		  role="presentation"
		
		>
		<div className='flex justify-between '>
		<div>
		 <h1 className='ml-8 font-semibold text-2xl mt-12'>Devashish Project  </h1>
	
		 </div>

		 </div>
     <form className="w-4/5 ml-8 mt-5" >
        <div className="mb-4">
          <label htmlFor="clientName" className="block text-sm font-medium text-gray-600">
            Client Name
          </label>
          <input
            type="text"
            id="clientName"
            name="clientName"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="leadDate" className="block text-sm font-medium text-gray-600">
            Lead Date
          </label>
          <input
            type="date"
            id="leadDate"
            name="leadDate"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">
            Email Id
          </label>
          <input
            type="email"
            id="email"
            name="email"
           
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          />
        </div>

        <div className="mb-4">
          <label htmlFor="status" className="block text-sm font-medium text-gray-600">
            Status
          </label>
          <select
            id="status"
            name="status"
            className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-300"
          >
            <option value="Follow up">Follow up</option>
            <option value="Not Interested">Not Interested</option>
            <option value="No Response">No Response</option>
            <option value="Interested">Interested</option>
          </select>
        </div>
</form>
		

		
		
         <div className="mt-5 ml-8 mr-8">
		  <button className="bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 py-2 px-12 rounded-sm mt-5" >Submit</button>
		  </div>
		 
		</Box>
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
							<button className=" text-black invisible max-sm:visible" onClick={handleToggle}>
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
            <Card sx={{ minWidth: 275,overflow:"auto" } } >
    <CardContent>
    <div className="flex justify-between mr-9 ">
    <h1 className="text-2xl font-bold mb-4 ml-6">Devashish Project</h1>
	<button className="bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800  px-5 text-center  rounded-md " onClick={toggleDrawer('right',true)}>ADD</button>
	</div>
    <Data/>
    </CardContent>
    
  </Card>
					</Box> 
				</Box> 
			</div> 
      <React.Fragment >
    <Drawer
            anchor={'right'}
            open={state['right']}
            onClose={toggleDrawer('right', false)}
          >
            {list1('right')}
          </Drawer>
          </React.Fragment>
		</div> 
	); 
} 

export default App;
