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
          <FaUser size="10" className={styles.userIcon} />
          {name}
        </p>
        
        <p className={styles.contactNumber}>
          <FaPhone size="10" className={styles.phoneIcon} />
          {number}
        </p>
      </div>

      <button
        className={styles.contactDeleteBtn}
        onClick={() => {
          if (window.confirm("Are you sure you want to delete this contact from your list?")) {
            dispatch(deleteContact(id));
          }
        }}>
        Delete
      </button>
    </div>
  )
}

export default Contact;