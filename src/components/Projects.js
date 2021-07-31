import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import project1 from 'assets/images/project1.jpg';
import project2 from 'assets/images/project2.jpg';

import js from 'assets/images/icon/js.svg';
import bootstrap from 'assets/images/icon/bootstrap.svg';
import react from 'assets/images/icon/react.svg';
import sass from 'assets/images/icon/sass.svg';

const Projects = () => {
  return (
    <section className="project pt-2 mb-5" id="project">
      <Container>
        <Row className="justify-content-md-center d-flex align-items-center">
          <h1 className="text-center mb-4 mt-5 text-blue">Personal Projects</h1>
          <Col md={4} className="me-3 mb-3">
            <a href="https://harits-sl.github.io/movieHS/">
              <img src={project1} alt="" className="w-100 card-skill" />
            </a>
            <div className="card-body">
              <div className="d-block text-end">
                <img
                  className="ms-2"
                  src={js}
                  alt="icon javascript"
                  width={30}
                />
                <img
                  className="ms-2"
                  src={bootstrap}
                  alt="icon bootstrap"
                  width={30}
                />
              </div>
            </div>
          </Col>
          <Col md={4}>
            <a href="https://well-to-do-goldfish.surge.sh/">
              <img src={project2} alt="" className="w-100 card-skill" />
            </a>
            <div className="card-body">
              <div className="d-block text-end">
                <img
                  className="ms-2"
                  src={js}
                  alt="icon javascript"
                  width={30}
                />
                <img className="ms-2" src={react} alt="icon react" width={30} />
                <img
                  className="ms-2"
                  src={bootstrap}
                  alt="icon bootstrap"
                  width={30}
                />
                <img className="ms-2" src={sass} alt="icon sass" width={30} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
