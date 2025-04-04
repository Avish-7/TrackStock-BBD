import React from "react";
import Sidebar from "./SideMenu";
import { Outlet, useLocation } from "react-router-dom";
import { IconButton } from "@mui/material";
import NotificationsIcon from "@mui/icons-material/Notifications";
import "./Layout.css";

const getPageTitle = (path) => {
  const titles = {
    "/admindashboard": "Admin Dashboard",
    "/repdashboard": "Representative Dashboard"
  };
  return titles[path] || "Track|Stock";
};


const Layout = () => {
  const location = useLocation();
  const hideSidebarOn = ["/login", "/signup"];
  const shouldHideSidebar = hideSidebarOn.includes(location.pathname);

  return (
    <div className="layout-container">
      {!shouldHideSidebar && <Sidebar />}

      <div className="content-area">
        {/* Top Bar */}
        <div className="top-bar">
          <h1 className="page-title">{getPageTitle(location.pathname)}</h1>

          <div className="top-right">
            <IconButton className="notification-icon">
              <NotificationsIcon />
            </IconButton>
            <div className="profile-placeholder"></div>
          </div>
        </div>

        {/* Main Content */}
        <div className="main-content">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
