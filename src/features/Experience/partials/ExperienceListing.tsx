import {Experience} from "../businessObjects/Experience.ts";
import useIsMobile from "../../../common/hooks/useIsMobile.ts";

interface ExperienceProps {
    experience: Experience;
}

export default function ExperienceListing(props: ExperienceProps) {
    const { experience } = props;
    const isMobile = useIsMobile();

    const marginSize = isMobile ? 1 : 7;
    const titleSize = isMobile ? 'text-sm' : 'text-base';
    const subTitleSize = isMobile ? 'text-xs' : 'text-sm';
    const accomplishmentSize = isMobile ? 'text-[10px]' : 'text-xs';

    return (
        <div className={`border border-gray-300 rounded-lg p-6 bg-[#e8e5dc] ml-${marginSize} mr-${marginSize}`}>
            <h2 className={`${titleSize} font-bold text-green-600 mb-2`}>{experience.getTitle} @ {experience.getEmployer}</h2>
            <p className={`${subTitleSize} font-semibold text-gray-700 mb-1`}>{experience.getStartDate} - {experience.getEndDate}</p>
            <ul className="list-disc list-inside text-gray-600">
                {experience.getAccomplishments.map((accomplishment, i) => (
                    <li
                        className={`${accomplishmentSize}`}
                        key={`${experience.getEmployer}-${i}`}>
                        {accomplishment}
                    </li>
                ))}
            </ul>
        </div>
    );
}