import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const dispatch = useDispatch();

  const addContact = (event) => {
    event.preventDefault(); //새로고침 막기
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
    //페이로드 키값과 밸류값이 같으면 생략하고 바로 쓰기
    setName("");
    setPhoneNumber("");
  };

  return (
    <div>
      <Form onSubmit={(event) => addContact(event)}>
        <Form.Group className="mb-3" controlId="formName">
          <Form.Label>Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter name."
            onChange={(event) => setName(event.target.value)}
            value={name}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formContact">
          <Form.Label>Phone Number</Form.Label>
          <Form.Control
            type="number"
            placeholder="Enter phone number."
            onChange={(event) => setPhoneNumber(event.target.value)}
            value={phoneNumber}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Save
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
