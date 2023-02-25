import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import MailChimpForm from "./MailChimpForm";
import linkedInLogo from "../assets/images/linkedIn.svg";
import instagramLogo from "../assets/images/instagram.svg";
import githubLogo from "../assets/images/github.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailChimpForm />
          <Col className="text-end">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/jatin-panchal-4b292722b" target="_blank">
                <img src={linkedInLogo} alt="" />
              </a>
              <a href="https://www.instagram.com/j_a_t_i_n_127" target="_blank">
                <img src={instagramLogo} alt="" />
              </a>
              <a href="https://github.com/jatin-panchal127" target="_blank">
                <img src={githubLogo} alt="link" />
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
