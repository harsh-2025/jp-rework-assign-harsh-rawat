// import { useEffect, useState } from "react";

// function NewOrder() {
//     const [data, setData] = useState([]);
//     const [filteredData, setFilteredData] = useState([]);
//     const [searchTerm, setSearchTerm] = useState('');
//     const [currentPage, setCurrentPage] = useState(1);
//   const entriesPerPage = 10;
//     async function fetchSheetData() {
//         const apiUrl = "https://sheetdb.io/api/v1/bo5isccg0o5oh";
      
//         try {
//           const response = await fetch(apiUrl);
//           if (!response.ok) {
//             throw new Error(`HTTP error! Status: ${response.status}`);
//           }
//           const data = await response.json();
//         //   console.log("Data fetched:", data);
//             //   return data;     
//             setData(data); // Set the fetched data to the state
//             setFilteredData(data); // Initially, all data is shown


//         } catch (error) {
//           console.error("Error fetching data:", error);
//         }
//       }
//       useEffect(() => {
//         fetchSheetData(); // Fetch data when the component mounts
//       }, []);
//       useEffect(() => {
//         const filtered = data.filter(item => {
//           // Combine all the fields into a single string to match against search term
//           const searchableString = `${item.id} ${item.user} ${item.project} ${item.address} ${item.date} ${item.status}`.toLowerCase();
//           return searchableString.includes(searchTerm.toLowerCase());
//         });
//           setFilteredData(filtered);
//           setCurrentPage(1); // Reset to the first page when search term changes

//       }, [searchTerm, data]);
//       const indexOfLastEntry = currentPage * entriesPerPage;
//       const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
//       const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
    
//       // Calculate the total number of pages
//       const totalPages = Math.ceil(filteredData.length / entriesPerPage);
    
//       const paginate = (pageNumber) => {
//         setCurrentPage(pageNumber);
//       };
//     return (<div className="container mx-auto mt-8">
//     <h1 className="text-2xl font-bold mb-4">Project Data</h1>
//         <div className="overflow-x-auto">
//         <div className="mb-4">
//         <input
//           type="text"
//           className="w-full p-2 border border-gray-300 rounded"
//           placeholder="Search..."
//           value={searchTerm}
//           onChange={(e) => setSearchTerm(e.target.value)}
//         />
//       </div>
//       <table className="min-w-full bg-white border border-gray-200">
//         <thead>
//           <tr>
//             <th className="px-6 py-2 text-left border-b">ID</th>
//             <th className="px-6 py-2 text-left border-b">User</th>
//             <th className="px-6 py-2 text-left border-b">Project</th>
//             <th className="px-6 py-2 text-left border-b">Address</th>
//             <th className="px-6 py-2 text-left border-b">Date</th>
//             <th className="px-6 py-2 text-left border-b">Status</th>
//           </tr>
//         </thead>
//         <tbody>
//           {filteredData.length > 0 ?(filteredData.map((item) => (
//             <tr key={item.id} className="hover:bg-gray-100">
//               <td className="px-6 py-2 border-b">{item.id}</td>
//               <td className="px-6 py-2 border-b">{item.user}</td>
//               <td className="px-6 py-2 border-b">{item.project}</td>
//               <td className="px-6 py-2 border-b">{item.address}</td>
//               <td className="px-6 py-2 border-b">{item.date}</td>
//               <td className={`px-6 py-2 border-b ${item.status === 'In Progress' ? 'text-yellow-500' : 'text-green-500'}`}>
//                 {item.status}
//               </td>
//             </tr>
//           ))):<tr>
//           <td colSpan="6" className="text-center py-4">
//             No matching records found.
//           </td>
//         </tr>}
//         </tbody>
//       </table>
//         </div>
//         <div className="mt-4 flex justify-center">
//         {Array.from({ length: totalPages }, (_, index) => (
//           <button
//             key={index}
//             onClick={() => paginate(index + 1)}
//             className={`mx-1 px-4 py-2 rounded ${
//               currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'
//             }`}
//           >
//             {index + 1}
//           </button>
//         ))}
//       </div>
//   </div>
// );

