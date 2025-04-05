const projects = [
    {
        title: "Cozy Task Planner",
        description: "A pastel-themed planner app with calendar integration.",
        tech: ["React", "TypeScript", "Tailwind"],
    },
    {
        title: "Island Blog",
        description: "A blog platform inspired by Animal Crossing journals.",
        tech: ["Next.js", "Prisma", "SQLite"],
    },
];

const Projects: React.FC = () => {
    return (
        <section id="projects" className="py-16">
            <h2 className="text-3xl font-bold text-[#90e0ef] mb-6">Projects</h2>
            <div className="grid md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                    <div key={index} className="bg-white p-6 rounded-xl shadow-md">
                        <h3 className="text-xl font-semibold text-[#00897b]">{project.title}</h3>
                        <p className="text-[#555] mt-2">{project.description}</p>
                        <div className="mt-4 flex flex-wrap gap-2">
                            {project.tech.map((tech) => (
                                <span key={tech} className="bg-[#fcd5ce] text-sm px-3 py-1 rounded-full">
                  {tech}
                </span>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;
