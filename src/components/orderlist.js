import { ArrowDown, ArrowUp, ArrowUpDown, ArrowUpDownIcon, CalendarDays, CalendarRange, ChevronLeft, ChevronRight, Command, DotIcon, ListFilter, Plus, Search, Square, UserIcon } from 'lucide-react';
import React, { useEffect, useState } from 'react';
import { FaSort, FaFilter } from 'react-icons/fa';
import CreateOffer from './CreateOffer';

const OrderList = () => {
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
            return order === 'asc' ? a.orderid.localeCompare(b.orderid) : b.orderid.localeCompare(a.orderid);
        }
        return 0;
    });
    setData(sortedData); // Update the data state with sorted data
};

const getStatusClass = (status) => {
    switch (status) {
        case 'In Progress':
            return 'text-blue-500';
        case 'Complete':
            return 'text-green-500';
        case 'Pending':
            return 'text-yellow-500';
        case 'Approved':
            return 'text-orange-500';
        case 'Rejected':
            return 'text-gray-500';
        default:
            return 'text-gray-400';
    }
};

  // Fetching data from API
  const fetchSheetData = async () => {
    const apiUrl = "https://sheetdb.io/api/v1/qrs2sevpavuxq";
    try {
      const response = await fetch(apiUrl);
      const result = await response.json();
      setData(result); 
        setFilteredData(result); 
        // console.log(response.json());
        // console.log(result);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
    // console.log(data);
  const addOffer = async (newOffer) => {
    const apiUrl = "";
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
    const handleNext = () => {
        if (currentPage < totalPages) {
          paginate(currentPage + 1);
        }
      };
    
      const handlePrev = () => {
        if (currentPage > 1) {
          paginate(currentPage - 1);
        }
      };
      const [selectedOption, setSelectedOption] = useState(null);

      const toggleOption = (option) => {
        setSelectedOption(selectedOption === option ? null : option); // Toggle visibility
      };
      const selectedCount = statusFilter.length;

// Rest of 
  return (
    <div className="py-[2.5rem] px-[2.5rem] min-w-[1000px] max-w-[1600px] space-y-[2rem]">
          <h1 className="text-card_heading font-high_heading text-element_color dark:text-dark_color  mb-4">Order List</h1>
          
          <div className='bg-gray_color flex flex-row items-center px-[1rem] py-[1rem] rounded-xl dark:bg-dark_color_new'>
    <div className="flex flex-row dark:text-dark_color text-element_color w-2/3 items-center">
        <div className='flex items-center space-x-[2rem]'>
            <button className={`flex items-center h-10 px-2 rounded-xl border-[0.5px] border-[#333333] hover:bg-white dark:hover:bg-dark_color dark:border-[#fff1f5]`} ><Plus /></button>
            
                      <button className={`flex items-center h-10 px-2 rounded-xl border-[0.5px] border-[#333333] hover:bg-white dark:hover:bg-dark_color dark:border-[#fff1f5] ${isOpen ? 'bg-white dark:bg-dark_color' : ''}  `} onClick={toggleDropdown}>
         
                          <ListFilter />    {selectedCount > 0 && (
  <div className="mx-2 flex space-x-1 ">
    {/* Add dots based on the selected statuses */}
    {statusFilter.map((status, index) => (
      <span
        key={index}
        className={`h-6 w-6 rounded-full ${getStatusClass(status)}`}
      > <DotIcon/> </span>
    ))}
  </div>
)} </button>
                      {/* <div>
    <button type="button" className="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500" 
      id="menu-button"           onClick={toggleDropdown}
      aria-expanded="true" aria-haspopup="true">
      <FaFilter className="mr-2 text-gray-600" /> Filter by Status
      <svg className="-mr-1 ml-2 h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path fillRule="evenodd" d="M5.292 7.707a1 1 0 011.415 0L10 11.003l3.293-3.296a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
      </svg>
    </button>
                      </div> */}
                
                      <button className={`flex items-center h-10 px-2 rounded-xl border-[0.5px] border-[#333333] hover:bg-white dark:hover:bg-dark_color dark:border-[#fff1f5] ${issortopen ? 'bg-white dark:bg-dark_color' : ''}  `} onClick={() => setissortopen(!issortopen)}>
                          <ArrowUpDownIcon /></button>
                  </div>
                 
              </div>
              
    <div className="relative w-full max-w-[500px]">
        <input
            className="bg-gray-200 py-2 px-4 pl-10 pr-10 w-full rounded-md dark:text-element_color"
                      placeholder="Search"
                      value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
        />
        <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
        <Command className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              </div>
              
</div>
          {isOpen && (
              <div className="absolute w-56 text-mid_heading rounded-xl shadow-lg bg-gray_color dark:bg-dark_color_new ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
                  <div className="py-1">
                      {/* "All" option */}
                      <label
                          className="flex items-center px-4 py-2  text-element_color dark:text-dark_color hover:bg-white dark:hover:bg-dark_color cursor-pointer">
                          <input
                              type="checkbox"
                              checked={isAllSelected}
                              onChange={handleSelectAll}
                              className="mr-2 h-5 w-5" // Increase size of checkbox
                          />
                          All
                      </label>

                      {/* Individual status options */}
                      {statuses.map((status) => (
                          <label
                              key={status}
                              className="flex items-center px-4 py-2 text-element_color dark:text-dark_color hover:bg-white dark:hover:bg-dark_color cursor-pointer">

                              <input
                                  type="checkbox"
                                  value={status}
                                  checked={statusFilter.includes(status)}
                                  onChange={(e) => handleStatusChange(e, status)}
                                  className="mr-2 h-5 w-5" // Increase size of checkbox
                              />
                              {status}
                          </label>
                      ))}
                  </div>
              </div>
          )}
{issortopen && (
      <div className="absolute w-56 rounded-xl shadow-lg bg-gray_color dark:bg-dark_color_new ring-1 ring-black ring-opacity-5 focus:outline-none z-10">
        <div className="py-1">
          {/* Sorting Options */}
          <div className="px-4 py-2  text-element_color dark:text-dark_color text-card_heading font-element_heading">Sort By:</div>
          
          {/* User Option */}
          <div className="flex items-center justify-between px-4 py-2 text-mid_heading ">
            <span>User</span>
            <div className='flex flex-row space-x-[1rem]'>
              <button
                onClick={() => handleSort('user', 'asc')}
                className="px-2 py-2 rounded-xl flex items-center border-[0.5px] hover:bg-white dark:text-dark_color text-element_color dark:hover:bg-dark_color border-[#333333] dark:border-[#fff1f5]"
              >
                <span><ArrowUp className='h-6 w-6'/> </span>
              </button>
              <button
                onClick={() => handleSort('user', 'desc')}
                className="px-2 py-2 rounded-xl flex items-center border-[0.5px] hover:bg-white dark:text-dark_color text-element_color dark:hover:bg-dark_color border-[#333333] dark:border-[#fff1f5]"
              >
                <span ><ArrowDown className='w-6 h-6 '/> </span>
              </button>
            </div>
          </div>

          {/* Order ID Option */}
          <div className="flex items-center justify-between px-4 py-2 text-mid_heading ">
            <span>Order ID</span>
            <div className='flex flex-row space-x-[1rem]'>
              <button
                onClick={() => handleSort('id', 'asc')}
                className="px-2 py-2 rounded-xl flex items-center border-[0.5px] hover:bg-white dark:text-dark_color text-element_color dark:hover:bg-dark_color border-[#333333] dark:border-[#fff1f5]"
              >
                <span><ArrowUp className='h-6 w-6'/> </span>
                </button>
              <button
                onClick={() => handleSort('id', 'desc')}
                className="px-2 py-2 rounded-xl flex items-center border-[0.5px] hover:bg-white dark:text-dark_color text-element_color dark:hover:bg-dark_color border-[#333333] dark:border-[#fff1f5]"
              >
                <span ><ArrowDown className='w-6 h-6 '/> </span>
                </button>
            </div>
          </div>
        </div>
      </div>
    )}

          
      
      
<div className='bg-white dark:bg-dark_color text-element_color dark:text-dark_color rounded-xl'>
<table className="min-w-full divide-y divide-gray-400">
                <thead className="text-gray_color font-light">
                    <tr className=''>
                        <th className="px-6 py-3 text-left">
                            <input
                                  type="checkbox"
                                  className='mr-2 h-4 w-4'
                                onChange={handleSelectAllOrder}
                                checked={selectedOrders.every(Boolean)} // Check if all are selected
                            />

                        </th>
                        <th className="px-6 py-3 text-left font-small_element_heading text-mid_heading">Order ID</th>
                        <th className="px-6 py-3 text-left font-small_element_heading text-mid_heading">User</th>
                        <th className="px-6 py-3 text-left font-small_element_heading text-mid_heading">Project</th>
                        <th className="px-6 py-3 text-left font-small_element_heading text-mid_heading">Address</th>
                        <th className="px-6 py-3 text-left font-small_element_heading text-mid_heading">Date</th>
                        <th className="px-6 py-3 text-left font-small_element_heading text-mid_heading">Status</th>
                    </tr>
                </thead>
                <tbody className=" divide-y divide-gray_color">
                    {currentEntries.length>0 ?(currentEntries.map((order, index) => (
                        <tr key={order.id} className={`hover:bg-gray_color dark:hover:bg-dark_color_new  text-element_color dark:text-dark_color ${selectedOrders[index] ? 'bg-gray_color dark:bg-dark_color_new' : ''}`}>
                            <td className="px-6 py-4">
                                <input
                                    type="checkbox"
                                    className='mr-2 h-4 w-4'
                                    checked={selectedOrders[index]}
                                    onChange={() => handleSelectOrder(index)}
                                />
                            </td>
                            <td className="px-6 py-4">{order.orderid}</td>
                            <td className="px-6 py-4"><span className='flex flex-row '><UserIcon className='rounded-full border-[1px] dark:border-[#fff1f5] border-[#333333]  mr-2'/> {order.user}</span></td>
                            <td className="px-6 py-4">{order.project}</td>
                            <td className="px-6 py-4">{order.address}</td>
                            <td className="px-6 py-4"><span className='flex flex-row '><CalendarDays className='mr-2'/>{order.date}</span></td>
                            <td className="px-6 py-4 "><span className={getStatusClass(order?.status)} ><span className="flex flex-row"><DotIcon/> {order.status}</span></span></td>
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
      <div className="mt-4 flex justify-end items-end">
      <button
        onClick={handlePrev}
        className={`mx-1 px-2 py-2 border-[0.5px] hover:bg-gray_color dark:text-dark_color text-element_color dark:hover:bg-dark_color_new border-[#333333] dark:border-[#fff1f5] rounded-xl`}
        disabled={currentPage === 1}
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      
      {Array.from({ length: totalPages }, (_, index) => (
        <button
          key={index}
          onClick={() => paginate(index + 1)}
          className={`mx-1 px-4 py-2 border-[0.5px] hover:bg-gray_color dark:text-dark_color text-element_color dark:hover:bg-dark_color_new border-[#333333] dark:border-[#fff1f5] rounded-xl ${currentPage === index + 1 ? 'bg-gray_color text-element_color dark:bg-dark_color_new dark:text-dark_color' : ''}`}
        >
          {index + 1}
        </button>
      ))}
      
      <button
        onClick={handleNext}
        className={`mx-1 px-2 py-2 border-[0.5px] hover:bg-gray_color dark:text-dark_color text-element_color dark:hover:bg-dark_color_new border-[#333333] dark:border-[#fff1f5] rounded-xl`}
        disabled={currentPage === totalPages}
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
    </div>
  );
};

export default OrderList;

