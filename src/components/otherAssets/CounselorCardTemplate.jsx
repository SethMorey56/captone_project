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
        
            return (
                <Container>
                    <Row className="counselor-border">
                        <Col md="3">
                            <img src="https://cdn.pixabay.com/photo/2018/11/16/07/42/giraffe-3818903_960_720.jpg" alt="Girl in a jacket"/>
                        </Col>
                        <Col md="9">
                            <h2>{ this.state.counselors.map(counselor => <h2>{counselor.name}</h2>) }</h2>
                            <p>This is someones description and speciality.</p>
                        </Col>
                    </Row>
                </Container>
            )
        
    }
}