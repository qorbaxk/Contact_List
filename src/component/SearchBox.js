import React, { useState } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";

const SearchBox = () => {
  const [keyword, setKeyword] = useState("");
  const dispatch = useDispatch();
  let { contact } = useSelector((state) => state);

  const searchContact = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_CONTACT", payload: { keyword } });
  };

  return (
    <Form onSubmit={searchContact}>
      <Row className="search-area">
        <Form.Label>Search</Form.Label>
        <Col lg={10}>
          <Form.Control
            type="text"
            placeholder="Enter the name you want to find"
            onChange={(event) => setKeyword(event.target.value)}
          />
        </Col>
        <Col lg={2}>
          <Button type="submit">Search</Button>
        </Col>
      </Row>
    </Form>
  );
};

export default SearchBox;
