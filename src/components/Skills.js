import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

// import icon
import html from 'assets/images/icon/html.svg';
import css from 'assets/images/icon/css.svg';
import js from 'assets/images/icon/js.svg';
import react from 'assets/images/icon/react.svg';
import bootstrap from 'assets/images/icon/bootstrap.svg';
import sass from 'assets/images/icon/sass.svg';
import figma from 'assets/images/icon/figma.svg';
import node from 'assets/images/icon/node.svg';

const Skills = () => {
  const skillItem = (src, title) => {
    return (
      <li className="mb-2 text-muted">
        <img className="me-2" src={src} alt="icon title" width={35} />
        {title}
      </li>
    );
  };

  return (
    <section className="skills pt-2 mb-5" id="skill">
      <Container>
        <Row className="justify-content-md-center d-flex align-items-center">
          <h1 className="text-center mb-4 mt-5 text-blue">Skills</h1>
          <Col xs={6} md={3}>
            <ul className="text-center ps-0" style={{ listStyleType: 'none' }}>
              {skillItem(html, 'HTML5')}
              {skillItem(css, 'CSS3')}
              {skillItem(react, 'REACT')}
              {skillItem(sass, 'SASS')}
            </ul>
          </Col>
          <Col xs={6} md={3}>
            <ul className="text-center ps-0" style={{ listStyleType: 'none' }}>
              {skillItem(js, 'JAVASCRIPT')}
              {skillItem(bootstrap, 'BOOTSTRAP')}
              {skillItem(figma, 'FIGMA')}
              {skillItem(node, 'NODE JS')}
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Skills;
