import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import axios from 'axios';

export default class CounselorsCards extends Component {

    state = {
        counselors: []
    }

    componentWillMount() {
        axios.get('http://localhost:8080/counselors')
        .then(res => {
            this.setState({ counselors: res.data })
        })
    }
    
    render() {

        return this.state.counselors.map((counselors) => {
            return (
                <Container key={counselors.id}>
                    <Row className="counselor-border">
                        <Col md="3">
                            <img style={{ maxHeight:"300px", maxWidth:"300px" }} src={counselors.img} alt="Girl in a jacket"/>
                        </Col>
                        <Col md="9">
                            <h4 className="fix-this">{counselors.name}</h4>
                            <p className="fix-this">{counselors.about}</p>
                        </Col>
                    </Row>
                </Container>
            )
        })
    }
}
