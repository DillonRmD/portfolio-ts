import Backdrop from "../../common/components/Backdrop.tsx";
import NavigationBar from "./partials/NavigationBar.tsx";
import Loading from "../../common/components/Loading.tsx";
import useProjects from "./hooks/useProjects.ts";
import { SquareArrowOutUpRight } from "lucide-react";

export default function ProjectsPage() {
    const {isLoading, projects} = useProjects();
    if (isLoading) {
        return <Loading />;
    }

    return (
        <div className="animate-[fade-in_0.75s_ease-in-out] relative bg-[#fef6e4] min-h-screen flex flex-col items-center justify-between text-[#272343] font-sans px-4 py-6 overflow-hidden">
            <NavigationBar />
            <Backdrop />
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="border border-gray-300 rounded-lg p-6 bg-[#e8e5dc] p-6 rounded-xl shadow-md">
                        <div className="flex justify-between items-center pb-1">
                            <a className="flex flex-wrap items-center gap-1" href={project.getRedirectLink}
                               target="_blank"
                               rel="noopener noreferrer">
                                <h3 className="text-xl font-semibold text-[#00897b]">{project.getTitle}</h3>
                                <SquareArrowOutUpRight color={'#00897b'}/>
                            </a>
                            <a className="flex flex-wrap items-center" href={project.getSourceLink} target="_blank" rel="noopener noreferrer">
                                <img src='./github.png' alt='' className="w-7 h-7 rounded-xl"/>
                            </a>
                        </div>
                        <img className="w-auto h-50 border-4 border-gray-900 rounded-lg" src={project.getImageSource} alt={''}/>
                        <p className="text-[#555] mt-2">{project.getDescription}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.getTech.map((tech) => (
                                <span key={tech} className="bg-[#fcd5ce] text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <style>
                {`                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }`}
            </style>
        </div>
    );
}
