import React, { Component } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';

export default class CounselorsCards extends Component {
    
    render() {
        return (
            <Container>
                <Row className="counselor-border">
                    <Col md="3">
                        <img src="https://cdn.pixabay.com/photo/2018/11/16/07/42/giraffe-3818903_960_720.jpg" alt="Girl in a jacket"/>
                    </Col>
                    <Col md="9">
                        <h2>This is text</h2>
                        <p>This is somones description and speciality.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}
