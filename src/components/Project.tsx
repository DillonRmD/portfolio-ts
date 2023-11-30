import projects from "../util/Projects";
import SectionTitle from "./SectionTitle";
import TechCard from "./TechCard";
import "../css/projects.css"
import { RedirectIcon, RedirectIconType } from "./RedirectIcon";

export default function Project() {

    const projectsView = projects.map((project) => {
        return (
            <li key={project.name} className="project-item">
                <div className="card">
                    <div className="timeline">
                         <div className="tech-container">
                            {project.tech.map((tech) => {
                                return (
                                    <TechCard key={project.name + tech} techName={tech}/>
                                );
                            })}
                        </div>
                    </div>
                <div className="project-details">
                    <div className="project-details-header">
                    <h3>
                        {project.name}
                    </h3>
                    {project.link && <RedirectIcon link={project.link} iconType={RedirectIconType.ARROW_POINTING_UP}/> }
                    <RedirectIcon link={project.repo} iconType={RedirectIconType.GITHUB} />
                    </div>
                    <div>
                        <span>{project.summary}</span>
                    </div>
                </div>
                </div>
            </li>
        );
    });

    return (
        <div className="container-blur">
            <SectionTitle title="Projects" />
            <ol className="projects-list">
                { projectsView }
            </ol>
        </div>
    );
}