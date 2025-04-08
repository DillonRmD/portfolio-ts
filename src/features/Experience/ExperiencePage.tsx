import NavigationBar from "./partials/NavigationBar.tsx";
import useExperiences from "./hooks/useExperiences.ts";
import Loading from "../../common/components/Loading.tsx";
import ExperienceListing from "./partials/ExperienceListing.tsx";
import Backdrop from "../../common/components/Backdrop.tsx";

export default function ExperiencePage() {
    const {isLoading, experiences} = useExperiences();
    
    if (isLoading) {
        return <Loading />;
    }
    
    return (
        <div className="animate-[fade-in_0.75s_ease-in-out] relative bg-[#fef6e4] min-h-screen flex flex-col items-center justify-between text-[#272343] font-sans px-4 py-6 overflow-hidden">
            <Backdrop />
            <NavigationBar />
            <div className="space-y-6">
                {experiences.map((experience) => (
                    <ExperienceListing key={experience.getEmployer} experience={experience} />
                ))}
            </div>
            <style>{`
                @keyframes fade-in {
                    from {
                        opacity: 0;
                    }
                    to {
                        opacity: 1;
                    }
                }`}</style>
        </div>
    );
}