import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Features } from "./pages/Features";
import { Contact } from "./pages/Contact";
import { HowToUse } from "./pages/HowToUse";
import { Login } from "./pages/login";
import { Register } from "./pages/Register";
import { UserDashboardLayout } from "./Layouts/UserDashboardLayout";
import { DashboardHome } from "./pages/user-dashboard/DashboardHome";
import { CommunityDashboard } from "./pages/user-dashboard/CommunityDashboard";
import { NewReportDashboard } from "./pages/user-dashboard/NewReport";
import { MyReportDashboard } from "./pages/user-dashboard/MyReport";
import { TrackIssuesDashboard } from "./pages/user-dashboard/TrackIssue";
import { SettingsDashboard } from "./pages/user-dashboard/Settings";
import { ErrorPage } from "./pages/ErrorPage";
import { LandingPageLayout } from "./Layouts/LandingPageLayout";

const App = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <LandingPageLayout />,
      errorElement: <ErrorPage link="/" />,
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/about",
          element: <About />,
        },
        {
          path: "/features",
          element: <Features />,
        },
        {
          path: "/how-to-use",
          element: <HowToUse />,
        },
        {
          path: "/contact",
          element: <Contact />,
        },
      ],
    },
    {
      path: "/login",
      errorElement: <ErrorPage link="/" />,
      element: <Login />,
    },
    {
      path: "/register",
      errorElement: <ErrorPage link="/" />,
      element: <Register />,
    },
    {
      path: "/user/dashboard",
      errorElement: <ErrorPage link="/user/dashboard/home" />,
      element: <UserDashboardLayout />,
      children: [
        {
          path: "home",
          element: <DashboardHome />,
        },
        {
          path: "community",
          element: <CommunityDashboard />,
        },
        {
          path: "new-report",
          element: <NewReportDashboard />,
        },
        {
          path: "my-report",
          element: <MyReportDashboard />,
        },
        {
          path: "track-issues",
          element: <TrackIssuesDashboard />,
        },
        {
          path: "settings",
          element: <SettingsDashboard />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default App;
