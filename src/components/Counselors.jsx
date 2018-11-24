import React, { Component } from 'react';
import ReactStrapNav from './ReactStrapNav';
import CounselorsCards from './CounselorsCards';

export default class Counselors extends Component {

    render() {
        return (
            <React.Fragment>
            <ReactStrapNav/>
            <CounselorsCards/>
            </React.Fragment>
        )
    }
}