import React from "react"; 
import AppBar from "@mui/material/AppBar"; 
import Box from "@mui/material/Box"; 
import CssBaseline from "@mui/material/CssBaseline";  
import Drawer from "@mui/material/Drawer"; 

import Toolbar from "@mui/material/Toolbar"; 
import photo from '../Project/logo.png'
import { Link } from "react-router-dom";
import { Button, Card,CardContent } from "@mui/material";
import Data from './Data'
import Noti from '../notification/App'
import { LayoutDashboard, LayoutList, Menu, MessageCircleCodeIcon, Timer, Users, Warehouse } from "lucide-react";

const drawWidth = 280; 

function App() { 
	const [mobileViewOpen, setMobileViewOpen] = React.useState(false); 

	const handleToggle = () => { 
		setMobileViewOpen(!mobileViewOpen); 
	}; 

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
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800   py-[9px] px-6 rounded-md">
            <Users/><h2 className="ml-3">Lead Management</h2></button>
          </Link>
          <Link to="https://main.dkada6vw7g925.amplifyapp.com/chat">
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-6 rounded-md">
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
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 400 }}
      role="presentation"
     
    >
    <h1 className=' text-xl text-center mt-5 ' style={{fontFamily:"'Nunito Sans', sans-serif",fontWeight:"600"}}>Add Lead</h1>
    <form className='flex flex-col ml-[12%] mt-9 '>
                    <label>Client Name</label>
                    <input type="text" className='border-gray-400 border rounded-sm w-72 h-10' name='devashish' 
                       />
                </form>
    <form className='flex flex-col ml-[12%] mt-4 '>
                    <label>Lead Date</label>
                    <input type="text" className='border-gray-400 border rounded-sm w-72 h-10' name='' value=""
                       />
                </form>
    <form className='flex flex-col ml-[12%] mt-4 '>
                    <label>Phone</label>
                    <input type="number" className='border-gray-400 border rounded-sm w-72 h-10' name='' value=""
                       />
                </form>
    <form className='flex flex-col ml-[12%] mt-4 '>
                    <label>Email</label>
                    <input type="text" className='border-gray-400 border rounded-sm w-72 h-10' name='' value=""
                       />
                </form>
    <form className='flex flex-col ml-[12%] mt-4 '>
                    <label>Status</label>
                    <input type="text" className='border-gray-400 border rounded-sm w-72 h-10' name='' value=""
                       />
                </form>

 


<button className='ml-[12%] mt-[5%] bg-gradient-to-tr from-indigo-300 to-indigo-100 text-indigo-800 py-2 px-5 rounded-sm font-semibold' onClick={toggleDrawer(anchor, false)}>Submit</button>
<button className='ml-[5%] mt-[5%] bg-slate-200 text-gray-400 py-2 px-5 rounded-sm font-semibold hover:bg-gray-400 hover:text-black' onClick={toggleDrawer(anchor, false)}>Cancel</button>
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
            <Card sx={{ minWidth: 275 }} style={{fontFamily:"",}}>
      <CardContent>
      <div className='flex justify-between'>
      <h1 className="text-2xl font-bold mb-4 ml-6">Lead Management</h1>
      {['right'].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)} style={{marginRight:"30px", background:"linear-gradient(to bottom left, #a5b4ff, #ebf4ff) " ,color:"", padding: '10px',
      height: '34px',
      fontFamily: "'Nunito Sans', sans-serif",
      textTransform: 'capitalize',fontWeight:"600"}}>Add Lead</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
            ModalProps={{ onBackdropClick: toggleDrawer }}
            style={{width:"30%"}}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>  ))}
    
</div>
      <Data/>
      </CardContent>
      
    </Card>
					</Box> 
				</Box> 
			</div> 
		</div> 
	); 
} 

export default App;
