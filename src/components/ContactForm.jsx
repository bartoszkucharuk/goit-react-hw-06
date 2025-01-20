import { Field, Form, Formik, ErrorMessage } from 'formik';
import React from 'react';
import { useId } from "react";
import { v4 as uuidv4 } from "uuid";
import * as Yup from "yup";
import styles from "./ContactForm.module.css"

export default function ContactForm({ addContact }) {
  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = {
    name: "",
    number: "",
  };

  const Schema = Yup.object().shape({
    name: Yup.string().min(3, "name's too short").max(50, "name's too long").required("name field is required"),
    number: Yup.string().min(7, "number's too short").max(12, "number's too long"). required("number field is required")
  });

  const handleSubmit = (values, actions) => {
    const newContact = {
      id: uuidv4(), ...values,
    };

    addContact(newContact);
    actions.resetForm();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={handleSubmit} validationSchema={Schema}>
      <Form className={styles.form}>
        <div className={styles.formLabel}>
          <label htmlFor='nameFieldId'>Name</label>
          <Field type="text" name="name" id={nameFieldId} className={styles.formInput}></Field>
          <ErrorMessage name="name" as="span" />
        </div>
        <div className={styles.formLabel}>
          <label htmlFor='numberFieldId'>Number</label>
          <Field type="text" name="number" id={numberFieldId} className={styles.formInput}></Field>
          <ErrorMessage name="number" as="span" />
        </div>
        <button type="submit" className={styles.addContactBtn}>Add contact</button>
      </Form>
    </Formik>
  )
};