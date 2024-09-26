import { BellIcon, Command, LucideHistory, Moon, Search, SidebarIcon, Star, Sun } from "lucide-react";
import useThemeStore from "../store/useThemestore";
import { Link } from "react-router-dom";

function Header() {
    // const [darkMode, setDarkMode] = useState(false);
    const { darkMode, setDarkMode } = useThemeStore(); // Access the state and setter
  // console.log(darkMode);
  const { sideBarOpen, setSideBarOpen } = useThemeStore();

  // Load the theme from localStorage on mount (optional)
  
    return (
        <>
           <div className={darkMode ? 'dark' : ''}>
            <div className='min-w-[800px] w-full h-[5rem] px-[2.5rem] py-[1rem] bg-white dark:bg-dark_color dark:text-dark_color  text-black  transition-all duration-300  border-b-[0.5px]  border-gray-600'>
            <div className="flex flex-row items-center justify-between w-full">

  {/* Left section (Dashboard Info) */}
  <div className="w-1/4 flex flex-row items-center space-x-[1.5rem] min-w-[300px]">
    <div><SidebarIcon /></div>
    <div><Star /></div>
    <div className="text-gray_color cursor-pointer hover:text-element_color dark:hover:text-dark_color"><Link to="/dashboard">Dashboard</Link> </div>
    <div>/</div>
    <div>Default</div>
              </div>
              <div className="w-1/4 flex flex-row"></div>
  {/* Right section (Search and Icons) */}
  <div className="w-1/2 flex flex-row items-center justify-end space-x-[1.5rem] min-w-[400px]">
    {/* Search Bar */}
    <div className="relative w-full max-w-[500px]">
      <input
        className="bg-gray-200 py-2 px-4 pl-10 pr-10 w-full rounded-md"
        placeholder="Search"
      />
      <Search className="absolute left-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
      <Command className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
    </div>

    {/* Icons (Dark mode toggle, History, Bell, etc.) */}
    <div className="flex flex-row items-center space-x-[1.5rem]">
      {darkMode ? (
        <Sun onClick={() => setDarkMode(!darkMode)} className="cursor-pointer" />
      ) : (
        <Moon onClick={() => setDarkMode(!darkMode)} className="cursor-pointer" />
      )}
      <LucideHistory />
      <BellIcon />
      <SidebarIcon />
    </div>
                        </div>
                        {/* <div className="w-1/3 flex flex-row"> </div> */}

</div>

                </div>
            </div>
        </>
    )
}

export default Header;