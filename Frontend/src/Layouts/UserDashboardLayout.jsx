import { Sidebar } from "../Components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
import { setCurrentUser } from "../Slices/userSlice";
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

    axios
      .get(`/api/user`)
      .then((response) => {
        // getting the user data from our response
        dispatch(setCurrentUser(response.data.data));
        console.log(response);
        setLoading(false);
      })
      .catch((error) => {
        setError(error.message);
        setLoading(false);
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
