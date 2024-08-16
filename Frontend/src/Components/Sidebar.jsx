import { NavLink, Outlet } from "react-router-dom";
import "../styles/dashboard.css";

export const Sidebar = () => {
  return (
    <>
      <div className="sidebar">
        <div className="sidebar-heading">
          <h1>UrbanAlert</h1>
        </div>
        <div className="sidebar-links">
          <div className="sidebar-link active">
            <img src="/images/dashboard-home.png" alt="" height={20} />
            <NavLink
              to="/user/dashboard/home"
              style={{ textDecoration: "none", color: "#e9edc9" }}
            >
              Dashboard
            </NavLink>
          </div>
          <div className="sidebar-link">
            <img src="/images/dashboard-community.png" alt="" height={20} />
            <NavLink
              to="/user/dashboard/community"
              style={{ textDecoration: "none", color: "#e9edc9" }}
            >
              Community
            </NavLink>
          </div>
          <div className="sidebar-link">
            <img src="/images/dashboard-newreport.png" alt="" height={20} />
            <NavLink
              to="/user/dashboard/new-report"
              style={{ textDecoration: "none", color: "#e9edc9" }}
            >
              New Report
            </NavLink>
          </div>
          <div className="sidebar-link">
            <img src="/images/dashboard-myreport.png" alt="" height={20} />
            <NavLink
              to="/user/dashboard/my-report"
              style={{ textDecoration: "none", color: "#e9edc9" }}
            >
              My Report
            </NavLink>
          </div>
          <div className="sidebar-link">
            <img src="/images/dashboard-trackissues.png" alt="" height={20} />
            <NavLink
              to="/user/dashboard/track-issues"
              style={{ textDecoration: "none", color: "#e9edc9" }}
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
              style={{ textDecoration: "none", color: "#e9edc9" }}
            >
              Settings
            </NavLink>
          </div>
          <div className="sidebar-link">
            <img src="/images/dashboard-logout.png" alt="" height={25} />
            <NavLink
              to="/user/dashboard/logout"
              style={{ textDecoration: "none", color: "#e9edc9" }}
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
