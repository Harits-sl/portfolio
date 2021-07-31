import React, { useState } from 'react';

import { Container, Row, Col, Modal } from 'react-bootstrap';

import sertifikat1 from 'assets/images/sertifikat1.png';
import sertifikat2 from 'assets/images/sertifikat2.png';
import sertifikat3 from 'assets/images/sertifikat3.png';
import webinar1 from 'assets/images/webinar1.png';
import webinar2 from 'assets/images/webinar2.png';
import webinar3 from 'assets/images/webinar3.png';

const Sertifications = () => {
  const [lgShow, setLgShow] = useState(false);
  const [imageModal, setImageModal] = useState('');

  const columnImage = (src) => {
    return (
      <>
        <Col md={4} className=" mb-4">
          <img
            className="w-100 card-certification"
            src={src}
            alt=""
            onClick={() => {
              setLgShow(true);
              setImageModal(src);
            }}
          />
        </Col>
      </>
    );
  };
  return (
    <>
      <section className="certification pt-2 mb-5" id="certification">
        <Container>
          <h1 className="text-center mb-4 mt-5 text-blue">Certifications</h1>
          <Row className="justify-content-md-center d-flex align-items-center">
            {columnImage(sertifikat1)}
            {columnImage(sertifikat2)}
            {columnImage(sertifikat3)}
          </Row>
          <Row className="justify-content-md-center d-flex align-items-center">
            {columnImage(webinar1)}
            {columnImage(webinar2)}
            {columnImage(webinar3)}
          </Row>
        </Container>
      </section>
      <Modal
        fullscreen={true}
        show={lgShow}
        onHide={setLgShow}
        aria-labelledby="example-modal-sizes-title-lg"
      >
        <Modal.Header closeButton></Modal.Header>
        <Modal.Body>
          <img className="w-100" src={imageModal} alt="" />
        </Modal.Body>
      </Modal>
    </>
  );
};

export default Sertifications;
