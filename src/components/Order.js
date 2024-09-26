import { useState } from "react";
import useThemeStore from "../store/useThemestore";
import Dashboard from "./Dashboard";
import Header from "./header";
import OrderList from "./orderlist";
import RightSidebar from "./rightsidebar";
import Sidebar from "./sidebar";

function Order() {
    const { darkMode, setDarkMode } = useThemeStore(); // Access the state and setter
    const { sideBarOpen, setSideBarOpen } = useThemeStore();

    return (
        <>
            <div className={darkMode?'dark':''}>
            <div className="flex min-h-screen">
        {/* Left Sidebar */}
        <div className={`${sideBarOpen ? 'w-1/6 min-w-[250px]':''} `}>
        <Sidebar/>
        </div>
        {/* Main Content in the Center */}
        <div
          className={`w-full  flex-1 bg-white dark:bg-dark_color text-black dark:text-dark_color flex flex-col `}
        >
          {/* Content */}
          <div
  
>          <Header/>
          </div>
                 <OrderList/>

          
        </div>
        {/* Right Sidebar */}
       
      </div>
        </div>
        </>
    )
}
export default Order;