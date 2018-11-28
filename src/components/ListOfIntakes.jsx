import React, { Component } from 'react';
import axios from 'axios';
import { ListGroup, ListGroupItem } from 'reactstrap';
import { BrowserRouter as Router, Route, Link, Redirect } from 'react-router-dom';


export default class ListOfIntakes extends Component {

    constructor() {
        super()
        this.state = {
            redirect: false
        }
    }

    render() {

        return (
            <React.Fragment>

                <ListGroup>
                    <Link to={`/client/${this.props.intake.id}`}><ListGroupItem>{this.props.intake.name}</ListGroupItem></Link>
                </ListGroup>

            </React.Fragment>
        )
    }
}
