import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from 'react-super-responsive-table'


function RowEmployeeEntry(props) {
  return (
    <Tr>
      <Td >{<img alt={props.email} src={props.imageUrl}></img>}</Td>
      <Td> {props.firstName} {props.lastName}</Td>
      <Td>{props.phoneNumber}</Td>
      <Td>{props.email}</Td>
      <Td>{props.dateOfBirth}</Td>
    </Tr>

  );
}

export default RowEmployeeEntry;