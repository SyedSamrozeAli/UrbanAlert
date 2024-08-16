import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Features } from "./pages/Features";
import { Contact } from "./pages/Contact";
import { HowToUse } from "./pages/HowToUse";
import { Login } from "./pages/login";
import { Register } from "./pages/Register";
import { UserDashboardLayout } from "./Layouts/UserDashboardLayout";
import { DashboardHome } from "./pages/user-dashboard/DashboardHome";

export const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/features" element={<Features />} />
          <Route path="/howToUse" element={<HowToUse />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/user/dashboard" element={<UserDashboardLayout />}>
            <Route path="home" element={<DashboardHome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
};
