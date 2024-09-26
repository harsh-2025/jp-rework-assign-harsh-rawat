// import { useState } from "react";
// import { BookOpen, BookText, ChevronRight, ChevronDown, CircleUser, DotIcon, Folder, IdCard, MessagesSquare, PieChart, ShoppingBagIcon, Users, UserSquare, Menu } from "lucide-react";
// import { FaBars, FaTimes } from "react-icons/fa";
// import useThemeStore from "../store/useThemestore";
// import { Link } from "react-router-dom";

// function Sidebar() {
//   const [activeMenu, setActiveMenu] = useState(""); // Tracks the active selected menu
//   const { sideBarOpen, setSideBarOpen } = useThemeStore();
//   console.log(sideBarOpen);
//   // Define submenu options only for items with chevron
 
//   // Handles setting the active menu item
//   const handleMenuClick = (menu) => {
//     setActiveMenu(menu);
//   };
//   const [isopen, setisopen] = useState(false);
//   return (
//     <div className={` h-full bg-white dark:bg-dark_color dark:text-dark_color pb-10 text-black  transition-all duration-300 border-r-[0.5px] border-b-[0.5px] border-gray-600`}>
//       {/* <div className="flex justify-between p-4 items-center ">
//         <div className="flex items-center">
//         </div>
//         <div className="cursor-pointer" onClick={toggleSidebar}>
//           <Menu className="w-6 h-6" />
//         </div>
//       </div> */}
//       <div
//           className={`relative  ${
//             sideBarOpen ? 'w-1/6 '  : 'w-[4rem] h-screen'
//           } bg-white dark:bg-gray-800 `}
//         >
//           {/* Hamburger/Close Icon */}
//           <button
//             onClick={() => setSideBarOpen(!sideBarOpen)}
//             className={`absolute  top-5 ${sideBarOpen ? 'left-[20rem]' : 'left-[1.3rem]'} `}
//           >
//             {sideBarOpen ? <FaTimes className="text-element_color  px-2 dark:text-dark_color text-3xl left-[500px]" /> : <FaBars className="text-element_color  px-2 dark:text-dark_color text-3xl  left-[-50px]" />}
//           </button>
          
//           {/* Sidebar Content */}
//           {/* {isSidebarOpen && <Sidebar />} */}
//         </div>
//       {sideBarOpen && 
//       <div className={`h-screen`}>
//       <div className="flex flex-row items-center pt-4 px-8">
//         <CircleUser className="w-8 h-8" />
//         <div className="pl-2 text-lg">ByeWind</div>
//       </div>
//             <div className="flex pl-12 space-x-10 pt-4">
//                 <div className="text-gray_color">Favorites</div>
//                 <div className="text-gray_color">Recently</div>
//       </div>
     

