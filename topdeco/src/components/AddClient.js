import React, { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import styled from 'styled-components'

export default function AddClient() {
    const [nom_societe, setNom_societe] = useState("");
    const [adresse_1, setAdresse_1] = useState("");
    const [adresse_2, setAdresse_2] = useState("");
    const [ville, setVille] = useState("");

    function validateForm() {
        return nom_societe.length > 0 && adresse_1.length > 0
        && adresse_2.length > 0 && ville.length > 0;
    }

    function handleSubmit(event) {
        const myUrlWithParams = new URL("http://localhost:3001/add_client");

        myUrlWithParams.searchParams.append("nom_societe", nom_societe);
        myUrlWithParams.searchParams.append("adresse_1", adresse_1);
        myUrlWithParams.searchParams.append("adresse_2", adresse_2);
        myUrlWithParams.searchParams.append("ville", ville);

        console.log(myUrlWithParams.href);
        fetch(myUrlWithParams)
        alert("Query envoyé")
    }

    return (
        <Form onSubmit={handleSubmit}>
            <Form.Group size="lg" controlId="email">
            <Form.Label>Nom de la societe</Form.Label>
            <Form.Control
                autoFocus
                type="string"
                value={nom_societe}
                onChange={(e) => setNom_societe(e.target.value)}
            />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
            <Form.Label>Adresse 1</Form.Label>
            <Form.Control
                type="string"
                value={adresse_1}
                onChange={(e) => setAdresse_1(e.target.value)}
            />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
            <Form.Label>Adresse 2</Form.Label>
            <Form.Control
                type="string"
                value={adresse_2}
                onChange={(e) => setAdresse_2(e.target.value)}
            />
            </Form.Group>

            <Form.Group size="lg" controlId="password">
            <Form.Label>Ville</Form.Label>
            <Form.Control
                type="string"
                value={ville}
                onChange={(e) => setVille(e.target.value)}
            />
            </Form.Group>
                <Button className = 'login-form-button' block size="lg" type="submit" disabled={!validateForm()}>
                    Enregistrer
                </Button>
        </Form>
    );
}