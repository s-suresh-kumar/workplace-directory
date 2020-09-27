import React from "react";
import "./sortedEmployeeDirectory.css";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'
import RowEmployeeEntry from './RowEmployeeEntry.js'
import 'react-super-responsive-table/dist/SuperResponsiveTableStyle.css'

class SortedEmployeeDirectory extends React.Component {

  state = {
    sortByName: true,
    sortByDob: true,
    sortedEmployeeDirectory: []
  }

  componentDidMount() {
    console.log('SortedEmployeeDirectory::CDM', this.props.empDir.length)
    console.log('SortedEmployeeDirectory::CDM', this.props.empDir)
    if (this.state.sortedEmployeeDirectory.length < 1) {
      this.setState({
        sortedEmployeeDirectory: this.props.empDir
      })
    }
  }

  componentDidUpdate(lastProps) {
    console.log('SortedEmployeeDirectory::CDU', this.props.empDir.length)
    console.log('SortedEmployeeDirectory::CDU', this.props.empDir)
    if (this.props.empDir !== lastProps.empDir) {
      this.setState({
        sortedEmployeeDirectory: this.props.empDir
      })
    }
  }

  doSortByDOB = () => {
    let sortedEmp = [];
    if (this.state.sortByDob) {
      sortedEmp = this.props.empDir.sort((a, b) => {
        const dobX = new Date(a.dob.date), dobY = new Date(b.dob.date);
        if (dobX < dobY)
          return -1
        if (dobX > dobY)
          return 1
        return 0
      })
    } else {
      sortedEmp = this.props.empDir.sort((a, b) => {
        const dobX = new Date(a.dob.date), dobY = new Date(b.dob.date);
        if (dobX > dobY)
          return -1
        if (dobX < dobY)
          return 1
        return 0
      })
    }
    this.setState({
      sortByDob: !this.state.sortByDob,
      sortedEmployees: sortedEmp

    })
  }

  doSortByName = () => {
    let sortedEmp = [];
    if (this.state.sortByName) {
      sortedEmp = this.props.empDir.sort((a, b) => {
        const nameLeft = a.name.last.toLowerCase(), nameRight = b.name.last.toLowerCase();
        if (nameLeft < nameRight)
          return -1;
        if (nameLeft > nameRight)
          return 1;
        return 0;
      })
    } else {
      sortedEmp = this.props.empDir.sort((a, b) => {
        const nameLeft = a.name.last.toLowerCase(), nameRight = b.name.last.toLowerCase();
        if (nameLeft > nameRight)
          return -1;
        if (nameLeft < nameRight)
          return 1;
        return 0;
      })
    }
    this.setState({
      sortByName: !this.state.sortByName,
      sortedEmployeeDirectory: sortedEmp

    })
  }

  render() {
    return (
      <div className="container-md">
        <Table>
          <Thead>
            <Tr>
              <Th>Image</Th>
              <Th onClick={this.doSortByName} className="cur-pointer" scope="col">Name</Th>
              <Th>Phone</Th>
              <Th>Email</Th>
              <Th onClick={this.doSortByDOB} className="cur-pointer" scope="col">DOB</Th>
            </Tr>
          </Thead>
          <Tbody>
            {
              (this.state.sortedEmployeeDirectory.length > 0) &&

              this.state.sortedEmployeeDirectory.map((elem, index) => (

                <RowEmployeeEntry
                  key={elem.dob.age * Math.random()}
                  imageUrl={elem.picture.thumbnail}
                  firstName={elem.name.first}
                  lastName={elem.name.last}
                  dateOfBirth={elem.dob.date.split('T')[0]}
                  phoneNumber={elem.phone}
                  email={elem.email}
                />
              ))
            }
          </Tbody>
        </Table >
      </div >
    );
  }
}

export default SortedEmployeeDirectory;