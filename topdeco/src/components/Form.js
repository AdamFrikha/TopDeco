import React, { Component } from 'react'

export default class Form extends Component {
    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: ''
        };
        this.handleUserNameChange = this.handleUserNameChange.bind(this);
        this.handlePassWordChange = this.handlePassWordChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleUserNameChange(event) {
        this.setState({username: event.target.value});
    }

    handlePassWordChange(event) {
        this.setState({password: event.target.value});
    }

    handleSubmit(event) {
        alert('Username : ' + this.state.username + "\n Password : " + this.state.password);
        event.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleSubmit}>
            <label>
                Nom :
                <input type="Username" value={this.state.username} onChange={this.handleUserNameChange} />
            </label>
            <label>
                Nom :
                <input type="Password" value={this.state.password} onChange={this.handlePassWordChange} />
            </label>
            <input type="submit" value="Envoyer" />
            </form>
        );
    }
}
