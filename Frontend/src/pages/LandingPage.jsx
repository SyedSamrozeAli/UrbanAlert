import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Home";
import { About } from "./About";
import { Features } from "./Features";
import { Contact } from "./Contact";
import { HowToUse } from "./HowToUse";
import { Login } from "./login";
import { Register } from "./Register";
import { UserDashboard } from "./UserDashboard";

export const LandingPage = () => {
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
          <Route path="/dashboard" element={<UserDashboard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};
