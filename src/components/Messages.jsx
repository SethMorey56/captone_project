import React, { Component } from 'react';
import { Alert, Input, Button } from 'reactstrap';

export default class Messages extends Component {

    render() {
        return (
            <div className="messages">
                <h1>Messages</h1>
                <Alert>
                    This is where we will render messages.
                </Alert>
                <Input></Input>
                <Button>Send</Button>
            </div>
        )
    }
}