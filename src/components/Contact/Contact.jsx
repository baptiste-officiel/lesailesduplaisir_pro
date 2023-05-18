import { useRef } from 'react';
import styles from './Contact.module.scss';
import emailjs from '@emailjs/browser';

function Contact() {

  // const [phoneNumber, setPhoneNumber] = useState('')

  const form = useRef();
  // const phone = useRef<HTMLInputElement>(null);

  // const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
  //   console.log('bite');
  //   console.log(e.target);
  //   const target = e.target as HTMLInputElement
  //   setPhoneNumber(target.value)   
  // }
  // console.log(phoneNumber);
  

  const formCheck = (e) => {
    e.preventDefault();
    console.log(form);
    // console.log(phone);
    const phoneNumber = form.current[3].value;
    console.log("🚀 ~ file: Contact.jsx:26 ~ formCheck ~ phoneNumber:", phoneNumber)
    // console.log("🚀 ~ file: Contact.tsx:26 ~ formCheck ~ target:", target.value)
    

    // console.log("🚀 ~ file: Contact.tsx:12 ~ formCheck ~ phoneNumber:", phoneNumber)

    if (!((phoneNumber.length === 10 && Number.isInteger(phoneNumber / 1)) || phoneNumber === '')) {
      alert('Il y a une erreur dans votre numéro de téléphone')
    } else {
      sendEmail(form);
    }
  }

  const sendEmail = (form) => {
    console.log(form);
    alert('Votre message a bien été envoyé !')
    
    emailjs.sendForm(import.meta.env.VITE_EMAILJS_SERVICE_ID, import.meta.env.VITE_EMAILJS_TEMPLATE_ID, form.current, import.meta.env.VITE_EMAILJS_PUBLIC_KEY)
      .then((result) => {
          console.log(result.text);
        }, (error) => {
          console.log(error.text);
        });
        form.current.reset()
  };

  return (
    <div className={styles.container}>
      <h3>Contact</h3>
      <p>Si vous souhaitez plus de renseignements ou prendre rendez-vous avec nous pour une location ou formation, vous pouvez nous contacter au <a href="tel:+33661558029">06 61 55 80 29</a> ou via notre formulaire de contact.</p>
      <form ref={form} onSubmit={formCheck}>
        <input type="text" name='user_surname' placeholder='Votre nom *' required />
        <input type="text" name='user_firstname' placeholder='Votre prénom *' required />
        <input type="email" name='user_email' placeholder='Votre adresse e-mail *' required />
        <input type="tel" name="user_tel" placeholder='Votre numéro de téléphone' />
        <textarea name="message" placeholder='Votre message *' required></textarea>
        <p>* Ces champs sont obligatoires</p>

        <button type="submit" className={styles.submitButton}>Envoyer</button>
      </form>
    </div>
  )
}

export default Contact
