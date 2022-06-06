import React from 'react'
import {Row, Col} from 'react-bootstrap';

const ContactItem = ({item}) => {
  return (
    <Row className='contacts'>
        <Col lg={2}>
            <img width={70} src='img/icon2.png'/>
        </Col>
        <Col lg={10} className='user'>
            <div>
                {item.name}
            </div>
            <div>
                {item.phoneNumber}
            </div>
        </Col>
    </Row>
  )
}

export default ContactItem