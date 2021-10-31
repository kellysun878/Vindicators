import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom'
import { getResult } from './apis.js';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <NameForm />
        </div>
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
          Hi Sumedh!
        </p> 
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
      </header>
    </div>
  );
}

export default App;

class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {value: ''};

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  useEffect() {
    async function fetchResults() {
      const results = await getResult();
      this.setState = {value: this.state.value, result: results};
      console.log(results);
    }
    fetchResults();
  };

  handleChange(event) {
    this.setState({value: event.target.value});
  }

  handleSubmit(event) {
    async function fetchResults() {
      const results = await getResult();
      // this.setState = {value: this.state.value, result: results};
      console.log(results);
    }
    fetchResults();
    alert('I have received text: ' + this.state.value);
    event.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Journal Entry:
          <input type="text" id="txtfile" value={this.state.value} onChange={this.handleChange}/>
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

ReactDOM.render(
  <App />,
  document.getElementById('root')
);
