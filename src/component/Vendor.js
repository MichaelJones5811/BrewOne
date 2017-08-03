import React, { Component } from 'react';
import ReactDOM from 'react-dom';
//import './Sales.css';

class Vendor extends Component {
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
          <h2>Add New Vendor</h2>
          <br />
        </div>
        <form onSubmit={this.handleSubmit}>
            <label>
            Vendor Name:<br />
              <input type="text" name="vendorname" value={this.state.value} onChange={this.handleChange}/>
              <br />
            Phone Number:<br />
              <input type="text" name="telephone_number"  />
              <br />
            Email:<br />
              <input type="text" name="email" />
              <br />
            Street Address:<br />
              <input type="text" name="address" />
              <br />
            City:<br />
              <input type="text" name="city" />
              <br />
            State:<br />
              <input type="text" name="state" />
              <br /> 
            Zip:<br />
              <input type="text" name="zip" />
              <br />
            </label>
            <br />
            <input type="submit" value="enterVendor" className="VendorInfo" />
          </form>
        </div>
    );
  }
}

export default Vendor