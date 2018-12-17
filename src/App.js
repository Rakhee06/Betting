import React, { Component } from 'react';
import { Nav, Navbar, NavItem, Jumbotron } from 'react-bootstrap';

class App extends Component {

  render() {
    return (
        <div>
            <div>
                <Navbar>
                    <Nav pullRight>
                        <NavItem eventKey={1} href="/login">
                            Login
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
            <div>
                <Jumbotron>
                    <div className="text-center">
                        <h2>Welcome to Betting Application!</h2>
                        <p>An application based on decentralized network.</p>
                        <p><a className="btn btn-success" href="https://ethereum.stackexchange.com/questions/383/what-is-a-dapp" role="button">Learn More</a></p>
                        <p style={ { fontSize: '16px', color: '#aaa' } }>Currently at v4.15.0</p>
                    </div>
                </Jumbotron>
            </div>
        </div>
    );
  }
}

export default App;
