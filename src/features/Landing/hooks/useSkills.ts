import useFirestore from "../../../common/hooks/useFirestore.ts";
import {collection, getDocs} from "firebase/firestore/lite";
import {useEffect, useState} from "react";

interface UseSkillsResult {
    isLoading: boolean;
    skills: string[];
}

export default function useSkills(): UseSkillsResult  {
    const firestore = useFirestore();
    const [skills, setSkills] = useState<string[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetch = async () => {
            const skillsCollection = collection(firestore, 'skills');
            const skillsSnapshot = await getDocs(skillsCollection);
            const skillsList = skillsSnapshot.docs.map(doc => doc.data());

            return skillsList.map(doc => doc.name as string);
        }

        fetch().then(skillData => {
            skillData.push(...skillData);
            skillData.push(...skillData);
            skillData.push(...skillData);
            setSkills(skillData);
            setIsLoading(false);
        });
    }, [firestore]);

    return { isLoading, skills };
}