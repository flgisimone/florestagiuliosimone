'use client'

import React, {useRef, useState} from 'react'

import { Form, Field } from 'react-final-form'

import emailjs from '@emailjs/browser';

import { BiCode, BiCodeAlt } from 'react-icons/bi';

import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import { Typography } from '@mui/material';

import IContactSection from './IContactSection';

import styles from './ContactSection.module.scss';

const ContactSection = () => {

  const form = useRef<any>([]);
  const [open, setOpen] = useState(false);

  const onSubmit = () => {

    emailjs.sendForm('service_afp03sz', 'template_g2t1j2o', form.current, 'vvSqsU-fF1YN9n3dg');
    setOpen(true);

    setTimeout(() => {
      setOpen(false);
      location.reload();
    }, 3000);
  }

  const validate = (values: IContactSection['values']) => {
    const errors: Partial<IContactSection['errors']> = {};

    if (!values?.firstName) errors.firstName = 'Campo obbligatorio';
    if (!values?.lastName) errors.lastName = 'Campo obbligatorio';

    if (!values?.email) {
      errors.email = 'Campo obbligatorio';
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
      errors.email = 'Email non valida';
    }

    if (!values?.object) {
      errors.object = 'Campo obbligatorio';
    } else if (values.object.length < 5) {
      errors.object = `Oggetto dell'email troppo corto`;
    }

    if (!values?.message) {
      errors.message = 'Campo obbligatorio';
    } else if (values.message.length < 5) {
      errors.message = 'Messaggio troppo corto';
    }
  
    return errors;
  }

  return (
    <section className={styles['contact-section']}>
      <h2><BiCode/>Contattami<BiCodeAlt/></h2>
      <Form
        onSubmit={onSubmit}
        validate={validate}
        render={({ handleSubmit, pristine, invalid }) => (
          <form onSubmit={handleSubmit} className={styles['form']} ref={form}>
            <Field name="firstName"
              render={({input, meta}) => (
                <div className={styles['first-name']}>
                  <input 
                    type="text" 
                    {...input} 
                    autoComplete="off" 
                    id="firstName" 
                    placeholder='Inserisci il Nome'
                  />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}            
            />
            <Field name="lastName"
              render={({input, meta}) => (
                <div className={styles['last-name']}>
                  <input type="text" {...input} autoComplete="off" id="lastName" placeholder='Inserisci il Cognome' />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}            
            />
            <Field 
              name="email" 
              render={({input, meta}) => (
                <div className={styles['email']}>
                  <input type="email" {...input} id="email" placeholder='Inserisci Email' />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
            <Field 
              name="object" 
              render={({input, meta}) => (
                <div className={styles['object']}>
                  <input type="text" {...input} autoComplete="off" id="oggetto" placeholder='Inserisci Oggetto Email' />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
              </div>
              )}
            />
            <Field 
              name="message" 
              render={({input, meta}) => (
                <div className={styles['message']}>
                  <textarea {...input} autoComplete="off" id="message" placeholder='Inserisci messaggio' />
                  {meta.touched && meta.error && <span>{meta.error}</span>}
                </div>
              )}
            />
            <Button
              type="submit" 
              disabled={invalid || pristine}
              className={invalid || pristine ? styles['button-disabled'] : styles['button-abled']}
            >
              Invia
            </Button>
          </form>
        )}
      />
      <Modal
        open={open}
      >
        <Typography variant='body1'>Il messaggio è stato inviato!</Typography>
      </Modal>
    </section>
  )
}

export default ContactSection