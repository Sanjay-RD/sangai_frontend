import React from "react";
import HelpBookTravelBusSidebar from "./HelpBookTravelBusSideBar";

const HelpBookTravelBusLayout = ({ children }) => {
    return (
        <div className="flex divide-x-2" >
            <div className="w-1/4"><HelpBookTravelBusSidebar /></div>
            
            <div className="w-3/4 pl-7 ml-5">{children}</div>
        </div >

    );
};

export default HelpBookTravelBusLayout;
