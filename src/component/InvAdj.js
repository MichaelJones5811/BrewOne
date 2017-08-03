import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import './Sales.css';

class InvAdj extends Component {
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
          <h2>Enter Any Weekly Inventory Losses</h2>
          <br />
        </div>
        <form onSubmit={this.handleSubmit}>
            <label>
            Ingredient Lost:<br />
              <input type="text" name="Ingredient" />
              <br />
            Quantity Adjusted This Week:<br />
              <input type="number" name="lossQty" value={this.state.value} onChange={this.handleChange} />
              <br />
            Loss Reason:<br />
              <input type="text" name="reasonCode" />
              <br /> 
            </label>
            <br />
            <input type="submit" value="enterLoss" className="wklyLoss" />
          </form>
        </div>
    );
  }
}

export default InvAdj