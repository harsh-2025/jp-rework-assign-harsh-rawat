import useThemeStore from "../store/useThemestore";
import Dashboard from "./Dashboard";
import Head from "./Head";
import Header from "./header";
import RightSidebar from "./rightsidebar";
import Sidebar from "./sidebar";

function Home() {
    const { darkMode, setDarkMode } = useThemeStore(); // Access the state and setter
    const { sideBarOpen, setSideBarOpen } = useThemeStore();
    return (
        <>
            <div className={darkMode?'dark':''}>
            <div className="flex min-h-screen ">
        {/* Left Sidebar */}
        <div className={`${sideBarOpen ? 'w-1/6 min-w-[250px]' : ''}  `}>
        <Sidebar/>
        </div>
        {/* Main Content in the Center */}
        <div
          className={`w-2/3 flex-1 bg-white dark:bg-dark_color text-black dark:text-dark_color flex flex-col `}
        >
          {/* Content */}
          {/* <div className='w-2/3 absolute top-0 '> */}
<Header/>
          {/* </div> */}
                  <Dashboard/>

          
        </div>
        {/* Right Sidebar */}
        <div
          className={`relative transition-all duration-300 w-1/6 bg-white dark:bg-gray-800`}
        >
          <RightSidebar/>
          {/* Hamburger/Close Icon */}
          {/* <button
            onClick={() => setIsSidebarOpen(!isSidebarOpen)}
            className={`absolute top-4 left-0 transition-all duration-300`}
          >
            {isSidebarOpen ? <FaTimes className="text-element_color text-2xl -ml-6" /> : <FaBars className="text-element_color text-2xl -ml-6" />}
          </button> */}

          {/* Sidebar Content */}
          {/* {isSidebarOpen && <Sidebar />} */}
        </div>
      </div>
        </div>
        </>
    )
}
export default Home;