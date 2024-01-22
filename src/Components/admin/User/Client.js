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
import { File, LayoutDashboard, LayoutList, Mail, MessageCircleCodeIcon, Timer, Users, Warehouse } from "lucide-react";
import { useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';

const drawWidth = 280; 


function App() { 
	const [mobileViewOpen, setMobileViewOpen] = React.useState(false); 
  const [leadStatus, setLeadStatus] = useState('Follow up');

  const handleLeadStatusChange = (status) => {
    setLeadStatus(status);
  };
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
            <button className=" font-['Nunito Sans', sans-serif] w-[100%] mt-3  flex  py-[9px] px-6 rounded-md">
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
		<div className="h-[100vh] bg-[rgb(241 245 249)]"> 
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
							<IconButton 
								color="inherit"
								edge="start"
								onClick={handleToggle} 
								sx={{ mr: 2, display: { sm: "none" } }} 
							> 
								<MenuIcon /> 
							</IconButton>

						 
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
    <div className={`flex-1 container   `}>
      <div className=" mx-5 bg-white  rounded-md  ">
        <div className="mb-4">
          <h1 className="text-2xl font-bold mb-2">Client Information</h1>
          <p>
            <strong>Name:</strong> Devashish
          </p>
          <p>
            <strong>Email:</strong> Devashish@gmail.com
          </p>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Actions</h2>
          <ul className="flex space-x-4">
            <li>
              <a href="mailto:john.doe@example.com" className="text-indigo-800 hover:underline flex">
                <Mail/><p className=' ml-1'>Send Mail</p>
              </a>
            </li>
            <li>
              <a href="/lead"  className="text-indigo-800 hover:underline flex">
              <File/><p className=' ml-1'>Send Document</p>
              </a>
            </li>
            <li>
              <a href="/chat" className="text-indigo-800 hover:underline flex">
                <MessageCircleCodeIcon/><p className=' ml-1'>Chat</p>
              </a>
            </li>
          </ul>
        </div>

        <div className="mb-4">
          <h2 className="text-xl font-bold mb-2">Lead Status</h2>
          <select
            value={leadStatus}
            onChange={(e) => handleLeadStatusChange(e.target.value)}
            className="p-2 border rounded"
          >
            <option value="Follow up">Follow up</option>
            <option value="Interested">Interested</option>
            <option value="Not interested">Not interested</option>
            <option value="No response">No response</option>
          </select>
        </div>

        <div className="mb-4">
         
          <div className="flex space-x-4">
            <div
              className={`p-2 rounded-md ${
                leadStatus === 'Follow up' ? 'bg-yellow-300 text-white' : 'bg-slate-100'
              }`}
            >
              Follow up
            </div>
            <div
              className={`p-2 rounded-md ${
                leadStatus === 'Interested' ? 'bg-yellow-300 text-white' : 'bg-slate-100'
              }`}
            >
              Interested
            </div>
            <div
              className={`p-2 rounded-md ${
                leadStatus === 'Not interested' ? 'bg-yellow-300 text-white' : 'bg-slate-100'
              }`}
            >
              Not interested
            </div>
            <div
              className={`p-2 rounded-md ${
                leadStatus === 'No response' ? 'bg-yellow-300 text-white' : 'bg-slate-100'
              }`}
            >
              No response
            </div>
          </div>
        </div>
        <div className=''>
        <div className='w-1/2'>
        <h1 className='my-2 font-semibold'>To follow up on</h1>
        <div className='flex'>
            <input
              type="date"
              name="timelineDate"
              className="w-1/2 h-14 mr-3 mt-2 border text-gray-300 border-gray-300 p-2 rounded hover:border-black"
            />
              <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DemoContainer components={['TimePicker']}>
        <TimePicker label="" />
      </DemoContainer>
    </LocalizationProvider>
    </div>
        </div>
        <div>
      
        </div>
        </div>

        <div className='my-5'>
        <span className='flex justify-between'>
      <h1 className='mb-4 font-semibold'>Today's Update</h1>
      <Link className='text-indigo-800 mr-6'>View Last Update</Link>
      </span>
      <span className=" flex justify-between mr-5">
        <input type="text" className='w-4/5 h-12 border-gray-300 border rounded-md mr-6' />
        <button className=" bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 py-1 px-6 rounded-md">Submit</button>
        </span>
        </div>
      </div>
    </div>
    </CardContent>
    
  </Card>
					</Box> 
				</Box> 
			</div> 
		</div> 
	); 
} 

export default App;
