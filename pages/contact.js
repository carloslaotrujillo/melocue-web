import { Form, Button } from "react-bootstrap";
import recommendStyles from "../styles/Recommend.module.css";

function contact() {
  return (
    <div className="container">
      <h1>Contact Us</h1>
      <Form className={recommendStyles.form}>
        <Form.Group controlId="FormEmail" className={recommendStyles.formGroup}>
          <Form.Control type="text" placeholder="Name *" />
          <Form.Control type="email" placeholder="Email *" required />
          <Form.Control as="textarea" rows={10} placeholder="Message *" />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default contact;
