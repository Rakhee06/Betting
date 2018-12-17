import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import numberBet from '../ethereum/numberBet';
import App from '../App';
import MainLoginPage from '../pages/Login';
import GiveRights from '../pages/GiveRights';
import SetNumber from '../pages/SetNumber';
import Bet from '../pages/Bet';
import Summary from '../pages/Summary';

export default class Routes extends Component {

    state = {
      chairperson: ''
    };

    async componentDidMount() {

        const chairperson = await numberBet.methods.chairperson().call();
        console.log(chairperson);
        this.setState({ chairperson: chairperson});

    }

    AdminLogin(){
        //console.log("Admin logged in");
        this.setState({
            AdminLoggedIn : true
        })
    }

    render() {

        return (

            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/' exact={true} component={ App } />
                        <Route path="/login" exact render={ ()=>(<MainLoginPage chairperson={this.state.chairperson} setAdminLogin={this.AdminLogin}/>)} />
                        <Route path="/giveRights" exact component= { GiveRights } />
                        <Route path="/setNumber" exact component= { SetNumber } />
                        <Route path="/bet" exact component= { Bet } />
                        <Route path="/summary" exact component= { Summary } />
                    </Switch>
                </div>
            </BrowserRouter>

        );
    }
};


