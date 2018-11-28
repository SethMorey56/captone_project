import React, { Component } from 'react';
import axios from 'axios';
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from 'reactstrap';

export default class MessagesRender extends Component {

    render() {

        return this.props.notes.map((notes) => {
            return (
                <div className="MessagesRender">
                    <Card>
                        <CardBody>
                        <CardTitle>Note</CardTitle>
                        <CardText>{notes.message}</CardText>
                        </CardBody>
                    </Card>
                </div>
            )
        })
    }
}