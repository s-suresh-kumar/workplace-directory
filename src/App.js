import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from './util/API'

class App extends React.Component {
  state = {
    employeeDirEntries: [],
  };

  componentDidMount() {
    API.getRandomUsers()
      .then(response => {
        this.setState({ employeeDirEntries: response.data.results });
        console.log('respone', response)
      })
      .catch(error => console.log(error));
  }
  render() {
    console.log('employeeDirEntries', this.state.employeeDirEntries);
    return (
      <div className="App" >
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
        </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }
}

export default App;
