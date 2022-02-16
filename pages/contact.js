import emailjs from 'emailjs-com';
import { useState, useRef } from "react";
import { Form, Button } from "react-bootstrap";
import recommendStyles from "../styles/Recommend.module.css";

function contact() {

  const form = useRef();

  const formInitialState = {
    name: "",
    email: "",
    message: ""
  }

  const [formData, setFormData] = useState(formInitialState);

  const formDataChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();
    emailjs.sendForm(
      process.env.NEXT_PUBLIC_EMAIL_SERVICE,
      process.env.NEXT_PUBLIC_EMAIL_TEMPLATE,
      form.current,
      process.env.NEXT_PUBLIC_EMAIL_USERID
      )
      .then((result) => {
          alert("Thanks for reaching us, we will be contacting you soon!");
          setFormData(formInitialState);
      }, (error) => {
          alert(error.text);
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

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default contact;
