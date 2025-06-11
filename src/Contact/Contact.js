import React from "react"
import emailjs from '@emailjs/browser';
import { useRef } from "react";
import ContForm from "./ContForm";


function Contact() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm(
            'service_a2p5whe',
            'template_y6gvsx9',
            form.current,
            'gWe8zRBRkUFdIh7Rd'
        ).then((result) => {
            alert('Message envoyé avec succées!!');
        },(error)=> {
            alert('Erreur lors de l\'envoi : ' + error.text);
        })
        
    };
    return(
       <div className="container mt-5">
        <ContForm/>
          <form ref={form} onSubmit={sendEmail} className="container mt-4">
              <div className="mb-3">
                <label htmlFor="" className="form-label" style={{fontSize: '1.5rem', color: 'white', fontWeight: '150'}}> Nom </label>
                <input type="text" className="form-control" style={{fontSize: '1.5rem', color: 'white', fontWeight: '150'}} name="name" required />
              </div>
               <div className="mb-3">
                <label htmlFor="" className="form-label"  style={{fontSize: '1.5rem', color: 'white', fontWeight: '150'}}> Email </label>
                <input type="email" className="form-control" name="Gmail" required />
              </div>
              <div className="mb-3">
                <label htmlFor="" className="form-label"  style={{fontSize: '1.5rem', color: 'white', fontWeight: '150'}}> Sujet </label>
                <input type="text" className="form-control" name="title" required />
              </div>
               <div className="mb-3">
                <label htmlFor="" className="form-label" style={{fontSize: '1.5rem', color: 'white', fontWeight: '150'}}> Message </label>
                <textarea name="message" className="form-control" rows="4" required></textarea>
              </div>
              <button className="btn btn-primary" type="submit"> Envoyer</button>
          </form>
       </div>
    )
}
export default Contact