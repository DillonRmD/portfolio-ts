import {Link} from "react-router";
import useIsMobile from "../../../common/hooks/useIsMobile.ts";


export default function NavigationBar() {
    const isMobile = useIsMobile();

    const navTextSize = isMobile ? 'text-lg' : 'text-lg';

    return (
        <nav className="px-6 py-2 flex space-x-6">
            <Link
                key={'home-page-link-1'}
                to="/"
                className={`${navTextSize} text-[#00897b] hover:underline hover:underline-offset-4 transition`}
            >
                Home
            </Link>
            <Link
                key={'projectsPage-page-link-2'}
                to="/projects"
                className={`${navTextSize} text-[#00897b] hover:underline hover:underline-offset-4 transition`}
            >
                Projects
            </Link>
        </nav>
    );
}