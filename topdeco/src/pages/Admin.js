import React from 'react'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import SideBar from '../components/SideBar'
import Client from './Client'
import Facture from './Facture'
import Home from './Home'
import Login from './Login'

const Admin = () => {
    return (
        <Router>
            <SideBar />
            <Switch>
                <Route path="/admin/" exact component={Home} />
                <Route path="/admin/login" exact component={Login} />
                <Route path="/admin/client" exact component={Client} />
                <Route path="/admin/facture" exact component={Facture} />
            </Switch>
        </Router>
        )
}

export default Admin
