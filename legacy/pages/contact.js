import emailjs from 'emailjs-com';
import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import recommendStyles from "../styles/Recommend.module.css";

function Contact() {

  const buttonInitialState = {
    disable: false,
    label: "Submit"
  }

  const formInitialState = {
    name: "",
    email: "",
    message: ""
  }

  const form = useRef();
  const[button, setButton] = useState(buttonInitialState);
  const [formData, setFormData] = useState(formInitialState);

  const formDataChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const resetForm = () => {
      setButton(buttonInitialState);
      setFormData(formInitialState);
  }

  const handleFormSubmit = (event) => {
    event.preventDefault();
    setButton({
      disable: true,
      label: "Loading..."
    })

    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE,
      process.env.NEXT_PUBLIC_CONTACT_TEMPLATE,
      form.current,
      process.env.NEXT_PUBLIC_EMAIL_USERID
      )
      .then((result) => {
        resetForm();
        console.log(result);
        alert("Thanks for reaching us, we will be contacting you soon!");
      }, (error) => {
        resetForm();
        console.log(error);
        alert("Failed to submit form, please try again later.");
      });

  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <Form className={recommendStyles.form} onSubmit={handleFormSubmit} ref={form}>
        <Form.Group
          controlId="FormEmail"
          className={recommendStyles.formGroup}
          onChange={formDataChange}
        >
          <Form.Control
            type="text"
            name="name"
            value={formData.name}
            placeholder="Name *"
            required
          />
          <Form.Control
            type="email"
            name="email"
            value={formData.email}
            placeholder="Email *"
            required
          />
          <Form.Control
            value={formData.message}
            name="message"
            as="textarea"
            rows={10}
            placeholder="Message *"
            required
          />
        </Form.Group>

        <Button variant="dark" type="submit" disabled={button.disable}>
          {button.label}
        </Button>
      </Form>
    </div>
  );
}

export default Contact;
