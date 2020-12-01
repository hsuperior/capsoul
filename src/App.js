import React, { Component } from 'react';
import Message from './components/MessageComponent';
import logo from './logo.svg';
import './App.css';
import { BrowserRouter } from 'react-router-dom';

class App extends Component {
  render() {
    return (
        <BrowserRouter>
          <div className="App">
            <Message />
          </div>
        </BrowserRouter>
      );
}
}

export default App;
