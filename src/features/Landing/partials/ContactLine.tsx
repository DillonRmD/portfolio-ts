import {ArrowUpRight} from "lucide-react";
import { Contact } from "../businessObjects/Contact";

interface ContactProps {
    contact: Contact;
}

function ContactItem(props: ContactProps) {
    const {contact} = props;

    return (
        <a
            href={contact.getLink}
            className="inline-flex items-center hover:underline"
            target="_blank"
        >
            {contact.getDescription}
            <ArrowUpRight className="ml-1 w-4 h-4"/>
        </a>
    )
}

interface ContactLineProps {
    contacts: Contact[];
}

export default function ContactLine(props: ContactLineProps) {
    const {contacts} = props;

    return (
        <footer className="w-full bg-transparent py-6">
            <div className="flex justify-center space-x-6 text-sm text-[#00897b]">
                {contacts.map((contact: Contact) => (
                    <ContactItem key={contact.getDescription} contact={contact} />
                ))}
            </div>
        </footer>
    );
}