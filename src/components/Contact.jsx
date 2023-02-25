import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import contactImage from "../assets/images/contact-img.svg";
import data from "../utils/domain.json";

const Contact = () => {
  const formInitialDetails = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  };

  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const onFormUpdate = (field, value) => {
    setFormDetails({ ...formDetails, [field]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      formDetails.firstName === "" ||
      formDetails.lastName === "" ||
      formDetails.email === "" ||
      formDetails.phone === "" ||
      formDetails.message === ""
    )
      return;
    else {
      setButtonText("Sending...");
      let response = await fetch(`${data.protocol ?? "http"}://${data?.domain}:5000/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(formDetails),
      });
      setButtonText("Send");
      let result = response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({
          success: true,
          message: "Something went wrong, Please try again later",
        });
      }
    }
  };
  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col md={6}>
            <img src={contactImage} alt="contact" />
          </Col>
          <Col md={6} className="px-5 px-md-0 px-lg-0">
            <h2>Get In Touch</h2>
            <form onSubmit={handleSubmit}>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.firstName}
                    placeholder="First Name"
                    onChange={(e) => onFormUpdate("firstName", e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="text"
                    value={formDetails.lastName}
                    placeholder="Last Name"
                    onChange={(e) => onFormUpdate("lastName", e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="email"
                    value={formDetails.email}
                    placeholder="Email"
                    onChange={(e) => onFormUpdate("email", e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="px-1">
                  <input
                    type="tel"
                    value={formDetails.phone}
                    placeholder="Phone number"
                    onChange={(e) => onFormUpdate("phone", e.target.value)}
                  />
                </Col>
              </Row>
              <Row>
                <Col sm={6} className="px-1">
                  <textarea
                    row="6"
                    value={formDetails.message}
                    placeholder="What do you think?"
                    onChange={(e) => onFormUpdate("message", e.target.value)}
                  />
                  <button type="submit">
                    <span>{buttonText}</span>
                  </button>
                </Col>
                {status.message && (
                  <Col>
                    <p
                      className={
                        status.message === false ? "danger" : "success"
                      }
                    >
                      {status.message}
                    </p>
                  </Col>
                )}
              </Row>
            </form>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Contact;
