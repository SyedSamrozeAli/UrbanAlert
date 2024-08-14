import { useParams } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import { useEffect, useState } from "react";
import axios from "axios";
export const UserDashboardLayout = () => {
  const params = useParams();
  const [user, setUser] = useState();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    axios
      .get(`/api/user/${params.userId}`)
      .then((response) => {
        setUser(response.data);
      })
      .catch((error) => {
        setError(error.message);
      });
  });
  return (
    <>
      <Sidebar />
    </>
  );
};
