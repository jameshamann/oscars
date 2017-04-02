import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import oscar from '../Oscar-Movie-Winners.json';

class App extends Component {


  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    console.log(oscar[2]);
    alert('The Oscar Winner for Best Picture in: ' + this.state.value + ' was: ' + oscar[this.state.value - 1928].value);
    event.preventDefault();
  }

 reqListener(e) {

  }

  render() {
    var date = new Date();
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>What won Best Picture the year you were born?</h2>
        </div>
        <p className="App-intro">
          Type in a year between 1929 and 2016, hit submit and see what won best picture!
        </p>
        <form onSubmit={this.handleSubmit}>
       <label>
         Year:
         <input type="year" value={this.state.value} onChange={this.handleChange} />
       </label>
       <input type="submit" value="Submit" />
     </form>
      </div>
    );
  }
}

export default App;
