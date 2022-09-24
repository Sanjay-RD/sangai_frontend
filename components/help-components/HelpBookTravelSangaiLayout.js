import React from "react";
import HelpBookTravelSangaiSidebar from "./HelpBookTravelSangaiSideBar";

const HelpBookTravelSangaiLayout = ({ children }) => {
    return (
        <div className="flex divide-x-2" >
            <div className="w-1/4"><HelpBookTravelSangaiSidebar /></div>
            
            <div className="w-3/4 pl-7 ml-5">{children}</div>
        </div >

    );
};

export default HelpBookTravelSangaiLayout;
