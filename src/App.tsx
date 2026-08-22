import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";

import MainLayout from "./layouts/MainLayout";

import Home from "./pages/Home";
import KidsZonePage from "./pages/KidsZonePage";
import AdultProgramsPage from "./pages/AdultProgramsPage";
import TrainersPage from "./pages/TrainersPage";
import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import ContactPage from "./pages/ContactPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Home />} />

          <Route
            path="/kids-zone"
            element={<KidsZonePage />}
          />

          <Route
            path="/adult-programs"
            element={<AdultProgramsPage />}
          />

          <Route
            path="/trainers"
            element={<TrainersPage />}
          />

          <Route
            path="/projects"
            element={<ProjectsPage />}
          />

          <Route
            path="/about"
            element={<AboutPage />}
          />

          <Route
            path="/contact"
            element={<ContactPage />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;