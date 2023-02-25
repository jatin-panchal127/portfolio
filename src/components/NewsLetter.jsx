import React, { useEffect, useState } from "react";
import { Alert, Col, Row } from "react-bootstrap";

const NewsLetter = ({ onValidated, status, message }) => {
  const [email, setEmail] = useState("");

  useEffect(() => {
    if (status === "success") {
      clearFields();
    }
  }, [status]);

  const handleSubmit = (e) => {
    e.preventDefault();
    email && email.indexOf("@") > -1 && onValidated({ EMAIL: email });
  };

  const clearFields = () => {
    setEmail("");
  };

  return (
    <Col lg={12}>
      <div className="newsletter-bx">
        <Row>
          <Col lg={12} md={12} xl={5} sm={12}>
            <h3 className="mb-2 mb-lg-0 mb-md-2">Subscribe to my Newsletter</h3>
            {status === "sending" && <Alert>Sending...</Alert>}
            {status === "error" && <Alert variant="danger">{message}</Alert>}
            {status === "success" && <Alert variant="success">{message}</Alert>}
          </Col>
          <Col md={6} xl={7}>
            <form onSubmit={handleSubmit}>
              <div className="new-email-bx">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter email"
                />
                <button type="submit">Submit</button>
              </div>
            </form>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default NewsLetter;
