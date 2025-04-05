const Experience: React.FC = () => {
    return (
        <section id="experience" className="py-16">
            <h2 className="text-3xl font-bold text-[#ffb703] mb-6">Experience</h2>
            <ul className="space-y-4">
                <li className="bg-white p-4 rounded-lg shadow-sm">
                    <h3 className="font-semibold text-[#00897b]">Frontend Developer @ CozyCorp</h3>
                    <p className="text-sm text-gray-600">Jan 2023 – Present</p>
                    <p className="mt-2 text-[#444]">
                        Built whimsical UIs in React and Tailwind, optimized user experience for mobile.
                    </p>
                </li>
                {/* Add more experience entries here */}
            </ul>
        </section>
    );
};

export default Experience;
