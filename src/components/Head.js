import { BellIcon, Command, CrossIcon, LucideHistory, Moon, Search, SidebarIcon, Star, Sun } from "lucide-react";
import useThemeStore from "../store/useThemestore";
import { FaHamburger } from "react-icons/fa";

function Head() {
    // const [darkMode, setDarkMode] = useState(false);
    const { darkMode, setDarkMode } = useThemeStore(); // Access the state and setter
  console.log(darkMode);
  const { sideBarOpen, setSideBarOpen } = useThemeStore();

  // Load the theme from localStorage on mount (optional)
  
    return (
        <>
            <div className={darkMode ? 'dark' : ''}>
            <div className=" shadow-sm border  ">
        <div className="  flex flex-row  justify-between    h-[76px]   ">
          {sideBarOpen ? (
            <div
              className="flex items-center px-[20px] "
              onClick={() => {
                setSideBarOpen(!sideBarOpen);
              }}
            >
              <CrossIcon />

              {/* <Cross1Icon/> */}
            </div>
          ) : (
            <div
              className="flex items-center px-[20px]"
              onClick={() => {
                setSideBarOpen(!sideBarOpen);
              }}
            >
              <FaHamburger />
              {/* <Cross1Icon/> */}
            </div>
                        )}
                        </div></div>
           
            </div>
        </>
    )
}

export default Head;