// }
// export default NewOrder


import { ArrowUpDown } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FaSort, FaFilter } from 'react-icons/fa';
import CreateOffer from './CreateOffer';

const DataTable = () => {
    const [isOpen, setIsOpen] = useState(false); // State for dropdown visibility
    const [issortopen, setissortopen] = useState(false);
    const [sortField, setSortField] = useState(''); // State for selected sort field
    const [sortOrder, setSortOrder] = useState(''); 
  const [data, setData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState([]); // For status filter, now it's an array
  const [currentPage, setCurrentPage] = useState(1);
  const entriesPerPage = 10;
  const [sortConfig, setSortConfig] = useState({ key: '', direction: '' }); // For sorting
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  const handleSort = (field, order) => {
    setSortField(field);
    setSortOrder(order);
    const sortedData = [...data].sort((a, b) => {
        if (field === 'user') {
            return order === 'asc' ? a.user.localeCompare(b.user) : b.user.localeCompare(a.user);
        } else if (field === 'id') {
            return order === 'asc' ? a.id.localeCompare(b.id) : b.id.localeCompare(a.id);
        }
        return 0;
    });
    setData(sortedData); // Update the data state with sorted data
};


  // Fetching data from API
  const fetchSheetData = async () => {
    const apiUrl = "https://sheetdb.io/api/v1/bo5isccg0o5oh";
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      setData(result); 
      setFilteredData(result); 
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  const addOffer = async (newOffer) => {
    const apiUrl = "https://sheetdb.io/api/v1/bo5isccg0o5oh";
    try {
        const response = await fetch(apiUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify([newOffer]), // Wrap in an array
        });

        if (response.ok) {
            const result = await response.json();
            console.log("Offer added:", result);
            setOffers((prev) => [...prev, newOffer]); // Update local state with the new offer
        } else {
            console.error("Error adding offer:", response.statusText);
        }
    } catch (error) {
        console.error("Error adding offer:", error);
    }
};
  useEffect(() => {
    fetchSheetData(); 
  }, []);

  // Filtering and searching
  useEffect(() => {
    let filtered = data;

    // Apply search filter
    if (searchTerm) {
      filtered = filtered.filter(item => {
        const searchableString = `${item.id} ${item.user} ${item.project} ${item.address} ${item.date} ${item.status}`.toLowerCase();
        return searchableString.includes(searchTerm.toLowerCase());
      });
    }

    // Apply status filter
    if (statusFilter.length > 0) {
        filtered = filtered.filter(item => statusFilter.includes(item.status));
      }
    // Apply sorting
    if (sortConfig.key) {
      filtered = filtered.sort((a, b) => {
        if (a[sortConfig.key] < b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? -1 : 1;
        }
        if (a[sortConfig.key] > b[sortConfig.key]) {
          return sortConfig.direction === 'asc' ? 1 : -1;
        }
        return 0;
      });
    }

    setFilteredData(filtered);
    setCurrentPage(1); 
  }, [searchTerm, statusFilter, sortConfig, data]);

  // Pagination logic
  const indexOfLastEntry = currentPage * entriesPerPage;
  const indexOfFirstEntry = indexOfLastEntry - entriesPerPage;
  const currentEntries = filteredData.slice(indexOfFirstEntry, indexOfLastEntry);
  const totalPages = Math.ceil(filteredData.length / entriesPerPage);

  const paginate = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Handle sort by key
//   const handleSort = (key) => {
//     let direction = 'asc';
//     if (sortConfig.key === key && sortConfig.direction === 'asc') {
//       direction = 'desc';
//     }
//     setSortConfig({ key, direction });
//   };
  const statuses = ['In Progress', 'Complete', 'Pending','Approved','Rejected']; // Status options

  const handleSelectAll = (e) => {
    if (e.target.checked) {
      // Select all statuses
      setStatusFilter(statuses);
    } else {
      // Deselect all statuses
      setStatusFilter([]);
    }
  };

  // Function to check if all statuses are selected
  const isAllSelected = statusFilter.length === statuses.length;

  // Function to handle individual status checkbox change
  const handleStatusChange = (e, status) => {
    if (e.target.checked) {
      // Add status to filter
      setStatusFilter((prev) => [...prev, status]);
    } else {
      // Remove status from filter
      setStatusFilter((prev) => prev.filter((s) => s !== status));
    }
  };
  const [selectedOrders, setSelectedOrders] = useState(new Array(50).fill(false)); // Example for 50 entries

  const handleSelectAllOrder = (e) => {
    const isChecked = e.target.checked;
    setSelectedOrders(new Array(data.length).fill(isChecked)); // Set all to checked or unchecked
};

const handleSelectOrder = (index) => {
    const updatedSelectedOrders = [...selectedOrders];
    updatedSelectedOrders[index] = !updatedSelectedOrders[index]; // Toggle selection
    setSelectedOrders(updatedSelectedOrders);
};
const [offers, setOffers] = useState([]); // Your offers data
    // console.log(offers);
const [showCreateOffer, setShowCreateOffer] = useState(false);

    // const handleCreateOffer = (newOffer) => {
    //     // Here, you would typically send a request to your API to save the new offer.
    //     // For now, we'll just update the local state.
    //     setOffers((prev) => [...prev, newOffer]);
    //     setShowCreateOffer(false); // Hide the form after creating
    // };
    const handleCreateOffer = async (newOffer) => {
        await addOffer(newOffer); // Push the offer to the database
        setOffers((prev) => [...prev, newOffer]);

        setShowCreateOffer(false); // Hide the form after creating
    };
    useEffect(() => {
        fetchSheetData(); 
    }, [offers]);

// Rest of 
  return (
    <div className="container mx-auto mt-8">
      <h1 className="text-2xl font-bold mb-4">Project Data</h1>
      <div className="p-4">
            <button
                onClick={() => setShowCreateOffer((prev) => !prev)}
                className="mb-4 bg-green-500 text-white p-2 rounded"
            >
                {showCreateOffer ? 'Cancel' : 'Create New Offer'}
            </button>
              {showCreateOffer && <CreateOffer onCreate={handleCreateOffer} />}
              </div>
      {/* Filter and Search */}
      <div className="flex justify-between mb-4">
        {/* Filter and Sort Options */}
        <div className="flex space-x-4">
          {/* Status Filter */}
          <div className="relative inline-block text-left">
  <div>
    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
      id="menu-button"           onClick={toggleDropdown}
      aria-expanded="true" aria-haspopup="true">
      <FaFilter className="mr-2 text-gray-600" /> Filter by Status
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.292 7.707a1 1 0 011.415 0L10 11.003l3.293-3.296a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
  </div>

  {/* Dropdown content */}
  {isOpen && (
        <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {/* "All" option */}
            <label className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              <input
                type="checkbox"
                checked={isAllSelected}
                onChange={handleSelectAll}
                className="mr-2"
              />
              All
            </label>
            
            {/* Individual status options */}
            {statuses.map((status) => (
              <label key={status} className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
                <input
                  type="checkbox"
                  value={status}
                  checked={statusFilter.includes(status)}
                  onChange={(e) => handleStatusChange(e, status)}
                  className="mr-2"
                />
                {status}
              </label>
            ))}
          </div>
        </div>
      )}
                  </div>
               
                  {/* Sort by ID */}
                 <div><button onClick={()=>setissortopen(!issortopen)}> <ArrowUpDown/></button> {issortopen && (
        <div className="origin-top-right absolute left-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
          <div className="py-1">
            {/* Sorting Options */}
            <div className="px-4 py-2 text-sm text-gray-700">Sort By:</div>
            <label className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              <span className="mr-2">User</span>
              <button
                onClick={() => handleSort('user', 'asc')}
                className="text-gray-500 hover:text-gray-700"
              >
                Asc
              </button>
              <button
                onClick={() => handleSort('user', 'desc')}
                className="text-gray-500 hover:text-gray-700 ml-2"
              >
                Desc
              </button>
            </label>
            <label className="flex items-center px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">
              <span className="mr-2">ID</span>
              <button
                onClick={() => handleSort('id', 'asc')}
                className="text-gray-500 hover:text-gray-700"
              >
                Asc
              </button>
              <button
                onClick={() => handleSort('id', 'desc')}
                className="text-gray-500 hover:text-gray-700 ml-2"
              >
                Desc
              </button>
            </label>
          </div>
        </div>
      )}</div>
          <button
            onClick={() => handleSort('id')}
            className="flex items-center space-x-2 p-2 border border-gray-300 rounded"
          >
            <FaSort className="text-gray-600" />
            <span>Sort by ID</span>
          </button>

          {/* Sort by User */}
          <button
            onClick={() => handleSort('user')}
            className="flex items-center space-x-2 p-2 border border-gray-300 rounded"
          >
            <FaSort className="text-gray-600" />
            <span>Sort by User</span>
          </button>
        </div>

        {/* Search input */}
        <div className="flex items-center">
          <input
            type="text"
            className="w-full p-2 border border-gray-300 rounded"
            placeholder="Search..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
      </div>

      {/* Table */}
      {/* <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200">
          <thead>
            <tr>
              <th className="px-6 py-2 text-left border-b">ID</th>
              <th className="px-6 py-2 text-left border-b">User</th>
              <th className="px-6 py-2 text-left border-b">Project</th>
              <th className="px-6 py-2 text-left border-b">Address</th>
              <th className="px-6 py-2 text-left border-b">Date</th>
              <th className="px-6 py-2 text-left border-b">Status</th>
            </tr>
          </thead>
          <tbody>
            {currentEntries.length > 0 ? (
              currentEntries.map((item) => (
                <tr key={item.id} className="hover:bg-gray-100">
                  <td className="px-6 py-2 border-b">{item.id}</td>
                  <td className="px-6 py-2 border-b">{item.user}</td>
                  <td className="px-6 py-2 border-b">{item.project}</td>
                  <td className="px-6 py-2 border-b">{item.address}</td>
                  <td className="px-6 py-2 border-b">{item.date}</td>
                  <td className={`px-6 py-2 border-b ${item.status === 'In Progress' ? 'text-yellow-500' : 'text-green-500'}`}>
                    {item.status}
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6" className="text-center py-4">
                  No matching records found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div> */}
<div>
            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th className="px-6 py-3 text-left">
                            <input
                                type="checkbox"
                                onChange={handleSelectAllOrder}
                                checked={selectedOrders.every(Boolean)} // Check if all are selected
                            />
                        </th>
                        <th className="px-6 py-3 text-left">ID</th>
                        <th className="px-6 py-3 text-left">User</th>
                        <th className="px-6 py-3 text-left">Project</th>
                        <th className="px-6 py-3 text-left">Address</th>
                        <th className="px-6 py-3 text-left">Date</th>
                        <th className="px-6 py-3 text-left">Status</th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {currentEntries.length>0 ?(currentEntries.map((order, index) => (
                        <tr key={order.id} className={`hover:bg-gray-100 ${selectedOrders[index] ? 'bg-blue-100' : ''}`}>
                            <td className="px-6 py-4">
                                <input
                                    type="checkbox"
                                    checked={selectedOrders[index]}
                                    onChange={() => handleSelectOrder(index)}
                                />
                            </td>
                            <td className="px-6 py-4">{order.id}</td>
                            <td className="px-6 py-4">{order.user}</td>
                            <td className="px-6 py-4">{order.project}</td>
                            <td className="px-6 py-4">{order.address}</td>
                            <td className="px-6 py-4">{order.date}</td>
                            <td className="px-6 py-4">{order.status}</td>
                        </tr>
                    ))):(<tr>
                        <td colSpan="6" className="text-center py-4">
                          No matching records found.
                        </td>
                      </tr>)}
                </tbody>
            </table>
        </div>
      {/* Pagination Controls */}
      <div className="mt-4 flex justify-center">
        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index}
            onClick={() => paginate(index + 1)}
            className={`mx-1 px-4 py-2 rounded ${currentPage === index + 1 ? 'bg-blue-500 text-white' : 'bg-gray-200'}`}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default DataTable;

