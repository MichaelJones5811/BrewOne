import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './Select.css';

class Select extends Component {
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
    this.setState({value: event.target.value});
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
              <input type="checkbox" name="Porter" value="Porter"/>
              <br />
              <input type="checkbox" name="Lagiur" value="Lagiur"/>
              <br />
              <input type="checkbox" name="IPA" value="IPA"/>
              <br />
            <input type="submit" value="Submit" className="Submit" />
          </form>
        </div>
      </div>
    );
  }
}

export default App;
