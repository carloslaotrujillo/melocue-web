import { useState } from "react";
import { Form, Button } from "react-bootstrap";
import recommendStyles from "../styles/Recommend.module.css";

function contact() {
  //smtp.js
  const Email = {
    send: function (a) {
      return new Promise(function (n, e) {
        (a.nocache = Math.floor(1e6 * Math.random() + 1)), (a.Action = "Send");
        var t = JSON.stringify(a);
        Email.ajaxPost("https://smtpjs.com/v3/smtpjs.aspx?", t, function (e) {
          n(e);
        });
      });
    },
    ajaxPost: function (e, n, t) {
      var a = Email.createCORSRequest("POST", e);
      a.setRequestHeader("Content-type", "application/x-www-form-urlencoded"),
        (a.onload = function () {
          var e = a.responseText;
          null != t && t(e);
        }),
        a.send(n);
    },
    ajax: function (e, n) {
      var t = Email.createCORSRequest("GET", e);
      (t.onload = function () {
        var e = t.responseText;
        null != n && n(e);
      }),
        t.send();
    },
    createCORSRequest: function (e, n) {
      var t = new XMLHttpRequest();
      return (
        "withCredentials" in t
          ? t.open(e, n, !0)
          : "undefined" != typeof XDomainRequest
          ? (t = new XDomainRequest()).open(e, n)
          : (t = null),
        t
      );
    },
  };

  //Form Submission
  const handleFormSubmit = (event) => {    
    // event.preventDefault;
    // Email.send({
    //   Host: "smtp.sendgrid.net",
    //   Username: "apikey",
    //   Password:
    //     "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",
    //   To: "krloslao90@gmail.com",
    //   From: "melocue@gmail.com",
    //   Subject: "Melocue Contact Form Submission",
    //   Body: "TEST_76",
    // })
    //   .then((message) => console.log(message))
    //   .catch((error) => console.log(error));
  };

  //State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const formDataChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  return (
    <div className="container">
      <h1>Contact Us</h1>
      <Form className={recommendStyles.form} onSubmit={handleFormSubmit}>
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
