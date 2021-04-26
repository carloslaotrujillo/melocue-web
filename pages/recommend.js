import { Form, Button } from "react-bootstrap";
import recommendStyles from "../styles/Recommend.module.css";

function recommend() {
  return (
    <div className="container">
      <h1>Recommend Music</h1>
      <p className="header">
        If you wish to recommend us some music you can do so filling the form
        below. You can send us link to a resource or submit you own audio file.
        Email is the only required field. Thank you for sending us cool stuff.
      </p>

      <Form className={recommendStyles.form}>
        <Form.Group controlId="FormEmail" className={recommendStyles.formGroup}>
          <Form.Control type="text" placeholder="Name" />
          <Form.Control type="email" placeholder="Email *" required />
          <Form.Control type="text" placeholder="Link to recommended source" />
          <Form.Control as="textarea" rows={3} placeholder="Message" />
          <Form.File id="FormControlFile" />
        </Form.Group>

        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}

export default recommend;
