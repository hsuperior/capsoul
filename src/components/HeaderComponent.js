import React, { Component } from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, NavItem, Jumbotron } from 'reactstrap';
import { NavLink } from 'react-router-dom';

class Header extends Component {

    constructor(props) {
        super(props);

        this.toggleNav = this.toggleNav.bind(this);
        this.state = {
            isNavOpen: false
        };
    }

    toggleNav() {
        this.setState({
            // Turn Nav Bar Open on/off
            isNavOpen: !this.state.isNavOpen
        });
    }

    render() {
        return (
            <React.Fragment>
                <Jumbotron className="jumbotron"fluid>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <h1>CapSoul</h1>
                                <p>Rethink Notes</p>
                            </div>
                        </div>
                    </div>
                </Jumbotron>

                <Navbar dark sticky="top" expand="md">
                    <div className="container">
                        <NavbarToggler onClick={this.toggleNav} />
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <i className="fa fa-home fa-lg" /> Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/new">
                                        <i className="fa fa-home fa-lg" /> New Message
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/messages">
                                        <i className="fa fa-home fa-lg" /> Messages
                                    </NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>        
                    </div>
                </Navbar>
            </React.Fragment>
        )
    }
}

export default Header;