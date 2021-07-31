import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import linkedin from 'assets/images/icon/linkedin.svg';
import github from 'assets/images/icon/github.svg';
import foto from 'assets/images/foto.png';

const Jumbotron = () => {
  const iconSosmed = ({ url, image, alt }) => {
    return (
      <div style={{ width: 44, height: 44 }}>
        <a style={{ width: 44, height: 44 }} href={url}>
          <img className="d-block m-auto" src={image} alt={alt} width={30} />
        </a>
      </div>
    );
  };

  return (
    <section className="jumbotron" id="home">
      <Container>
        <Row className="justify-content-md-center d-flex align-items-center jumbotron-height">
          <Col md={2} className="jumbotron-icon">
            {iconSosmed({
              url: 'https://www.linkedin.com/in/harits-salsabil/',
              image: linkedin,
              alt: 'icon linkedin',
            })}
            {iconSosmed({
              url: 'https://github.com/Harits-sl',
              image: github,
              alt: 'icon github',
            })}
          </Col>
          <Col md={5} className="me-5">
            <h1 className="fw-bold" style={{ fontSize: '3.6rem' }}>
              Hi there,<br></br>I'am <span className="text-blue"> Harits</span>
            </h1>
            <h2 className="fs-4 fw-semi-bold mt-2 mb-3">Frontend developer</h2>
          </Col>
          <Col md={4}>
            <img className="w-100 h-100" src={foto} alt="" />
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Jumbotron;
