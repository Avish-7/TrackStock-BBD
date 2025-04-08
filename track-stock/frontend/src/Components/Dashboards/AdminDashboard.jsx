import React from "react";
import './Dashboard.css';
import ManageStock from '../Assets/manage_stock.jpg';
import GenerateReport from '../Assets/generate_report.jpg';
import ViewAllUsers from '../Assets/view_all_users.jpg';
import ManageUserRoles from '../Assets/user_roles.jpg';
import ManageCategories from '../Assets/manage_categories.jpg';
import StockLocation from '../Assets/location_stocklevel.jpg';

const AdminDashboard = () => {
    return (
        <div className="dashboard-container" style={{ backgroundColor: "white", minHeight: "100vh" }}>
            <div className="stats-section">
                <div className="stat-tile">
                    <p className="stat-label">Checked out items</p>
                    <p className="stat-value">Null</p>
                </div>
                <div className="stat-tile">
                    <p className="stat-label">Low stock alerts</p>
                    <p className="stat-value">Null</p>
                </div>
                <div className="stat-tile">
                    <p className="stat-label">Current Total Stock Value</p>
                    <p className="stat-value">Null</p>
                </div>
            </div>

            <h2 className="section-title">Stock and User Management</h2>

            <div className="card-grid">
                <div className="dashboard-card">
                    <img src= {ManageStock} alt="Manage Stock" />
                    <p>Manage Stock</p>
                </div>
                <div className="dashboard-card">
                    <img src= {GenerateReport} alt="Generate Reports" />
                    <p>Generate Reports</p>
                </div>
                <div className="dashboard-card">
                    <img src= {ViewAllUsers} alt="View All Users" />
                    <p>View All Users</p>
                </div>
                <div className="dashboard-card">
                    <img src= {StockLocation} alt="View a Location Stock Level" />
                    <p>View a Location Stock Level</p>
                </div>
                <div className="dashboard-card">
                    <img src= {ManageCategories} alt="Manage Categories" />
                    <p>Manage Categories</p>
                </div>
                <div className="dashboard-card">
                    <img src= {ManageUserRoles} alt="Manage User Roles" />
                    <p>Manage User Roles</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
