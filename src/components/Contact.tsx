import contacts from "../util/Contacts";
import '../css/contacts.css'

export default function Contact() {

    const contactsView = contacts.map((contact) => {
        return (
            <li key={contact.alt} className="contact-item">
                <a
                href={contact.link}
                target="_blank" 
                rel="noreferrer"
                >
                    <img
                    className="contact-img"
                    src={contact.image}
                    alt={contact.alt}
                    width="40"
                    />
                </a>
            </li>
        );
    });

    return (
        <div className="contacts-container">
            <ul className="contacts-list">
                {contactsView}
            </ul>
        </div>
    );
}