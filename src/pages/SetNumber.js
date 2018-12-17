import React, { Component } from 'react';
import {Grid, Form, Input, Button, Message } from 'semantic-ui-react';
import { withRouter } from 'react-router-dom';

import Layout from '../components/Layout';
import numberBet from '../ethereum/numberBet';
import web3 from '../ethereum/web3';

export default class BetNumber extends Component {

    state = {
        setBetNumber: '',
        errorMessage: '',
        loading: false
    };

    onSubmit = async (event) => {

        event.preventDefault();

        // const betApp = numberBet(this.props.address);

        this.setState({ loading: true, errorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await numberBet.methods.setBetNumberLimit(this.state.setBetNumber)
                .send({
                    from: accounts[0]
                });

            this.props.history.push('/giveRights');
            // Router.pushRoute(`/campaigns/${this.props.address}/requests`)

        }
        catch(error) {
            this.setState({ errorMessage: error.message});
        }
        this.setState({ loading: false });


    };

    render() {
        return (

            <Layout>
                <h3>Set the Bet Number</h3>
                <Grid>
                    <Grid.Column width={10}>
                        <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage}>
                            <Form.Field>
                                <Input
                                    value={this.state.setBetNumber}
                                    onChange={event => {
                                        this.setState({ setBetNumber: event.target.value }) }}
                                />
                            </Form.Field>
                            <Message
                                error
                                header='Oops!'
                                content={this.state.errorMessage}
                            />
                            <Button loading={this.state.loading} primary>Set</Button>
                        </Form>
                    </Grid.Column>
                    <Grid.Column width={6}>
                    </Grid.Column>
                </Grid>
            </Layout>

        );
    };
};
