import { Bug, Radio, User } from "lucide-react";

function RightSidebar() {
    return (
        <>
    <div className={` h-full bg-white dark:bg-dark_color dark:text-dark_color pb-10 text-black  transition-all duration-300 border-l-[0.5px]  border-gray-600 pl-6 pt-5 space-y-[2rem]`}>
                <div className="text-card_heading font-top_heading text-element_color dark:text-dark_color">Notifications</div>
                <div className="space-y-[2rem] ">
                <div className="flex flex-row ">
    <div className="mr-2 items-start bg-gray-100 dark:bg-blue_color dark:text-element_color  p-1 rounded-lg h-7" ><Bug className="w-5 h-5  "/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">You have a bug that needs to be addressed now and you want </div>
        <div className="text-sm text-gray-500">Just now</div>
                        </div>
                        
</div>
<div className="flex flex-row ">
    <div className="mr-2 items-start bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color "  ><User className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">New user registered</div>
        <div className="text-sm text-gray-500">59 minutes ago</div>
                        </div>
                        
</div>
<div className="flex flex-row ">
    <div className="mr-2 items-start bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><Bug className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">You have a bug that needs to be addressed now and you want </div>
        <div className="text-sm text-gray-500">12 hours ago</div>
                        </div>
                        
</div>
<div className="flex flex-row ">
    <div className="mr-2 items-start bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><Radio className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">And Lane subscribed to you</div>
        <div className="text-sm text-gray-500">Today, 11:59 AM</div>
                        </div>
                        
</div>

                </div>
                <div className="text-card_heading font-element_heading text-element_color  dark:text-dark_color pt-[1rem]" >Activities</div>
                <div className="space-y-[2rem] ">
                <div className="flex flex-row ">
    <div className="mr-2 items-start bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><Bug className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">You have a bug that needs to be addressed now and you want </div>
        <div className="text-sm text-gray-500">Just now</div>
                        </div>
                        
</div>
<div className="flex flex-row ">
    <div className="mr-2 items-start bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><User className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">Released a new version</div>
        <div className="text-sm text-gray-500">59 minutes ago</div>
                        </div>
                        
</div>
<div className="flex flex-row ">
    <div className="mr-2 items-start bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><Bug className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">Submitted a bug </div>
        <div className="text-sm text-gray-500">12 hours ago</div>
                        </div>
                        
</div>
<div className="flex flex-row ">
    <div className="mr-2 items-start bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><Radio className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">Modified A data in Page X</div>
        <div className="text-sm text-gray-500">Today, 11:59 AM</div>
                        </div>
                        
                    </div>
                    <div className="flex flex-row ">
    <div className="mr-2 items-start bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><Radio className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">Deleted a page in Project X</div>
        <div className="text-sm text-gray-500">Feb 2, 2023</div>
                        </div>
                        
</div>

                </div>
                <div className="text-card_heading font-element_heading text-element_color  dark:text-dark_color pt-[1rem]" >Contacts</div>
                <div className="space-y-[2rem]">
                <div className="flex flex-row items-center">
    <div className="mr-2  bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><Bug className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">Natali Craig</div>
        {/* <div className="text-sm text-gray-500">Just now</div> */}
                        </div>
                        
</div>
<div className="flex flex-row items-center">
    <div className="mr-2  bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><Bug className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">Drew Cana </div>
        {/* <div className="text-sm text-gray-500">Just now</div> */}
                        </div>
                        
</div>
<div className="flex flex-row items-center">
    <div className="mr-2  bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><Bug className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">Orlando Diggs</div>
        {/* <div className="text-sm text-gray-500">Just now</div> */}
                        </div>
                        
</div>
<div className="flex flex-row items-center">
    <div className="mr-2  bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><Bug className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">Andi Lane</div>
        {/* <div className="text-sm text-gray-500">Just now</div> */}
                        </div>
                        
</div>
<div className="flex flex-row items-center">
    <div className="mr-2  bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><Bug className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">Kate Morrison </div>
        {/* <div className="text-sm text-gray-500">Just now</div> */}
                        </div>
                        
</div>
<div className="flex flex-row items-center">
    <div className="mr-2  bg-gray-100 p-1 rounded-lg h-7 dark:bg-blue_color dark:text-element_color " ><Bug className="w-5 h-5"/></div>
    <div className="flex flex-col w-5/6">
        <div className="overflow-hidden text-ellipsis whitespace-nowrap">Koray Okumus </div>
        {/* <div className="text-sm text-gray-500">Just now</div> */}
                        </div>
                        
</div>
                </div>
        </div>
        </>
    )
}
export default RightSidebar;