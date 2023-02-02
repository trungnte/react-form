import React, { Component } from 'react'
import FormSV from './FormSV'
import TableSV from './TableSV'

export default class QLSV extends Component {
  render() {
    return (
      <div className="container py-5">
        {/* form */}
        <FormSV/>

        {/* table */}
        <TableSV/>

      </div>
    )
  }
}
