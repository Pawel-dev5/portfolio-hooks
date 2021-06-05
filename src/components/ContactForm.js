import React, { useState } from 'react';
import { Form } from "react-bootstrap";
import { Button } from "react-bootstrap";
// import  ReCaptcha from 'react-recaptcha';
import ReCAPTCHA from 'react-google-recaptcha';
import { useForm } from 'react-hook-form';
import { init, sendForm } from 'emailjs-com';

const serviceID = process.env.REACT_APP_SERVICE_ID;
const templateID = process.env.REACT_APP_TAMPLATE_ID;
const userID = process.env.REACT_APP_USER_ID;
const CaptchaKey = process.env.REACT_APP_CAPTCHA_KEY;

init(userID);

export const ContactForm = (data) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const [statusMessage, setStatusMessage] = useState("");
  const [contactNumber, setContactNumber] = useState("000000");
  const footerText = data.data.footer;
  const footTitle = footerText.title;
  // console.log(footTitle)
  // console.log(footerText)
  // console.log(errors)

  const generateContactNumber = () => {
    const numStr = "000000" + (Math.random() * 1000000 | 0);
    setContactNumber(numStr.substring(numStr.length - 6));
  }

  // const onChange = (value) => {
  //   console.log("Recaptcha Value:",value)
  // }

  const onSubmit = () => {
    const form = document.querySelector('#contact-form');
    const statusMsg = document.querySelector('.status-message');

    generateContactNumber();

    sendForm(serviceID, templateID, 'contact-form')
      .then(r => {
        console.log('SUCCESS!', r.status, r.text)
        form.reset();
        setStatusMessage("Wiadomość wysłana, dziękuję za kontakt!");
        statusMsg.className = 'status-message success';
        setTimeout(() => {
          statusMsg.className = 'status-message'
        }, 4000)
      }, error => {
        console.log('FAILED...', error)
        setStatusMessage('Błąd wysyłania! Spróbuj ponownie.');
        statusMsg.className = 'status-message fail';
        setTimeout(() => {
          statusMsg.className = 'status-message'
        }, 6000)
      });

  };

  // const onChange = (value) => {
  //     console.log("Recaptcha Value:", value)
  // }

  const name = watch('name') || "";
  const nameCharsLeft = 30 - name.length;

  const message = watch('message') || "";
  const messageCharsLeft = 500 - message.length;

  return (
    <div className="form-container" id="contact">

      <Form id='contact-form' onSubmit={handleSubmit(onSubmit)} action="?" method="POST">
        <input type='hidden' name='contact_number' value={contactNumber} />
        <p className='status-message'>{footTitle}</p>
        <p className='status-message'>{statusMessage}</p>
        <div className="label-box" >
          <Form.Group controlId="formBasicText">
            <Form.Label>{footerText.name}</Form.Label>
            <Form.Control
              type="text"
              name='name'
              placeholder={footerText.name}
              maxLength='30'
              {...register('name', { required: true })}
            />
            {errors.name && !errors.name.type === "required" && (
              <div role="alert">Imię jest wymagane, uzupełnij poniższe pole<br /></div>
            )}
            {errors.name && errors.name.type === "required" && <div role="alert">Imię jest wymagane, uzupełnij poniższe pole<br /></div>}
            <p className='message-chars-left'>{nameCharsLeft}</p>

          </Form.Group>
          <Form.Group controlId="formBasicEmail">
            <Form.Label>{footerText.email}</Form.Label>
            <Form.Control
              type="email"
              name='user_email'
              placeholder={footerText.email}
              maxLength='30'
              {...register('user_email', { required: true })}
            />
            {errors.user_email && errors.user_email.type === "required" && (
              <div role="alert">Email jest wymagany, uzupełnij poniższe pole<br /></div>
            )}
          </Form.Group>
        </div>
        <Form.Group controlId="exampleForm.ControlTextarea1">
          <Form.Label>{footerText.formessage}</Form.Label>
          <Form.Control
            as="textarea"
            rows={3}
            name='message'
            placeholder={footerText.formessage}
            // ref={register()}
            maxLength='500'
            {...register('message')}

          />
          <p className='message-chars-left'>{messageCharsLeft}</p>
        </Form.Group>
        <ReCAPTCHA
        className="captcha-box"
          sitekey={CaptchaKey}
        // onChange={onChange}
        />
        <Button variant="primary" type="submit" value='Send'>{footerText.send}</Button>
      </Form>
    </div>

  )
}