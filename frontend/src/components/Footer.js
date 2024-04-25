import React from 'react'
import {Container, Row, Col} from 'react-bootstrap';

const Footer = () => {

    const mystyle={
        color:"red",
    };
  return (
    <footer>
        <Container>
            <Row>
            <Col className='py-3 text-center' style={mystyle}>Copyright 	&#169; Sanekee </Col>
            </Row>
        </Container>
    </footer>
  )
}

export default Footer
