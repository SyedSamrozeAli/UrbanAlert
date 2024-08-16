import { useSelector } from "react-redux";
import "../styles/dashboard.css";

export const DashboardNavbar = () => {
  //getting the user from the redux store
  const user = useSelector((state) => state.user.currentUser);
  // console.log("USER Navbar: ", user);
  return (
    <>
      <div className="dashboard-navbar">
        <div className="notification">
          <img
            src="/images/dashboard-notifications.png"
            alt="notification"
            height={20}
          />
        </div>
        <div className="user-profile">
          <div className="profile-img">
            <img
              src={`http://localhost:8000/default.png`}
              alt="profile image"
              height={40}
            />
          </div>
          <div className="profile-data">
            <div className="profile-name">
              <p>{user.username}</p>
            </div>
            <div className="profile-email">
              <p>{user.email}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
