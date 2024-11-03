import React from "react";
import { Container, Row, Col } from "react-bootstrap";

function Footer(props) {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-center py-3">Copyright &copy; TheCuriousCart </Col>
        </Row>
        <Row>
          <Col className="text-center pb-3">
            Created by{" "}
            <a className="text-decoration-none" target="_blank" href="https://github.com/Sangal4">Jatin Sangal</a>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
