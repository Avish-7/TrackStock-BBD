import React from "react";
import './SideMenu.css';
import { Link } from 'react-router-dom';
import { Sidebar, Menu, MenuItem, Submenu } from "react-mui-sidebar";
import AccessAlarms from "@mui/icons-material/AccessAlarms";
import Scale from "@mui/icons-material/Scale";
import Summarize from "@mui/icons-material/Summarize";
import CottageOutlinedIcon from "@mui/icons-material/CottageOutlined";
import BarChart from "@mui/icons-material/BarChart";
import logo from '../Assets/bbd_logo.jpg';
import Language from "@mui/icons-material/Language";

const SideMenu = () => {
    return (
        <Sidebar width={"270px"} >
            <div className="logo-container">
                <img src={logo} alt="Logo" style={{ width: "100px", height: "auto" }} />
                <p className="AppName">TrackStock</p>
            </div>
            <Menu subHeading="">
                <MenuItem
                    icon={<CottageOutlinedIcon />}
                    component={Link}
                    link="/tes"
                    badge={false}
                    isSelected={true}
                >
                    {" "}
                    {/* Set badge to boolean true */}
                    Home
                </MenuItem>
                <MenuItem icon={<Summarize />} component={Link} link="/test">
                    Stock Summary
                </MenuItem>
                <MenuItem icon={<Scale />} component={Link} link="/test">
                    Branch Comparison
                </MenuItem>
                <MenuItem icon={<BarChart />} component={Link} link="/test">
                    Analytics
                </MenuItem>
            </Menu>
        </Sidebar>
    );
};

export default SideMenu;