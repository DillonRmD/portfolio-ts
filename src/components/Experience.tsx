import experiences from "../util/Experiences";
import '../css/experience.css';
import TechCard from "./TechCard";
import SectionTitle from "./SectionTitle";
import { RedirectIcon, RedirectIconType } from "./RedirectIcon";

export default function Experience() {

    const entries = experiences.map((experience) => {
        return (
            <li key={experience.title} className="experience-item">
                <div className="card">
                    <div className="timeline">
                        {experience.start} - {experience.end}
                        <div className="tech-container">
                            {experience.tech.map((tech) => {
                                return (
                                    <TechCard key={experience.title + tech} techName={tech}/>
                                );
                            })}
                        </div>
                    </div>
                    <div className="details">
                        <h3>
                            <a 
                                className="employer-link"
                                href={experience.employerLink} 
                                target="_blank" 
                                rel="noreferrer">
                                    {experience.title}
                                    <RedirectIcon link={experience.employerLink} iconType={RedirectIconType.ARROW_POINTING_UP}/>
                            </a>
                            
                            </h3>
                        <h4>{experience.employer} - {experience.location}</h4>
                        <ul className="responsibilities-list">
                            {experience.responsibilities.map((res, index) => {
                                return (
                                    <li key={experience.title + 'res' + index}>
                                        {res}
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </li>
        );
    });

    return(
        <div className="container-blur">
            <SectionTitle title="Experience" />
            <ol className="experiences-list">
                {entries}
            </ol>
        </div>
    );
}