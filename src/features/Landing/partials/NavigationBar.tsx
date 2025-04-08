import {Link} from "react-router";

export default function NavigationBar() {
    return (
        <nav className="mt-8 px-6 py-2 flex space-x-6">
            <Link
                to="/experience"
                className="text-[#00897b] hover:underline hover:underline-offset-4 transition: 0.3s ease-in-out"
            >
                Experience
            </Link>
            <Link
                to="/projects"
                className="text-[#00897b] hover:underline hover:underline-offset-4 transition: 0.3s ease-in-out"
            >
                Projects
            </Link>
        </nav>
    );
}