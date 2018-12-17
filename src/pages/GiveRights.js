import React, { Component } from 'react';
import {Grid, Form, Input, Button, Message } from 'semantic-ui-react';

import Layout from '../components/Layout';
import web3 from "../ethereum/web3";
import numberBet from "../ethereum/numberBet";
import {Link} from "react-router-dom";

export default class GiveRights extends Component {

    state = {
        rights:'',
        errorMessage: '',
        endErrorMessage: '',
        loadingAdd: false,
        loadingEnd: false

    };

    onSubmit = async (event) => {

        event.preventDefault();

        this.setState({ loadingAdd: true, errorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            await numberBet.methods.giveRightToBet(this.state.rights)
                .send({
                    from: accounts[0]
                });

            // this.props.history.push('/setNumber');
            // Router.pushRoute(`/campaigns/${this.props.address}/requests`)

        }
        catch(error) {
            this.setState({ errorMessage: error.message});
        }
        this.setState({ loadingAdd: false, rights: '' });

    };

    handleButton = async (event) => {

        event.preventDefault();

        this.setState({ loadingEnd: true, endErrorMessage: '' });
        try {
            const accounts = await web3.eth.getAccounts();
            console.log(accounts);
            await numberBet.methods.endBet()
                .send({
                    from: accounts[0]
                });
        }
        catch(error) {
            this.setState({ endErrorMessage: error.message});
        }
        this.setState({ loadingEnd: false });

    };

    render() {
        return (

            <Layout>
                <h3>Give Rights!</h3>
                <Grid style={{ marginLeft: '5px' }}>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Form onSubmit={this.onSubmit} error={!!this.state.errorMessage} >
                                <Form.Field>
                                    <label>User Address</label>
                                    <Input
                                        placeholder='0x....'
                                        value={this.state.rights}
                                        onChange={ event => {
                                            this.setState({ rights: event.target.value })
                                        }}
                                    />
                                </Form.Field>
                                <Message
                                    error
                                    header='Oops!'
                                    content={this.state.errorMessage}
                                />
                                <Button loading={this.state.loadingAdd} primary>Add</Button>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column width={8}>
                            <Form onSubmit={this.handleButton} error={!!this.state.endErrorMessage}>
                                <Form.Field>
                                    <Message
                                        error
                                        header='Oops!'
                                        content={this.state.endErrorMessage}
                                    />
                                    <Button
                                        style={{ marginTop: '23px' }}
                                        primary
                                        loading={this.state.loadingEnd}
                                    >
                                        End Bet
                                    </Button>
                                </Form.Field>
                            </Form>
                        </Grid.Column>
                    </Grid.Row>
                    <Grid.Row>
                        <Grid.Column>
                            <Link to='/setNumber'>Back</Link>
                        </Grid.Column>
                    </Grid.Row>
                </Grid>
            </Layout>

        );
    };
};