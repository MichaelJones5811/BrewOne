import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './App.css';

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
    alert('A name was created: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to BrewOne</h2>
          <br />
        </div>
        <br />
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Email:<br />
              <input type="text" name="Email" value={this.state.value} onChange={this.handleChange} />
              <br />
              Password:<br />
              <input type="text" name="Password" />
            </label>
            <br />
            <input type="submit" value="Create" className="Create" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