//       {/* Menu Options */}
//       <div className="mt-4 pl-8">
//         {/* Static Menu Items without Submenu */}
//         <div
//           className={`flex items-center cursor-pointer hover:text-blue-500 ${activeMenu === "Overview" ? "text-blue-500" : ""}`}
//           onClick={() => handleMenuClick("Overview")}
//         >
//           <DotIcon className="w-10 h-10  text-gray-400" />
//           <span className="text-element_color -ml-2 dark:text-dark_color">Overview</span>
//         </div>
//         <div
//           className={`flex items-center cursor-pointer hover:text-blue-500 ${activeMenu === "Projects" ? "text-blue-500" : ""}`}
//           onClick={() => handleMenuClick("Projects")}
//         >
//           <DotIcon className="w-10 h-10  text-gray-400 " />
//           <span className="text-element_color -ml-2 dark:text-dark_color"> Projects</span>
//         </div>
//         </div>
//         <div className=" px-8 space-y-2 pt-8"><p className="text-gray_color pl-4">Dashboards</p>
//           <div className="flex hover:bg-gray_color dark:hover:bg-gray-600 p-2 rounded-lg"><ChevronRight className="text-gray_color " /><PieChart/> <span className="text-element_color px-2 dark:text-dark_color">Default</span></div>
//           <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600"><ChevronRight className="text-gray_color "/><ShoppingBagIcon/> <span className="text-element_color px-2 dark:text-dark_color">eCommerce</span></div>
//           <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600"><ChevronRight className="text-gray_color "/><Folder/> <span className="text-element_color px-2 dark:text-dark_color">Projects</span></div>
//                     <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600"><ChevronRight className="text-gray_color " /><BookOpen /> <span className="text-element_color px-2 dark:text-dark_color">Online Courses</span></div>
//                     </div>
//           <div className=" px-8 space-y-2 pt-8"><p className="text-gray_color pl-4">Pages</p>
//             <div className="flex cursor-pointer hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600" onClick={()=>setisopen(!isopen)}>{!isopen ? <ChevronRight className="text-gray_color" /> : <ChevronDown className="text-gray_color" />}<UserSquare /> <span className="text-element_color px-2 dark:text-dark_color" >User Profile</span></div>
//             {isopen && 
//               <div className="flex flex-col pl-5 space-y-4 ">
//               <Link to="/home" className="nav-btn dark:hover:bg-gray-600 hover:bg-gray_color py-2 rounded-lg pl-4 text-element_color px-2 dark:text-dark_color">
//             Dashboard
//                 </Link>
//                 <Link to="/order" className="nav-btn dark:hover:bg-gray-600 hover:bg-gray_color py-2 rounded-lg pl-4 text-element_color px-2 dark:text-dark_color">
//             OrderList
//           </Link>
//               </div>}
//           <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600"><ChevronRight className="text-gray_color"/><IdCard/> <span className="text-element_color px-2 dark:text-dark_color">Account</span></div>
//           <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600"><ChevronRight className="text-gray_color"/><Users/><span className="text-element_color px-2 dark:text-dark_color"> Corporate</span></div>
//           <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600"><ChevronRight className="text-gray_color"/><BookText /><span className="text-element_color px-2 dark:text-dark_color">Blog</span></div>
//           <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600"><ChevronRight className="text-gray_color"/><MessagesSquare /><span className="text-element_color px-2 dark:text-dark_color">Social</span></div>
//           </div>
                
//     </div>
//       }
//     </div>
//   );
// }

// export default Sidebar;








import { useState } from "react";
import { BookOpen, BookText, ChevronRight, ChevronDown, CircleUser, DotIcon, Folder, IdCard, MessagesSquare, PieChart, ShoppingBagIcon, Users, UserSquare, Menu } from "lucide-react";
import { FaBars, FaTimes } from "react-icons/fa";
import useThemeStore from "../store/useThemestore";
import { Link } from "react-router-dom";

