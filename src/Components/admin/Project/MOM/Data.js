import React, { useState, useEffect } from 'react';
import { generateDummyData } from './DummyData';
import {  ListFilter} from 'lucide-react';
import Popover from '@mui/material/Popover';
import Button from '@mui/material/Button';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import { Box, Drawer } from '@mui/material';

const App = () => {
  const [data] = useState(generateDummyData(100));
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText, setSearchText] = useState({});
  const [quickSearch, setQuickSearch] = useState('');
  const [selectedRows] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [rowsPerPage] = useState(10);
  const [selectedFilters, setSelectedFilters] = useState({});
  const [dynamicFilters, setDynamicFilters] = useState([]);

  const [filterAnchorEl, setFilterAnchorEl] = useState(null);
  
  

  const handleFilterClick = (event) => {
    setFilterAnchorEl(event.currentTarget);
  };

  const handleFilterClose = () => {
    setFilterAnchorEl(null);
  };

  const handleApplyFilters = () => {
    // Apply your dynamic filters logic here
    // Combine dynamic and static filters
    const combinedFilters = {
      ...selectedFilters,
      ...dynamicFilters.reduce((acc, filter) => {
        if (filter.column && filter.value) {
          acc[filter.column] = filter.value;
        }
        return acc;
      }, {}),
    };
    setSearchText(combinedFilters);
    handleFilterClose();
  };

  const handleClearAllFilters = () => {
    setSearchText({});
    setSelectedFilters({});
    setDynamicFilters([]);
    handleFilterClose();
  };

  const openFilter = Boolean(filterAnchorEl);
  const filterId = openFilter ? 'filter-popover' : undefined;


  const handleAddFilter = () => {
    setDynamicFilters([...dynamicFilters, { column: '', value: '' }]);
  };

  const handleRemoveFilter = (index) => {
    const updatedFilters = [...dynamicFilters];
    updatedFilters.splice(index, 1);
    setDynamicFilters(updatedFilters);
  };

  const filteredData = data.filter((item) =>
    Object.entries({ ...searchText, ...selectedFilters }).every(
      ([column, value]) =>
        item[column] &&
        item[column].toLowerCase().includes(value.toLowerCase())
    )
  );

  const quickSearchFilteredData = filteredData.filter((item) =>
    Object.values(item).some((value) =>
      value.toLowerCase().includes(quickSearch.toLowerCase())
    )
  );

  const sortedData = [...quickSearchFilteredData].sort((a, b) => {
    const columnA = sortColumn ? a[sortColumn].toLowerCase() : '';
    const columnB = sortColumn ? b[sortColumn].toLowerCase() : '';

    if (sortOrder === 'asc') {
      return columnA.localeCompare(columnB);
    } else {
      return columnB.localeCompare(columnA);
    }
  });

  

  const paginatedData = sortedData.slice(
    (currentPage - 1) * rowsPerPage,
    currentPage * rowsPerPage
  );



  const handleSort = (column) => {
    setSortColumn(column);
    setSortOrder((prevOrder) => (prevOrder === 'asc' ? 'desc' : 'asc'));
  };


  useEffect(() => {
    setCurrentPage(1);
  }, [data, searchText, selectedFilters, sortColumn, sortOrder, rowsPerPage]);

  const handleProjectClick = (url) => {
    // Navigate to the user's URL when the project name is clicked
    window.location.href = url;
  };

  
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
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 600,fontFamily:"'Nunito Sans', sans-serif", marginBottom:8 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <div className='flex justify-between'>
    <div>
     <h1 className='ml-8 font-semibold text-2xl mt-12'>Devashish Project </h1>
     <h1 className='ml-8 mt-1  text-base font-medium'>Date:21/01/2023</h1>

     </div>
     <div className='mt-12 mr-4 '></div>
     </div>
     <div className=' mt-5 ml-8'>
      <span className='flex'><h1 className=' text-xl font-semibold' >Source Of Meeting-  </h1>
      <p className=' text-lg ml-2'>  Online</p></span>
      <span className='mt-4'><h1 className=' text-xl font-semibold mt-3' >Meeting attendees  </h1>
      <span className='flex'>
      <h1 className=' text- font-semibold' >Client Name:  </h1>
      <p className=' text-lg ml-2'>  Priya</p>
      </span>
      <span className='flex'>
      <h1 className=' text- font-semibold' >Colonelz Team:  </h1>
      <p className=' text-lg ml-2'>  Ar. Vartika</p>
      </span>
      <span className='flex'>
      <h1 className=' text- font-semibold' >Consultant:  </h1>
      <p className=' text-lg ml-2'>  Garvit</p>
      </span>
      <span className='flex'>
      <h1 className=' text- font-semibold' >Architect:  </h1>
      <p className=' text-lg ml-2'>  Priya</p>
      </span>
      </span>
     </div>

     <div className='mt-5 ml-8'> <h1 className=' text-xl font-bold ' >Documents: </h1> <button className='bg-gradient-to-tr from-indigo-200 to-indigo-100 text-indigo-800 py-1 px-4 rounded-sm'>Show Document</button></div>

     <div className='mt-5 ml-8'>
       <h1 className=' text-xl font-bold '>Remarks</h1>
       <ul className=' list-disc  mr-4  pt-4 pl-4 h-[60vh] overflow-y-auto border-2 rounded-md' style={{listStyleType:"disc"}}>
      <li className='ml-6 mr-6 mt-2' typeof='disc'>	Soft serve machine will be placed over under counter ice cube machine.</li>
      <li className='ml-6 mr-6 mt-2' typeof='disc'>	3 Barrels and Electrical water boiler will be placed in centre of back wall.</li>
      <li className='ml-6 mr-6 mt-2' typeof='disc'> Store front facade both edges will be straight.  </li>
      <li className='ml-6 mr-6 mt-2' typeof='disc'>	Front counter- right side topping (10-12 no of topping) counter will be placed with pick-up counter and left side food display counter will be placed with order counter.
  </li>
  <li className='ml-6 mr-6 mt-2'> 10 Tea powder stand placed on back side wall.</li>
  <li className='ml-6 mr-6 mt-2'> 2 inductions will be used intent of 1 dual induction, and storage provision for induction will be placed under the counter.</li>
  <li className='ml-6 mr-6 mt-2'> Croffle maker placed on back side.</li>
  <li className='ml-6 mr-6 mt-2'> Coffee machine will be placed on the front counter.</li>
  <li className='ml-6 mr-6 mt-2'> Reference images will be shared of Glass stand/ holder to the client.</li>
  <li className='ml-6 mr-6 mt-2'> Sealing and Milkshake machine will be placed side by side on the back side.</li>
    </ul>
     </div>
     <div className='mt-5 ml-8'>
       <h1 className=' text-xl font-bold '>Important Notes</h1>
       <ul className=' list-disc  mr-4  pt-4 pl-4 overflow-y-auto border-2 rounded-md' style={{listStyleType:"disc"}}>
      <li className='ml-6 mr-6 mt-2' typeof='disc'>	Soft serve machine will be placed over under counter ice cube machine.</li>
      <li className='ml-6 mr-6 mt-2' typeof='disc'>	3 Barrels and Electrical water boiler will be placed in centre of back wall.</li>
      <li className='ml-6 mr-6 mt-2' typeof='disc'> Store front facade both edges will be straight.  </li>
      <li className='ml-6 mr-6 mt-2' typeof='disc'>	Front counter- right side topping (10-12 no of topping) counter will be placed with pick-up counter and left side food display counter will be placed with order counter.
  </li>
    </ul>
     </div>

    
    
     
    </Box>
  );
  return (
    <div className="container mx-auto bg-white pt-3">
    <div className="mb-4 flex justify-between ml-6">
      <div>
      <div className=' border-[2px] border-indigo-500 rounded-md '>
        <Button
          aria-describedby={filterId}
          onClick={handleFilterClick}
          className="flex border-b-2 border-indigo-500  py-1 rounded-md text-indigo-500"
        >
          <ListFilter className=" " />
          <h1 className="ml-2 " style={{ fontFamily: "'Jost', sans-serif",paddingLeft:"5px" }}>Filter</h1>
        </Button>
        </div>
        <Popover
          id={filterId}
          open={openFilter}
          anchorEl={filterAnchorEl}
          onClose={handleFilterClose}
          anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
          }}
          transformOrigin={{
            vertical: 'top',
            horizontal: 'left',
          }}
        >
          <div className="p-4" 
          style={{ fontFamily: "'Jost', sans-serif" }}>
            {Object.keys(data[0]).map((column) => (
              <div key={column} className="mb-2">
               
              </div>
            ))}
            {dynamicFilters.map((filter, index) => (
              <div key={index} className="flex mb-2 p-[-10px]">
                <Select
                  value={filter.column}
                  onChange={(e) =>
                    setDynamicFilters((prevFilters) => {
                      const updatedFilters = [...prevFilters];
                      updatedFilters[index].column = e.target.value;
                      return updatedFilters;
                    })
                    
                  }
                  displayEmpty
                  className="border rounded"
                  style={{ height: '32px', fontFamily: "'Jost', sans-serif"  }}
                >
                  <MenuItem value="" disabled style={{ fontFamily: "'Jost', sans-serif" }}>
                    Select Column
                  </MenuItem>
                  {Object.keys(data[0]).map((column) => (
                    <MenuItem key={column} value={column} style={{ fontFamily: "'Jost', sans-serif" }}>
                    {column === 'ProjectName' ? 'Project Name' : column === 'Project_Type' ? 'Project Type' : column}
                    </MenuItem>
                  ))}
                </Select>
                <input
                  type="text"
                  placeholder="Enter filter value..."
                  className="ml-2  border-2 border-slate-200 rounded h-8 w-40"
                  value={filter.value}
                  onChange={(e) =>
                    setDynamicFilters((prevFilters) => {
                      const updatedFilters = [...prevFilters];
                      updatedFilters[index].value = e.target.value;
                      return updatedFilters;
                    })
                  }
                />
                <button
                  className="ml-2 px-3 bg-slate-200 text-indigo-600 hover:bg-[#e96666] hover:text-white rounded-full"
                  onClick={() => handleRemoveFilter(index)}
                >
                  X
                </button>
              </div>
            ))}
            <button
              className="ml-2 px-2 py-1 bg-indigo-500 text-white rounded-sm"
              onClick={handleAddFilter}
            >
              Add
            </button>
            <button
              className="ml-2 px-2 py-1 bg-slate-200 text-black hover:bg-[#e96666] rounded-sm"
              onClick={handleClearAllFilters}
            >
              Clear All
            </button>
            <button
              className="ml-2 px-2 py-1 bg-green-500 text-white rounded-sm"
              onClick={handleApplyFilters}
            >
              Apply
            </button>
          </div>
        </Popover>
      </div>
      <input
        type="text"
        placeholder="Quick Search..."
        className="p-2 border rounded mr-8"
        value={quickSearch}
        onChange={(e) => setQuickSearch(e.target.value)}
      />
    </div>
      <table className="w-full overflow-auto overflow-x-auto" style={{overflow:"auto"}}>
      <thead className='bg-[rgb(246,246,247)] border-b-2 pl-4 ml-4'>
  
      <tr className=''>

