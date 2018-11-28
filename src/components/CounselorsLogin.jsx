import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactStrapNav from './ReactStrapNav';

const CounselorsLogin = () => {
    return (
        <div className="users-login">
            <ReactStrapNav/>
            <div className="login-form">
                <Form/>
                <FormGroup>
                <h1 id="login-text" for="exampleEmail">Email</h1>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                <Label id="login-text" for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <Button><Link to={'./CounselorsDashboard'}>Enter</Link></Button>
            </div>
        </div>
    )
}

export default CounselorsLogin