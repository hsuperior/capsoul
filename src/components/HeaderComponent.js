import React, { Component } from "react";
import {
  Nav,
  Navbar,
  NavbarBrand,
  NavbarToggler,
  Button,
  Collapse,
  NavItem,
  Jumbotron,
  Modal,
  ModalBody,
  ModalHeader,
} from "reactstrap";
import { NavLink } from "react-router-dom";
import "../App.css";
import MessageNoteForm from "./MessageNoteFormComponent";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggleNav = this.toggleNav.bind(this);
    this.state = {
      isNavOpen: false,
      isModalOpen: false,
    };

    this.toggleNav = this.toggleNav.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
  }

  toggleNav() {
    this.setState({
      // Turn Nav Bar Open on/off
      isNavOpen: !this.state.isNavOpen,
    });
  }

  toggleModal() {
    this.setState({
      isModalOpen: !this.state.isModalOpen,
    });
  }

  render() {
    return (
      <React.Fragment>
        <Jumbotron className="jumbotron" fluid>
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
              <span className="navbar-text ml-auto">
                <Button outline onClick={this.toggleModal}>
                  <i className="fa fa-sign-in fa-lg" /> New Message
                </Button>
              </span>
            </Collapse>
          </div>
        </Navbar>

        <Modal isOpen={this.state.isModalOpen} toggle={this.toggleModal}>
          <ModalHeader toggle={this.toggleModal}>New Message</ModalHeader>
          <ModalBody>
            <MessageNoteForm />
          </ModalBody>
        </Modal>
      </React.Fragment>
    );
  }
}

export default Header;
