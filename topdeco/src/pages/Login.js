import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from 'styled-components'
import "./Login.css";

export default function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    function handleSubmit(event) {
        event.preventDefault();
    }

    return (
        <loginDiv>
            <Form className = 'login-form' onSubmit={handleSubmit}>
                <Form.Group size="lg" controlId="email">
                <Form.Label>Email</Form.Label>
                <Form.Control
                    autoFocus
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
                </Form.Group>
                <Form.Group size="lg" controlId="password">
                <Form.Label>Password</Form.Label>
                <Form.Control
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                </Form.Group>
                <centerDiv>
                    <Button className = 'login-form-button' block size="lg" type="submit" disabled={!validateForm()}>
                        Login
                    </Button>
                </centerDiv>
            </Form>
        </ loginDiv>
    );
}

const loginDiv = styled.div`
    padding: 60px 0;
    margin: auto;
`;

const centerDiv  =styled.div`
    display: block;
    margin: 0 auto;
    text-align: center;
`;