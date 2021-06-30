import React, {useState, useEffect} from "react"
import AddClient from "../components/AddClient";

const fetchURL = "http://localhost:3001/client";
const getItems = () => fetch(fetchURL).then(res => res.json());

function List({ items, fallback }) {
    if (!items || items.length === 0) {
        return fallback;
    } else {
        return items.map(item => {
            return <div key={item.id}>{item.nom_societe}, {item.adresse_1}, {item.adresse_2}, {item.ville}</div>;
        });
    }
}

function Client() {
    const [items, setItems] = useState([]);

    useEffect(() => {
        getItems().then(data => setItems(data));
    }, []);

    return (
        <div>
            Ajouter un client
            <AddClient />
            Liste des client :
            <List items={items} fallback={"Loading..."} />
        </div>
    );
}
export default Client