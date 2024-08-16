import { Sidebar } from "../Components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { setCurrentUser } from "../Slices/userSlice";
import { setAllReports, setCurrentUserReports } from "../Slices/reportSlice";
import { useDispatch } from "react-redux";
import { DashboardNavbar } from "../Components/DashboardNavbar";
import { Loading } from "../Components/Loading";
import { Error } from "../Components/Error";
import "../styles/dashboard.css";

export const UserDashboardLayout = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    setLoading(true);
    setError(false);

    // fetching current user data from the server
    axios
      .get(`/api/user`)
      .then((response) => {
        // getting the user data from our response and saving it in state
        console.log("Response: ", response);
        dispatch(setCurrentUser(response.data.data.userData));
        // Setting the reports of current user in state
        dispatch(setCurrentUserReports(response.data.data.userData.reports));

        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
      });

    // fetching all reports from server
    axios
      .get("/api/reports")
      .then((response) => {
        console.log("Reports: ", response);
        dispatch(setAllReports(response.data.data.reports));
      })
      .catch((error) => {
        setError(error.message);
      });
  }, [dispatch]);

  return (
    <>
      <div className="dashboard-layout">
        {loading == true && <Loading />}
        {error && <Error />}
        <DashboardNavbar />
        <Sidebar />
      </div>
    </>
  );
};
