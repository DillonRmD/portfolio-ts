import Header from "./components/Header";
import Skills from "./components/Skills.tsx";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

export default function App() {
    return (
        <div className="bg-[#fef6e4] text-[#272343] font-sans">
            <Header/>
            <main className="max-w-5xl mx-auto px-4">
                <Skills/>
                <Projects/>
                <Experience/>
                <Contact/>
            </main>
        </div>
    );
}