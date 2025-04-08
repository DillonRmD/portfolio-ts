import NavigationBar from "./partials/NavigationBar.tsx";
import Headshot from "./partials/Headshot.tsx";
import ContactLine from "./partials/ContactLine.tsx";
import ScrollingSkillLine from "./partials/ScrollingSkillLine.tsx";
import useLandingPage from "./hooks/useLandingPage.ts";
import Loading from "../../common/components/Loading.tsx";
import Backdrop from "../../common/components/Backdrop.tsx";
import Bio from "./partials/Bio.tsx";

export default function LandingPage() {
    const {isLoading, skills, contacts} = useLandingPage();

    if (isLoading) {
        return <Loading/>;
    }

    return (
        <div className="relative bg-[#fef6e4] min-h-screen flex flex-col items-center justify-between text-[#272343] font-sans px-4 py-8 overflow-hidden">
            <Backdrop />
            <ScrollingSkillLine skills={skills}/>
            <div className="flex flex-col items-center justify-center flex-grow z-10">
                <Headshot/>
                <NavigationBar/>
            </div>
            <Bio />
            <ContactLine contacts={contacts}/>
        </div>
    );
}