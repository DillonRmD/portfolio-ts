import Projects from "./features/Project/ProjectsPage.tsx";
import ExperiencePage from "./features/Experience/ExperiencePage.tsx";
import LandingPage from "./features/Landing/LandingPage.tsx";
import {Route, Routes} from "react-router";

export default function App() {

    return (
        <Routes>
            <Route index element={<LandingPage />} />
            <Route path='/projects' element={<Projects />} />
            <Route path='/experience' element={<ExperiencePage />} />
        </Routes>
    );
}