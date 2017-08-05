import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import './Sales.css';

class Receipts extends Component {
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
          <h2>Enter Your Weekly Receipts</h2>
          <br />
        </div>
        <form onSubmit={this.handleSubmit}>
            <label>
            Ingredient Received:<br />
              <input type="text" name="Ingredient" />
              <br />
            Quantity Received This Week:<br />
              <input type="number" name="receiptQty" value={this.state.value} onChange={this.handleChange} />
              <br />
            </label>
            <br />
            <input type="submit" value="enterReceipts" className="wklyReceipts" />
          </form>
        </div>
    );
  }
}

export default Receipts