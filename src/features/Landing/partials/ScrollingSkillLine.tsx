import '../css/scrollAnimation.css';

interface ScrollingSkillLineProps {
    skills: string[];
}

export default function ScrollingSkillLine(props: ScrollingSkillLineProps) {
    const {skills} = props;

    return (
        <div className="w-full mt-2 mb-3 overflow-hidden">
            <div className="whitespace-nowrap animate-scroll px-4">
                {skills.map((skill, idx) => (
                    <span
                        key={idx}
                        className="inline-block mx-6 text-[#00897b] text-lg font-medium hover:text-[#ffb703] transition bg-[#a3d5a3] text-white px-4 py-2 rounded-full shadow-sm"
                    >
                {skill}
              </span>
                ))}
            </div>
        </div>
    );
}