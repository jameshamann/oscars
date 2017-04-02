import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';


var Select = require('react-select');

class App extends Component {


  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>What won Best Picture the year you were born?</h2>
        </div>
        <p className="App-intro">
          Choose a year and hit submit to see what won best picture!
        </p>
        <Select
          name="form-field-name"
          options={options}
          onChange={logChange}
        />
      <select id="year" name="year"></select>
      <input type="submit" value="Submit!"/>
      </div>
    );
  }
}

export default App;
