import {useEffect, useState} from "react";

export default function useIsMobile(): boolean {
    const [isMobile, setIsMobile] = useState<boolean>(false);

    useEffect(() => {
        const checkMobile = () => {
            const userAgent = navigator.userAgent.toLowerCase();
            const mobileKeywords = /(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|rim)|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i;
            const tabletKeywords = /android|ipad|playbook|silk/i;

            setIsMobile(mobileKeywords.test(userAgent) && !tabletKeywords.test(userAgent));
        };
        checkMobile();

        const handleResize = () => {
            checkMobile();
        };
        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return isMobile;
}