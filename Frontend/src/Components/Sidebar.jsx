import { NavLink, Outlet } from "react-router-dom";
import "../styles/dashboard.css";
// import { useState } from "react";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-heading">
          <h1>UrbanAlert</h1>
        </div>
        <div className="sidebar-links">
          <div className="sidebar-link">
            <img src="/images/dashboard-home.png" alt="" height={20} />
            <NavLink
              to="/user/dashboard/home"
              style={{ textDecoration: "none" }}
              className="my-link"
            >
              Dashboard
            </NavLink>
          </div>
          <div className="sidebar-link">
            <img src="/images/dashboard-community.png" alt="" height={20} />
            <NavLink
              to="/user/dashboard/community"
              style={{ textDecoration: "none" }}
              className="my-link"
            >
              Community
            </NavLink>
          </div>
          <div className="sidebar-link">
            <img src="/images/dashboard-newreport.png" alt="" height={20} />
            <NavLink
              to="/user/dashboard/new-report"
              style={{ textDecoration: "none" }}
              className="my-link"
            >
              New Report
            </NavLink>
          </div>
          <div className="sidebar-link">
            <img src="/images/dashboard-myreport.png" alt="" height={20} />
            <NavLink
              to="/user/dashboard/my-report"
              style={{ textDecoration: "none" }}
              className="my-link"
            >
              My Report
            </NavLink>
          </div>
          <div className="sidebar-link">
            <img src="/images/dashboard-trackissues.png" alt="" height={20} />
            <NavLink
              to="/user/dashboard/track-issues"
              style={{ textDecoration: "none" }}
              className="my-link"
            >
              Track Issues
            </NavLink>
          </div>
        </div>
        <div className="bottom-links sidebar-links">
          <div className="sidebar-link">
            <img src="/images/dashboard-settings.png" alt="" height={20} />
            <NavLink
              to="/user/dashboard/settings"
              style={{ textDecoration: "none" }}
              className="my-link"
            >
              Settings
            </NavLink>
          </div>
          <div className="sidebar-link">
            <img src="/images/dashboard-logout.png" alt="" height={25} />
            <NavLink
              to="/user/dashboard/logout"
              style={{ textDecoration: "none" }}
              className="my-link"
            >
              Logout
            </NavLink>
          </div>
        </div>
      </div>
      <Outlet />
    </>
  );
};
