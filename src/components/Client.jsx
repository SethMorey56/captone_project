import React, { Component } from 'react';
import axios from 'axios';
import Messages from './Messages';
import MessagesRender from './MessagesRender';

export default class Client extends Component {
    state = {
        data: null,
        notes: []
    }
    componentDidMount() {
        axios.get(`http://localhost:8080/intake/${this.props.match.params.id}`).then((response)=>{
            this.setState({ data: response.data })
        })
    }

    componentWillMount(){
        this.fetchNotes();
    }

    fetchNotes(){
        axios.get('http://localhost:8080/messages')
        .then(res => {
            this.setState({ notes: res.data })
        })
    }

    render() {

        console.log(this.state.data);
        if(!this.state.data){
            return <div>Loading...</div>
        }else
        return (
            <div className="Client">
                <h1>New Intake For</h1>
                <h1>{this.state.data.name}</h1>
                <h2>Email</h2>
                <p>{this.state.data.email}</p>
                <h2>Phone</h2>
                <p>{this.state.data.phone}</p>
                <h2>Questionaire Response 1</h2>
                <p>{this.state.data.questionOne}</p>
                <h2>Questionaire Response 2</h2>
                <p>{this.state.data.questionTwo}</p>
                <h2>Questionaire Response 3</h2>
                <p>{this.state.data.questionThree}</p>
                <Messages fetchNotes={this.fetchNotes.bind(this)}/>
                <MessagesRender notes={this.state.notes}/>
            </div>
        )
    }
}