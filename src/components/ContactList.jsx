import React from 'react';
import Contact from "./Contact";
import styles from "./ContactList.module.css";

export default function ContactList({contacts, deleteContact}) {
  return (
    <div className={styles.contactList}>
      {contacts.map((contact) => (
        <Contact
          key={contact.id}
          id={contact.id}
          name={contact.name}
          number={contact.number}
          deleteContact={deleteContact} />
      ))}
    </div>
  )
}
