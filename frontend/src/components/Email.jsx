import React from 'react'
import emailjs from 'emailjs-com'
import styles from "../Styles/Email.module.css"

const Email = () => {

        

          const sendEmail = (e) => {
            e.preventDefault();
            emailjs.sendForm('service_ovgt282', 'template_pav36pl', e.target, 'user_VC8tqJxTj2fk0geJdAXfi')
              .then((result) => {
                  console.log(result.text);
                    alert("Mail Sent")
              }, (error) => {
                  console.log(error.text);
              });
          }
    
      return (
        <form onSubmit={sendEmail} className={styles.form}>
            <input className={styles.inputBox}  name="user_name" type="text" placeholder="Name" /><br/>
            <input className={styles.inputBox} name="user_email" type="email" placeholder="Enter email" /><br/>
            <textarea className={styles.inputTextarea} name="message" placeholder="Your Message" /><br/>
            <input className={styles.inputSubmit} type="submit" value="SUBMIT" />
        </form>
      );
}

export default Email
