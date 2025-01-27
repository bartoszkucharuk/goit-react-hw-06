import { Field, Form, Formik, ErrorMessage } from 'formik';
import { useId } from "react";
import * as Yup from "yup";
import styles from "./ContactForm.module.css"
import { useDispatch, useSelector } from 'react-redux';
import { contactsSelector } from '../redux/selectors';
import { addContact } from '../redux/contactSlice';

const ContactForm = () => {
  const nameFieldId = useId();
  const numberFieldId = useId();
  const dispatch = useDispatch();

  const initialValues = {
  name: "",
  number: "",
  };
  
//use Yup library to make validation schema using inside Formik
const validationSchema = Yup.object().shape({
  name: Yup.string()
    .min(3, "name's too short")
    .max(50, "name's too long")
    .matches(/^[A-Za-z\s\-'.]+$/, "name must be valid!")
    .required(" (required)"),
  number: Yup.string()
    .min(7, "number's too short")
    .max(12, "number's too long")
    .matches(/^[0-9-]+$/, "phone number must be valid!")
    .required(" (required)")
  });
  
//use contacts selector to make iterating operations "state.contacts.items"
const contacts = useSelector(contactsSelector);

//submitting new contact within form
const handleSubmit = (values, actions) => {
  const { number, name } = values;

//find duplicates to valid database
  const duplicate = contacts.find(
    (contact) =>
      contact.name.toLowerCase() === name.toLowerCase() ||
      contact.number === number
  );

  if (duplicate) {
    alert(
      duplicate.name.toLowerCase() === name.toLowerCase()
        ? `The name ${name} is already in your contacts.`
        : `The number ${number} is already in your contacts.`
    );
  } else {
    dispatch(addContact({ name, number }));
    actions.resetForm();
  };
};

  return (
    <Formik initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={validationSchema}>
      
      <Form className={styles.form}>
        <div className={styles.formLabel}>
          <label htmlFor={nameFieldId}>Name   
          <ErrorMessage name="name">
            {(message) => <span className={styles.requiredError}>{message}</span>}
          </ErrorMessage>          </label>
          <Field type="text" name="name" id={nameFieldId} className={styles.formInput} placeholder="enter new name here"></Field>
          
        </div>
        <div className={styles.formLabel}>
          <label htmlFor={numberFieldId}>Number
            <ErrorMessage name="number">
            {(message) => <span className={styles.requiredError}>{message}</span>}
          </ErrorMessage>          </label>
          <Field type="text" name="number" id={numberFieldId} className={styles.formInput} placeholder="enter new phone number here"></Field>
        </div>
        <button type="submit" className={styles.addContactBtn}>Add contact</button>
      </Form>
    </Formik>
  )
};

export default ContactForm;