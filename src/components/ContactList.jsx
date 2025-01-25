import { useSelector } from "react-redux";
import Contact from "./Contact";
import styles from "./ContactList.module.css";
import { contactsSelector, filtersSelector } from "../redux/selectors";

const ContactList = () => {
  const contacts = useSelector(contactsSelector);
  const filter = useSelector(filtersSelector);

  const filteredContacts = Array.isArray(contacts)
    ? filter
      ? contacts.filter((contact) =>
          contact?.name?.toLowerCase().includes(filter.toLowerCase())
        )
      : contacts
    : [];

  return (
    <div className={styles.contactList}>
      {filteredContacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number} />
      ))}
    </div>
  )
}

export default ContactList;