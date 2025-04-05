const skills = ["TypeScript", "React", "Node.js", "Tailwind CSS", "GraphQL", "PostgreSQL"];

const Skills: React.FC = () => {
    return (
        <section id="skills" className="py-16">
            <h2 className="text-3xl font-bold text-[#ffb703] mb-6">Skills</h2>
            <div className="flex flex-wrap gap-4">
                {skills.map((skill) => (
                    <span
                        key={skill}
                        className="bg-[#a3d5a3] text-white px-4 py-2 rounded-full shadow-sm"
                    >
            {skill}
          </span>
                ))}
            </div>
        </section>
    );
};

export default Skills;

