import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Fallback from "@/components/Fallback";
import ProtectedRoute from "./context/ProtectedRoute";
import MainLayout from "./layout/MainLayout";
const Home = lazy(() => import("./pages/Home"));
const Waitlist = lazy(() => import("./pages/Waitlist"));
const Placements = lazy(() => import("./pages/Placements"));
const PlacementDetails = lazy(() => import("./pages/PlacementDetails"));
const Login = lazy(() => import("./pages/Login"));
const Registration = lazy(() => import("./pages/Registration"));
const NotFound = lazy(() => import("./pages/NotFound"));
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Companies = lazy(() => import("./pages/Companies"));
const Community = lazy(() => import("./pages/Community"));

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Waitlist />} />
          {/* <Route index element={<Home />} /> */}
          {/* <Route path="/placements" element={<Placements />} />
          <Route path="/placements/:id" element={<PlacementDetails />} />
          <Route path="/companies" element={<Companies />} />
          <Route path="/community" element={<Community />} /> */}
        </Route>
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />
        {/*<Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<Dashboard />} />
        </Route> */}

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
