import { Formik, Form, Field, ErrorMessage } from 'formik';
import { nanoid } from 'nanoid';
import { useId } from 'react';
import * as Yup from 'yup';

export default function ContactForm({ setContacts, contacts }) {
  const contactSchema = Yup.object().shape({
    username: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
    userNumber: Yup.string()
      .min(3, 'Too Short!')
      .max(50, 'Too Long!')
      .required('Required'),
  });

  const nameFieldId = useId();
  const numberFieldId = useId();

  const initialValues = { username: '', userNumber: '' };

  function handleSubmit(values, actions) {
    const { username: name, userNumber: number } = values;
    const id = nanoid();
    const updatedContacts = [...contacts, { name, number, id }];
    setContacts(updatedContacts);
    localStorage.setItem('contacts', JSON.stringify(updatedContacts));
    actions.resetForm();
  }

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={contactSchema}
    >
      <Form>
        <label htmlFor={nameFieldId}>Username</label>
        <Field type="text" name="username" id={nameFieldId}></Field>
        <ErrorMessage name="username" as="span" />

        <label htmlFor={numberFieldId}>Phone Number</label>
        <Field type="tel" name="userNumber" id={numberFieldId}></Field>
        <ErrorMessage name="userNumber" as="span" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
}
