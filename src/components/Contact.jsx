import { useDispatch } from "react-redux";
import styles from "./Contact.module.css";
import { FaPhone, FaUser } from "react-icons/fa6";
import { deleteContact } from "../redux/contactSlice";

const Contact = ({ name, number, id }) => {
  const dispatch = useDispatch();

  return (
    <div className={styles.singleContact}>
      <div className={styles.contactData}>
        <p className={styles.contactName}>
          <FaUser size="10" />
          {name}
        </p>
        
        <p className={styles.contactNumber}>
          <FaPhone size="10" />
          {number}
        </p>
      </div>

      <button
        className={styles.contactDeleteBtn}
        onClick={() => dispatch(deleteContact(id))}>
        Delete
      </button>
    </div>
  )
}

export default Contact;