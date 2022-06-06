import React from 'react'
import {Row, Col, Form, Button} from 'react-bootstrap';

const SearchBox = () => {
  return (
    <Row className='search-area'>
         <Form.Label>Search</Form.Label>
        <Col lg={10}>
            <Form.Control type="text" placeholder="Enter the name you want to find." />
        </Col>
        <Col lg={2}>
            <Button>Search</Button>
        </Col>
    </Row>
  )
}

export default SearchBox