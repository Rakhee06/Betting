import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Button , Icon } from 'semantic-ui-react';
import axios from 'axios';

export default class Header extends Component {

    state = {
      username: '',
      password: '',
      error: ''

    };

    onClick = (event) => {

        event.preventDefault();

        axios
            .post('http://localhost:5000/api/logout', this.state)
            .then(result => {
                if (result.data.errors) {
                    return this.setState({errors: result.data})
                }
                if (result.data.error) {
                    return this.setState({
                        error: result.data.message
                    })
                }
            });
    };

    render() {

        return(
            <Menu style={{ marginTop: '10px' }}>
                <Link to='/login' className='item'> Betting App </Link>
                <Menu.Menu position='right'>
                        <Link to='/' className='item' >
                            <Icon name='sign-out alternate'/>
                            Logout
                        </Link>
                </Menu.Menu>
            </Menu>
        );

    }

};