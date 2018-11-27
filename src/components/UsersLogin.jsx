import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { Link } from 'react-router-dom';
import ReactStrapNav from './ReactStrapNav';

const UsersLogin = () => {
    return (
        <div className="users-login">
            <ReactStrapNav/>
            <div className="login-form">
                <Form/>
                <FormGroup>
                <Label for="exampleEmail">Email</Label>
                <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
                </FormGroup>
                <FormGroup>
                <Label for="examplePassword">Password</Label>
                <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
                </FormGroup>
                <Button><Link to={'./users'}>Enter</Link></Button>
            </div>
        </div>
    )
}

// need to add auth

export default UsersLogin