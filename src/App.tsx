import { Routes, Route } from "react-router-dom";
import { Suspense, lazy } from "react";
import Fallback from "@/components/Fallback";
// Lazy-loaded pages
const Home = lazy(() => import("./pages/Home"));
const Placements = lazy(() => import("./pages/Placements"));
const Login = lazy(() => import("./pages/Login"));
const Registration = lazy(() => import("./pages/Registration"));
const NotFound = lazy(()=> import("./pages/NotFound"))

function App() {
  return (
    <Suspense fallback={<Fallback />}>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/placements" element={<Placements />} />
        <Route path="/login" element={<Login />} />
        <Route path="/registration" element={<Registration />} />

        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
