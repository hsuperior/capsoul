import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect, Route, Switch, withRouter } from "react-router";
import Header from "./HeaderComponent";
import Home from "./HomeComponent";
import Message from "./MessageComponent";

const mapStateToProps = (state) => {
  return {
    infoMessages: state.infoMessages,
  };
};

class Main extends Component {
  // We mapping the props to the state so we don't need constructor

  render() {
    const HomePage = () => {
      console.log("Render Main props: " + JSON.stringify(this.props));
      console.log("Info Messages: " + JSON.stringify(this.props.infoMessages));
      return <Home infoMessage={this.props.infoMessages} />;
    };

    return (
      <div>
        <Header />
        <Switch>
          <Route path="/home" component={HomePage} />
          <Route path="/messages" render={() => <Message />} />
          <Redirect to="/home" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(mapStateToProps)(Main));
