import React, { Component } from 'react';
import ReactStrapNav from './ReactStrapNav';
import ListOfIntakes from './ListOfIntakes';
import axios from 'axios';

export default class CounselorsDashboard extends Component {

    constructor(props) {
        super(props)
        this.state = {
            intakes: []
        }
    }

    componentDidMount() {
        axios.get('http://localhost:8080/intake')
        .then(res => {
            this.setState({ intakes: res.data})
            console.log(res.data)
        })
    }
    
    render() {

        let intakes = this.state.intakes.map((intake) => <ListOfIntakes key={intake.id} intake={intake}/>)

        return (
            <div>
                <ReactStrapNav/>
                {intakes}
            </div>
        )
    }
}