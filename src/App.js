import React, { Component } from "react";
import Message from "./components/MessageComponent";
import logo from "./logo.svg";
import { BrowserRouter } from "react-router-dom";
import MessageNoteForm from "./components/MessageNoteFormComponent";
import { Provider } from "react-redux";
import Header from "./components/HeaderComponent";
import { ConfigureStore } from "./redux/configureStore";
import "./App.css";
import Main from "./components/MainComponent";

const store = ConfigureStore();

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div className="App">
            <Main />
          </div>
          <div></div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
