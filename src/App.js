import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from './util/API'
import Header from './components/Header'

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
        <Header />

      </div>
    );
  }
}

export default App;
