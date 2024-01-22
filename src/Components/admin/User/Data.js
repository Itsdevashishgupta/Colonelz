import React, { useState, useEffect } from 'react';
import { generateDummyData } from './DummyData';


const App = () => {
  const [data] = useState(generateDummyData(100));
  const [currentPage, setCurrentPage] = useState(1);
  const [searchText] = useState({});
  const [quickSearch] = useState('');
  const [selectedRows, setSelectedRows] = useState([]);
  const [sortColumn, setSortColumn] = useState(null);
  const [sortOrder, setSortOrder] = useState('asc');
  const [rowsPerPage] = useState(10);
  const [selectedFilters] = useState({});
  

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

 

  const toggleRowSelection = (index) => {
    if (selectedRows.includes(index)) {
      setSelectedRows(selectedRows.filter((selectedIndex) => selectedIndex !== index));
    } else {
      setSelectedRows([...selectedRows, index]);
    }
  };

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

  return (
    <div className="container mx-auto bg-white pt-3 mt-4">
      {/* <div className="mb-4 flex justify-between ml-6">
        <div>
       
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
                    {['Project Type', 'Phase', 'Tag'].map((column) => (
  <MenuItem key={column} value={column} style={{ fontFamily: "'Jost', sans-serif" }}>
    {column}
  </MenuItem>
))}

                  </Select>
                  <input
                    type="text"
                    placeholder="Enter filter value..."
                    className="ml-2  border-2 border-slate-200 rounded"
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
                className="ml-2 px-2 py-1 bg-indigo-500 text-white rounded-md"
                onClick={handleAddFilter}
              >
                Add
              </button>
              <button
                className="ml-2 px-2 py-1 bg-slate-200 text-black hover:bg-[#e96666] rounded-md"
                onClick={handleClearAllFilters}
              >
                Clear All
              </button>
              <button
                className="ml-2 px-2 py-1 bg-green-500 text-white rounded-md"
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
          className="p-2 border rounded mr-2"
          value={quickSearch}
          onChange={(e) => setQuickSearch(e.target.value)}
        />
      </div> */}
      <table className="w-full">
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
      className={selectedRows.includes(index) ? '' : ''}
      onClick={() => toggleRowSelection(index)}
    >
      {Object.keys(item).map((column) => (
        // Exclude 'Project Type' column from rendering
        column !== 'Project_Type' && (
          <td
            key={column}
            className={`border-b-2 p-2 pl-6 text-wrap`}
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
                    paddingLeft:"5px",
                    paddingRight:"5px",
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
      {/* <div className=' float-right flex'>
  
      
      <div className="mt-6 ">
        <button
          className="mr-2  text-slate-400 h-[5px]"
          onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
          disabled={currentPage === 1}
        >
         <ChevronLeft/>
        </button>
        <button
          className=" text-slate-400"
          onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
          disabled={currentPage === totalPages}
       >
           <ChevronRight/>
        </button>
      </div>
      </div> */}
      
    </div>
  );
};

export default App;
