import React from "react";
import "./filteredEmployeeDirectory.css";
import SortedEmployeeDirectory from './SortedEmployeeDirectory';

class FilteredEmployeeDirectory extends React.Component {

  state = {
    searchEmp: "",
    filteredEmployeeDirectory: []
  };

  componentDidMount() {
    // console.log('FilteredEmployeeDirectory::length', this.props.employeeDirectory.length)
    // console.log('FilteredEmployeeDirectory::employees', this.props.employeeDirectory)
    if (this.state.filteredEmployeeDirectory.length < 1) {
      this.setState({
        filteredEmployeeDirectory: this.props.employeeDirEntries
      })
    }
  }


  handleInputChange = event => {
    this.setState({
      searchEmp: event.target.value
    });
    let searchVal = event.target.value;
    const filteredList = this.props.employeeDirEntries.filter((item) => {
      let values = item.name.title + item.name.first + item.name.last + item.dob.date + item.email + item.phone;
      return values.indexOf(searchVal) !== -1;

    });

    this.setState({
      filteredEmployeeDirectory: filteredList
    });
  }

  render() {
    return (
      <div className="container-md">
        <form className="form">
          <input
            value={this.state.searchEmp}
            name="searchEmpDirectory"
            onChange={event => this.handleInputChange(event)}
            type="text"
            placeholder="Search in the Directory "
          />
        </form>
        {
          // console.log('length',this.state.filteredEmployeeDirectory.length);
          // console.log('employees',this.state.filteredEmployeeDirectory) 
          this.state.filteredEmployeeDirectory.length > 0 &&
          <SortedEmployeeDirectory empDir={this.state.filteredEmployeeDirectory} />
        }
      </div>
    );
  }
}


export default FilteredEmployeeDirectory;