function Sidebar() {
  const [activeMenu, setActiveMenu] = useState(""); // Tracks the active selected menu
  const { sideBarOpen, setSideBarOpen } = useThemeStore();
  const [isopen, setisopen] = useState(false);

  // Handles setting the active menu item
  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };
  const [isoecom, setisecom] = useState(false);
 
  return (
    <div className={`h-full  bg-white dark:bg-dark_color dark:text-dark_color pb-10 text-black transition-all duration-300 border-r-[0.5px]  border-gray-600`}>
      <div
        className={`relative ${sideBarOpen ? 'w-1/6 ' : 'w-[4rem] h-screen'} bg-white dark:bg-gray-800 `}
      >
        {/* Hamburger/Close Icon */}
        <button
          onClick={() => setSideBarOpen(!sideBarOpen)}
          className={`absolute top-5 transition-all duration-300 ${sideBarOpen ? 'left-[13.5rem]' : 'left-[1.2rem]'}`}
        >
          {sideBarOpen ? (
            <FaTimes className="text-element_color dark:text-dark_color text-2xl" />
          ) : (
            <FaBars className="text-element_color dark:text-dark_color text-2xl " />
          )}
        </button>

        {/* Sidebar Content */}
      </div>

      {sideBarOpen && (
        <div className={`h-screen `}>
          <div className="flex flex-row items-center pt-4 px-8">
            <CircleUser className="w-8 h-8" />
            <div className="pl-2 text-lg">Harsh Rawat</div>
          </div>

          <div className="flex pl-12 space-x-10 pt-4">
            <div className="text-gray_color">Favorites</div>
            <div className="text-gray_color">Recently</div>
          </div>

          {/* Menu Options */}
          <div className="mt-4 pl-8">
            <div
              className={`flex items-center cursor-pointer hover:text-blue-500 ${activeMenu === "Overview" ? "text-blue-500" : ""}`}
              onClick={() => handleMenuClick("Overview")}
            >
              <DotIcon className="w-10 h-10 text-gray-400" />
              <span className="text-element_color -ml-2 dark:text-dark_color">Overview</span>
            </div>

            <div
              className={`flex items-center cursor-pointer hover:text-blue-500 ${activeMenu === "Projects" ? "text-blue-500" : ""}`}
              onClick={() => handleMenuClick("Projects")}
            >
              <DotIcon className="w-10 h-10 text-gray-400" />
              <span className="text-element_color -ml-2 dark:text-dark_color">Projects</span>
            </div>
          </div>

          <div className="px-8 space-y-2 pt-8">
            <p className="text-gray_color pl-4">Dashboards</p>
            <div className="flex hover:bg-gray_color dark:hover:bg-gray-600 p-2 rounded-lg">
              <ChevronRight className="text-gray_color" />
              <PieChart />
              <span className="text-element_color px-2 dark:text-dark_color">Default</span>
            </div>
            <div className="flex cursor-pointer hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600" onClick={() => setisecom(!isoecom)}>
              {!isoecom ? <ChevronRight className="text-gray_color" /> : <ChevronDown className="text-gray_color" />}
              <ShoppingBagIcon />
              <span className="text-element_color px-2 dark:text-dark_color">eCommerce</span>
            </div>
            {isoecom && (
              <div className="flex flex-col pl-5 space-y-4">
                <Link to="/dashboard" className="nav-btn dark:hover:bg-gray-600 hover:bg-gray_color py-2 rounded-lg pl-4 text-element_color px-2 dark:text-dark_color">
                  Dashboard
                </Link>
                <Link to="/order" className="nav-btn dark:hover:bg-gray-600 hover:bg-gray_color py-2 rounded-lg pl-4 text-element_color px-2 dark:text-dark_color">
                  OrderList
                </Link>
              </div>
            )}
            <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600">
              <ChevronRight className="text-gray_color" />
              <Folder />
              <span className="text-element_color px-2 dark:text-dark_color">Projects</span>
            </div>
            <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600">
              <ChevronRight className="text-gray_color" />
              <BookOpen />
              <span className="text-element_color px-2 dark:text-dark_color">Online Courses</span>
            </div>
          </div>

          <div className="px-8 space-y-2 pt-8">
            <p className="text-gray_color pl-4">Pages</p>
            <div className="flex cursor-pointer hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600" onClick={() => setisopen(!isopen)}>
              {!isopen ? <ChevronRight className="text-gray_color" /> : <ChevronDown className="text-gray_color" />}
              <UserSquare />
              <span className="text-element_color px-2 dark:text-dark_color">User Profile</span>
            </div>
            {isopen && (
              <div className="flex flex-col pl-5 space-y-4">
                <div  className="nav-btn dark:hover:bg-gray-600 hover:bg-gray_color py-2 rounded-lg pl-4 text-element_color px-2 dark:text-dark_color">
                  Overview
                </div>
                <div  className="nav-btn dark:hover:bg-gray-600 hover:bg-gray_color py-2 rounded-lg pl-4 text-element_color px-2 dark:text-dark_color">
                  Projects
                </div>
                <div  className="nav-btn dark:hover:bg-gray-600 hover:bg-gray_color py-2 rounded-lg pl-4 text-element_color px-2 dark:text-dark_color">
                  Campaign
                </div>
                <div  className="nav-btn dark:hover:bg-gray-600 hover:bg-gray_color py-2 rounded-lg pl-4 text-element_color px-2 dark:text-dark_color">
                  Documents
                </div>
                <div  className="nav-btn dark:hover:bg-gray-600 hover:bg-gray_color py-2 rounded-lg pl-4 text-element_color px-2 dark:text-dark_color">
                  Followers
                </div>
              </div>
            )}
            <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600">
              <ChevronRight className="text-gray_color" />
              <IdCard />
              <span className="text-element_color px-2 dark:text-dark_color">Account</span>
            </div>
            <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600">
              <ChevronRight className="text-gray_color" />
              <Users />
              <span className="text-element_color px-2 dark:text-dark_color">Corporate</span>
            </div>
            <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600">
              <ChevronRight className="text-gray_color" />
              <BookText />
              <span className="text-element_color px-2 dark:text-dark_color">Blog</span>
            </div>
            <div className="flex hover:bg-gray_color p-2 rounded-lg dark:hover:bg-gray-600">
              <ChevronRight className="text-gray_color" />
              <MessagesSquare />
              <span className="text-element_color px-2 dark:text-dark_color">Social</span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Sidebar;
