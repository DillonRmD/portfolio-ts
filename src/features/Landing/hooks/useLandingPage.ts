import useContacts from "./useContacts.ts";
import useSkills from "./useSkills.ts";
import {Contact} from "../businessObjects/Contact.ts";

interface UseLandingPageResult {
    isLoading: boolean;
    skills: string[];
    contacts: Contact[];
}

export default function useLandingPage(): UseLandingPageResult {
    const {isLoading: isSkillsLoading, skills} = useSkills();
    const {isLoading: isContactsLoading, contacts} = useContacts();

    const isLoading = isSkillsLoading || isContactsLoading;

    return { isLoading, skills, contacts };
}