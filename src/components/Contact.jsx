import React from 'react';
import styles from "./Contact.module.css";
import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";

export default function Contact({name, number, deleteContact, id}) {
  return (
    <div className={styles.singleContact}>
      <div className={styles.contactData}>
        <p className={styles.contactName}><FaUser size="10" />   {name}</p>
        <p className={styles.contactNumber}><FaPhone size="10"  />   {number}</p>
      </div>
      <button className={styles.contactDeleteBtn} onClick={() => deleteContact(id)}>Delete</button>
    </div>
  )
}
