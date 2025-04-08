import {Experience} from "../businessObjects/Experience.ts";
import {useEffect, useState} from "react";
import useFirestore from "../../../common/hooks/useFirestore.ts";
import {collection, getDocs} from "firebase/firestore/lite";

interface UseExperiencesResult {
    experiences: Experience[];
    isLoading: boolean;
}

export default function useExperiences(): UseExperiencesResult {
    const firestore = useFirestore();
    const [experiences, setExperiences] = useState<Experience[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            const experienceCollection = collection(firestore, 'experience');
            const experienceSnapshot = await getDocs(experienceCollection);
            const experienceList = experienceSnapshot.docs.map(doc => doc.data());

            return experienceList.map(doc => new Experience(
                doc.employer,
                doc.title,
                doc.startDate,
                doc.endDate,
                doc.accomplishments,
                )
            );
        }

        fetch().then(experienceList => {
            setExperiences(experienceList);
            setIsLoading(false);
        });
    }, [firestore]);

    return {isLoading, experiences};
}