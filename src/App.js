import React from 'react';
import logo from './logo.svg';
import './App.css';
import API from './util/API'
import Header from './components/Header'
import FilteredEmployeeDirectory from './components/FilteredEmployeeDirectory'

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
      <div className="App container-fluid" >
        <Header />
        {this.state.employeeDirEntries.length > 0 &&

          <FilteredEmployeeDirectory employeeDirEntries={this.state.employeeDirEntries} />
        }

      </div>
    );
  }
}

export default App;
