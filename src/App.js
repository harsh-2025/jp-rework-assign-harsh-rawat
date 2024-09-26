// import { useEffect, useState } from 'react';
// import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
// import Sidebar from './components/sidebar';
// import Header from './components/header';
// import RightSidebar from './components/rightsidebar';
// import useThemeStore from './store/useThemestore';
// import Dashboard from './components/Dashboard';
// // import { useThemeStore } from './store/useThemestore';
// // import { useThemeStore } from '../store/useThemestore'; // Import the theme store

// export default function App() {
//   // const [darkMode, setDarkMode] = useState(false);
//   const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to toggle sidebar
//   const { darkMode, setDarkMode } = useThemeStore(); // Access the state and setter
//   console.log(darkMode);

//   // Load the theme from localStorage on mount (optional)
//   return (
//     <div className={darkMode ? 'dark' : ''}>
     
//     </div>
//   );
// }


import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa'; // Import icons
import Sidebar from './components/sidebar';
import Header from './components/header';
import RightSidebar from './components/rightsidebar';
import useThemeStore from './store/useThemestore';
import Dashboard from './components/Dashboard'; // Assuming Dashboard is the Home page
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'; // Import React Router components
import Order from './components/Order'; // Assuming you have an Order component
import Home from './components/Home';
import Basic from './components/Baisc';
import NewOrder from './components/neworder';

export default function App() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true); // State to toggle sidebar
  const { darkMode, setDarkMode } = useThemeStore(); // Access the state and setter

  return (
    <Router>
      <div className={darkMode ? 'dark' : ''}>
       
        {/* Navigation buttons */}
        {/* <div className="navigation-buttons">
          <Link to="/home" className="nav-btn">
            Home
          </Link>
          <Link to="/order" className="nav-btn">
            Order
          </Link>
        </div> */}

        {/* Main content with routes */}
        <div className="main-content">
          <Routes>
            <Route path='/' element={<Basic/>}/>
            <Route path="/dashboard" element={<Home />} />  {/* Home page */}
            <Route path="/order" element={<Order />} /> {/* Order page */}
            <Route path="ord" element={<NewOrder/>}/>
          </Routes>
        </div>
      </div>
    </Router>
  );
}
