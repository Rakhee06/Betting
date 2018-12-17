import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Grid, Form, Input, Button, Message } from "semantic-ui-react";

import Layout from '../components/Layout';
import web3 from "../ethereum/web3";
import numberBet from "../ethereum/numberBet";

export default class Bet extends Component {

    state = {
        betNumber: '',
        errorMessage: '',
        amount: '',
        loading: false
    };

    onSubmit = async (event) => {

        event.preventDefault();

        this.setState({ loading: true, errorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await numberBet.methods.Bet(this.state.betNumber, this.state.amount)
                .send({
                    from: accounts[0]
                });
        }
        catch(error) {
            this.setState({ errorMessage: error.message});
        }
        this.setState({ loading: false, betNumber: '', amount: '' });

    };


    render() {

        return (

            <Layout>
                <h3>Bet Number</h3>
                <Grid>
                    <Grid.Row>
                        <Grid.Column width={10}>
                            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                                <Form.Field>
                                    <Input
                                       value={this.state.betNumber}
                                       onChange={event => {
                                           this.setState({ betNumber: event.target.value })
                                       }}
                                    />
                                </Form.Field>
                                <Form.Field>
                                    <label>Amount to Bet</label>
                                    <Input
                                        label='wei'
                                        labelPosition='right'
                                        value={this.state.amount}
                                        onChange={event => {
                                            this.setState({ amount: event.target.value })
                                        }}
                                    />
                                </Form.Field>
                                <Message
                                    error
                                    header='Oops!'
                                    content={this.state.errorMessage}
                                />
                                <Button loading={this.state.loading} primary>Bet</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link to='/summary'>Summary</Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>


        );
    }
}