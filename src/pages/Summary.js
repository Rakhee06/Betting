import React, { Component } from 'react';
import {Button, Card, Grid} from 'semantic-ui-react';
import { Link } from 'react-router-dom';

import Layout from '../components/Layout';
import numberBet from "../ethereum/numberBet";
import web3 from "../ethereum/web3";

export default class Summary extends Component {

    constructor(props){
        super(props);

        this.state = {
            address: '',
            initialAmount: '',
            amountWon: '',
            amountLost: '',
            winningNumber: ''
        };
        this.getDetails = this.getDetails.bind(this);
        this.renderCards = this.renderCards.bind(this);
    }

    async getDetails() {

        const accounts = await web3.eth.getAccounts();
        const summary = await numberBet.methods.showSummary(accounts[0]).call();

        this.setState({
            address: accounts[0],
            initialAmount: summary[0],
            amountWon: summary[1],
            amountLost: summary[2],
            winningNumber: summary[3]
        });

    };

    renderCards() {

        const {
            address,
            initialAmount,
            amountWon,
            amountLost,
            winningNumber

        } = this.state;

        const items = [
            {
                header: address,
                description: 'Address of the User',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: initialAmount,
                description: 'Total Amount Bet',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: amountWon,
                description: 'Amount Won',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: amountLost,
                description: 'Amount Lost',
                style: { overflowWrap: 'break-word' }
            },
            {
                header: winningNumber,
                description: 'Winning Number',
                style: { overflowWrap: 'break-word' }
            }
        ];

        return <Card.Group items={items}/>
    }


    render() {

        return(

            <Layout>
                <Grid style={{ marginLeft: '4px' }}>
                    <Grid.Row>
                        <Grid.Column width={6}>
                            <Button primary style={{ marginBottom: '10px' }} onClick={this.getDetails}>Summary</Button>
                        </Grid.Column>
                        <Grid.Column width={12}>
                            {this.renderCards()}
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link to='/bet'>Back</Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>

            </Layout>

        );
    }
}