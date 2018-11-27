import React, { Component } from 'react';
import axios from 'axios';

export default class CounsleorsIntakeView extends Component {

    state = {
        intakes: []
    }

    componentDidMount() {
        axios.get('http://localhost:8080/intake')
        .then(res => {
            this.setState({ intakes: res.data })
        })
    }

    render() {

        return this.state.intakes.map((intake) => {
            return (
                <div className="intake-responses" key={intake.id}>
                    <h1>Intake Responses</h1>
                        <h2>Question 1</h2>
                        <p>{intake.questionOne}</p>
                        <h2>Question 2</h2>
                        <p>{intake.questionTwo}</p>
                        <h2>Question 3</h2>
                        <p>{intake.questionThree}</p>
                </div>
            )
        })
    }
}