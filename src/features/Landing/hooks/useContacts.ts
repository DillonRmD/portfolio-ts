import useFirestore from "../../../common/hooks/useFirestore.ts";
import {useEffect, useState} from "react";
import {collection, getDocs} from "firebase/firestore/lite";
import {Contact} from "../businessObjects/Contact.ts";

interface UseContactsResult {
    contacts: Contact[];
    isLoading: boolean;
}

export default function useContacts(): UseContactsResult {
    const firestore = useFirestore();
    const [contacts, setContacts] = useState<Contact[]>([]);
    const [isLoading, setIsLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetch = async () => {
            const contactsCollection = collection(firestore, 'contact');
            const contactsSnapshot = await getDocs(contactsCollection);
            const contactsList = contactsSnapshot.docs.map(doc => doc.data());

            return contactsList.map(doc => new Contact(doc.description, doc.link));
        }

        fetch().then(contactsList => {
            setContacts(contactsList);
            setIsLoading(false);
        });
    }, [firestore]);

    return {isLoading, contacts};
}