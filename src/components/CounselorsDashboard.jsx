import React, { Component } from 'react';
import CounselorsMessages from './CounselorsMessages';
import CounselorsClients from './CounselorsClients';
import ReactStrapNav from './ReactStrapNav';
import CounsleorsIntakeView from './CounselorsIntakeView';

export default class CounselorsDashboard extends Component {
    
    render() {
        return (
            <div>
                <ReactStrapNav/>
                <CounselorsMessages/>
                <CounselorsClients/>
                <CounsleorsIntakeView/>
            </div>
        )
    }
}