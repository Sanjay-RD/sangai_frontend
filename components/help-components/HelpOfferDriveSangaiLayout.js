import React from "react";
import HelpOfferDriveSangaiSidebar from "./HelpOfferDriveSangaiSideBar";

const HelpOfferDriveSangaiLayout = ({ children }) => {
  return (
    <div className="flex divide-x-2">
      <div className="w-1/4">
        <HelpOfferDriveSangaiSidebar />
      </div>

      <div className="w-3/4 pl-7 ml-5 my-10">{children}</div>
    </div>
  );
};

export default HelpOfferDriveSangaiLayout;
