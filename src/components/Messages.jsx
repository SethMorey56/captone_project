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
        .then(this.props.fetchNotes);
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
                <h1>Intake Notes</h1>

                <form className="messages-input" onSubmit={this.handleSubmit}>
                    <Input className="message-input-field" placeholder="Write a New Note Here" name="message" type="test" onChange={this.updateFormData}></Input>
                    <button type="button" class="btn btn-primary" type={'submit'}>Create New Note</button>
                </form>
               
            </div>
        )
    }
}