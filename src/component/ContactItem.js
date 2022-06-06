import React from "react";
import { Row, Col, Button } from "react-bootstrap";

const ContactItem = ({ item }) => {
  return (
    <Row className="contacts">
      <Col lg={2}>
        <img width={70} src="img/icon2.png" />
      </Col>
      <Col lg={8} className="user">
        <div>{item.name}</div>
        <div>{item.phoneNumber}</div>
      </Col>
      <Col lg={2}>
        <Button>Delete</Button>
      </Col>
    </Row>
  );
};

export default ContactItem;
