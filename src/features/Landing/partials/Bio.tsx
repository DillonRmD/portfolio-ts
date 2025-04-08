import {useEffect, useState} from "react";
import useIsMobile from "../../../common/hooks/useIsMobile.ts";

export default function Bio() {
    const [isVisible, setIsVisible] = useState(false);
    const isMobile = useIsMobile();

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(true);
        }, 500); // Delay before showing the bio
        return () => clearTimeout(timeout);
    }, []);

    const maxWidth = isMobile ? 80 : 25;
    const transform = isVisible
        ? "transform translate-x-0 opacity-100"
        : "transform translate-x-full opacity-0";

    return (
        <div
            className={`${transform} transition-all duration-1000 ease-out max-w-[${maxWidth}%] w-full p-2 bg-transparent text-[#272343] mb-25`}
            style={{
                transform: "translateX(0%)",
                opacity: isVisible ? 1 : 0,
                width: "auto"
            }}
        >
            <h2 className="text-xl font-bold mb-2 text-[#272343] text-center">
                Hi 👋 I'm Dillon!
            </h2>

            <p className="text-xs text-[#00897b] first:ml-4">
                Over the years, I’ve led teams, mentored junior developers, and contributed to building applications used by millions.
            </p>
            <p className="text-xs text-[#00897b] first:ml-4">
                With a background in senior engineering roles, I thrive in creating scalable solutions and fostering collaborative team environments.
            </p>
        </div>
    );
}