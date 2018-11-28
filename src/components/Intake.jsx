import React, { Component } from 'react';
import { Button, FormGroup, Label, Input, FormText, FormFeedback } from 'reactstrap';
import ReactStrapNav from './ReactStrapNav';
import axios from 'axios';

export default class Intake extends Component {
    state = {
        questionair: {}
    }
    constructor () {
        super()
        
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    handleSubmit(event) {
        event.preventDefault();
        axios.post('http://localhost:8080/intake', {
            ...this.state.questionair
        })
        .then(console.log("Submit Works"))
    }

    updateFormData(e){
        this.setState({
            questionair: {...this.state.questionair, [e.target.name]:e.target.value}
        })
    }

    render() {
        this.updateFormData = this.updateFormData.bind(this);
        return (
            <div className="intake-form">
                
                <ReactStrapNav/>
                
                <h1>Intake Questionaire</h1>
                <p>This questionairre is designed to make your search for help easy and simple. Tell us what's going on, and we will do our best to help you.</p>
                <FormGroup>
                    <form onSubmit={this.handleSubmit}>
                            <Label>Name</Label>
                            <Input name="name" type="text" onChange={this.updateFormData}/>
                            <Label>Email</Label>
                            <Input name="email" type="text" onChange={this.updateFormData}/>
                            <Label>Phone</Label>
                            <Input name="phone" type="text" onChange={this.updateFormData}/>

                            <Label>Question 1</Label>
                            <Input name="questionOne" type="text" onChange={this.updateFormData}/>
                            <Label>Question 2</Label>
                            <Input name="questionTwo" type="text" onChange={this.updateFormData}/>
                            <Label>Question 3</Label>
                            <Input name="questionThree" type="text" onChange={this.updateFormData}/>
                            <Button className="intake-button" type={'submit'}>Submit</Button>
                    </form>
                </FormGroup>

                    {/* <FormText>
                        <Label for="exampleText">Anything Else</Label>
                        <Input type="textarea" name="text" id="exampleText" />
                    </FormText>
                    <Button>Enter</Button>
                    
                    <FormFeedback>You will not be able to see this</FormFeedback> */}
            </div>
        )
    }
}