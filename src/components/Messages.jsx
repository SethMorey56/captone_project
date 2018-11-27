import React, { Component } from 'react';
import { Alert, Input, Button } from 'reactstrap';
import axios from 'axios';

export default class Messages extends Component {

    state = {
        messagesSent: {}
    }

    constructor () {
        super()

        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/messages', {
            ...this.state.messagesSent
        })
        .then(console.log("Submitted"))
    }

    updateFormData(e) {
        this.setState({
            messagesSent: {...this.state.messagesSent, [e.target.name]:e.target.value}
        })
    }

    render() {
        this.updateFormData = this.updateFormData.bind(this);

        return (
            <div className="messages">
                <h1>Messages</h1>
                <Alert>
                    This is where we will render messages.
                </Alert>

                <form onSubmit={this.handleSubmit}>
                    <Input name="message" type="test" onChange={this.updateFormData}></Input>
                    <Button className="intake-button" type={'submit'}>Send</Button>
                </form>
               
            </div>
        )
    }
}