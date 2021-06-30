import React from "react"

class Client extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: []
        };
    }

    componentDidMount() {
        fetch('http://192.168.79.129:3001/client')
            .then(res => res.json())
            .then(json => {
                this.setState({
                    isLoaded: true,
                    items: json
                })
            });
        // var request = new XMLHttpRequest();
        // request.open('GET', 'http://192.168.79.129:3001/client', false);
        // request.onerror = function () {
        //     this.setState({error : "Can't get response from the API"})
        // }
        // request.send();
        // this.setState({items: request.response, isLoaded : true})
        // console.log(this.state.items)
    }

    render() {
        const { error, isLoaded, items } = this.state;
        if (error) {
            return <div>Erreur : {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Chargement…</div>;
        } else {
            return (
                <ul>
                    {items.map(item => (
                        <li key={item.id}>
                        {item.nom_societe} {item.adresse_1} {items.adresse_2} {items.ville}
                        </li>
                    ))}
                </ul>
            );
        }
    }
}

export default Client