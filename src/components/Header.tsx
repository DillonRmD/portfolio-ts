const Header = () => {
    return (
        <header className="bg-[#fcd5ce] shadow-md p-6">
            <div className="max-w-5xl mx-auto flex justify-between items-center">
                <h1 className="text-3xl font-bold text-[#00897b]">Your Name</h1>
                <nav className="space-x-4">
                    <a href="#skills" className="text-[#00897b] font-medium hover:underline">Skills</a>
                    <a href="#projects" className="text-[#00897b] font-medium hover:underline">Projects</a>
                    <a href="#experience" className="text-[#00897b] font-medium hover:underline">Experience</a>
                    <a href="#contact" className="text-[#00897b] font-medium hover:underline">Contact</a>
                </nav>
            </div>
        </header>
    );
};

export default Header;
