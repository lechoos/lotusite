"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from './form.module.scss';
import { send } from "../../../emails/send";
import { Section } from '@/components/section/Section';
import { InputLabel } from '@/components/inputLabel/InputLabel';
import { TextInput } from '@/components/textInput/TextInput';
import { TextArea } from "../textArea/TextArea";

export const Form = () => {
  const [name, setName] = useState('');
  const [company, setCompany] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [checked, setChecked] = useState(false);
  const [answer, setAnswer] = useState('');
  
  const [first, setFirst] = useState(0);
  const [second, setSecond] = useState(0);
  
  const [valid, setValid] = useState(false);
  const [error, setError] = useState('');
  
  const clickHandler = async e => {
    {
      e.preventDefault();
      if (valid) {
        setError('');
        const sent = await send({
          name, 
          company, 
          email, 
          phone, 
          message
        });
        if (sent) {
          console.log(sent)
        }

      } else {
        setError('Wypełnij wszystkie pola!')
      }
    }
  }

  useEffect(() => {
    setFirst(Math.floor(Math.random() * 29) + 1);
    setSecond(Math.floor(Math.random() * 29) + 1);
  }, []);

  useEffect(() => {
    if (name && company && email && message && checked && phone) {
      if (parseInt(answer) == parseInt(first + second)) {
        setValid(true);
        setError('');
      } else {
        setValid(false);
      }
    } else {
      setValid(false);
    }
  }, [name, company, email, message, checked, phone, answer])

  return (
    <Section classes={`section--blue ${styles.section}`}>
      <div className='wrapper'>
      <form className={styles.form}>
        <div className={styles.item}>
          <InputLabel name='name'>Imię i nazwisko:</InputLabel>
          <TextInput value={name} setValue={e => setName(e.target.value)} id='imię' />
        </div>

        <div className={styles.item}>
          <InputLabel name='company'>Nazwa Firmy:</InputLabel>
          <TextInput value={company} setValue={e => setCompany(e.target.value)} id='company' />
        </div>

        <div className={styles.item}>
          <InputLabel name='mail'>E-mail:</InputLabel>
          <TextInput type='email' value={email} setValue={e => setEmail(e.target.value)} id='mail' />
        </div>

        <div className={styles.item}>
          <InputLabel name='phone'>Numer telefonu:</InputLabel>
          <TextInput type='number' value={phone} setValue={e => setPhone(e.target.value)} id='phone' />
        </div>

        <div className={styles.item}>
          <InputLabel name='message'>Wiadomość:</InputLabel>
          <TextArea value={message} setValue={e => setMessage(e.target.value)} />
        </div>
        <div>
          <InputLabel name='mail'>Rozwiąż równanie: {first} + {second}</InputLabel>
          <TextInput type='number' value={answer} setValue={e => setAnswer(e.target.value)} id='mail' />
        </div>
        <div className={styles['last-item']}>
          <input type='checkbox' checked={checked} onChange={() => setChecked(prev => !prev)} />
          <InputLabel>Wyrażam zgodę na przetwarzanie danych osobowych</InputLabel>
        </div>
        <div>
        <button className={styles.button} type='submit' onClick={clickHandler}>Wyślij wiadomość</button>
        </div>
        {error ? (
          <p className={styles.error}>{error}</p>
        ) : ''}
        <Link className={styles.link} href='/polityka-prywatnosci'>Polityka prywatności</Link>
    </form>
      </div>
    </Section>
  )
}