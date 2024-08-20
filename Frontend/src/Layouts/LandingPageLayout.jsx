import { Outlet } from "react-router-dom";
import { Navbar } from "../Components/Navbar";

export const LandingPageLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
};
