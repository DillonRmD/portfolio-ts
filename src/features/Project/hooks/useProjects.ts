import useFirestore from "../../../common/hooks/useFirestore.ts";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore/lite";
import Project from "../businessObjects/Project.ts";

interface UseProjectsResult {
    isLoading: boolean;
    projects: Project[];
}

export default function useProjects(): UseProjectsResult {
    const firestore = useFirestore();
    const [projects, setProjects] = useState<Project[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const fetch = async () => {
            const projectCollection = collection(firestore, 'project');
            const projectSnapshot = await getDocs(projectCollection);
            const projectList = projectSnapshot.docs.map(doc => doc.data());

            return projectList.map(doc => new Project(
                doc.title,
                doc.description,
                doc.tech,
                doc.imageSource,
                doc.redirectLink,
                doc.sourceLink
                )
            );
        }

        fetch().then(projectList => {
            setProjects(projectList);
            setIsLoading(false);
        });
    }, [firestore]);

    return {isLoading, projects};
}