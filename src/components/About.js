import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <section className="about pt-2 mb-5" id="about">
      <Container>
        <Row className="justify-content-md-center d-flex align-items-center">
          <h1 className="text-center mb-4 mt-5 text-blue">About</h1>
          <Col md={5} className="me-3">
            <p className="text-center text-muted">
              I'm Harits Salsabil a college student from Bina Sarana Informatika
              University,I interested about frontend web developer, I know about
              CSS, JavaScript, and frameworks, like bootstrap and reactJS.
            </p>
          </Col>
          <Col md={5}>
            <p className="text-center text-muted">
              Currently focused on learning in JavaScript, but exposed in all
              aspects of web development including front and back end, I always
              keep learning deep into the fundamentals of the language and
              moving forward into web development with the latest technologies
            </p>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default About;
