import React, { Component, PropTypes } from 'react';
import ReactDOM from 'react-dom';
//import './Sales.css';


export default class Sales extends Component {
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
          <h2>Enter Your Weekly Sales</h2>
          <br />
        </div>
        <form onSubmit={this.handleSubmit}>
            <label>
            Item Sold:<br />
              <input type="text" name="Item" />
              <br />
            Quantity Sold This Week:<br />
              <input type="number" name="salesQty" value={this.state.value} onChange={this.handleChange} />
              <br />
            </label>
            <br />
            <input type="submit" value="enterSales" className="wklySales" />
          </form>
        </div>
    );
  }
}

