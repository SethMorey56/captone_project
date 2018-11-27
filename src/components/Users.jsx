import React from 'react';
import ReactStrapNav from './ReactStrapNav';
import Messages from './Messages';
import Appointments from './Appointments';

const Users = () => {
    return (
        <React.Fragment>
            <ReactStrapNav/>
            <Appointments/>
            <Messages/>
        </React.Fragment>
    )
}

export default Users