{Object.keys(data[0]).map((column) => (
  // Exclude 'Project Type' column from rendering
  column !== 'Project_Type' && (
    <th
      key={column}
      className="p-2 pl-6 ml-4 text-left"
    >
       {column === 'ProjectName' ? 'Project Name' : column === 'Project_Type' ? 'Project Type' : column} {sortColumn === column && <span onClick={() => handleSort(column)} className='cursor-pointer'>{sortOrder === 'asc' ? '▲' : '▼'}</span>}
    </th>
  )
))}
</tr>
      </thead>
      <tbody>
  {paginatedData.map((item, index) => (
    <tr
      key={index}
      className={`${selectedRows.includes(index) ? '' : ''} hover:bg-gray-100 cursor-pointer`}
      onClick={toggleDrawer('right',true)}
    >

      {Object.keys(item).map((column) => (
        // Exclude 'Project Type' column from rendering
        column !== 'Project_Type' && (
          <td
            key={column}
            className={`border-b-2 p-4 pl-6 text-wrap`}
          >
            {column === 'ProjectName' ? (
              <div>
                <span
                  className="hover:underline cursor-pointer hover:text-indigo-800"
                  onClick={() => handleProjectClick(`/user/`)}
                  style={{
                    backgroundColor: item['Project Type'] === 'Commercial' ? '#e8e7fd' : (item['Project Type'] === 'Residential' ? '#e2f6e8' : 'inherit'),
                    color: item['Project Type'] === 'Commercial' ? 'blue' : (item['Project Type'] === 'Residential' ? 'green' : 'inherit'),
                    borderRadius:"5%",
                    paddingLeft:"7px",
                    paddingRight:"7px",
                    // Add more styling based on your requirement
                  }}
                >
                  {item[column]}
                </span>
                {/* Additional line for the entry */}
              
              </div>
            ) : (
              <p className={` rounded-md`}>{item[column]}</p>
            )}
          </td>
        )
      ))}

    </tr>
  ))}
</tbody>

    </table>
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
};

export default App;
