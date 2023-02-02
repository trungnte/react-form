import React, { Component } from 'react'

import { connect } from 'react-redux';
class TableSV extends Component {

  renderTable = () => {
    return this.props.mangSV.map((sv) => {
      return <tr key={sv.maSV}>
                <td>{sv.maSV}</td>
                <td>{sv.hoTen}</td>
                <td>{sv.sdt}</td>
                <td>{sv.email}</td>
                <td>
                  <button onClick={() => {
                    let action = {
                      type: "XEM_CHI_TIET",
                      svXem: sv
                    }
                    this.props.dispatch(action);
                  }} className="btn btn-success">Sửa</button>
                  <button onClick={() => {
                    let action = {
                      type: "XOA_SV",
                      maSVXoa: sv.maSV
                    }
                    this.props.dispatch(action);
                  }} className="btn btn-danger">Xoá</button>
                </td>
              </tr>
    });
  }


  render() {
    return (
      <div className="row my-5">
        <div className="col-12">

          <table className="table">
            <thead className='bg-dark text-white p-2'>
              <tr>
                <th scope="col">Mã SV</th>
                <th scope="col">Họ tên</th>
                <th scope="col">Số điện thoại</th>
                <th scope="col">Email</th>
                <th scope="col"></th>
              </tr>
            </thead>
            <tbody>
              {this.renderTable()}
            </tbody>
          </table>


        </div>
      </div>
    )
  }
}


const mapStateToProps = (rootReducer) => {
  return {
    mangSV: rootReducer.QLSVReducer.mangSV
  }
}

export default connect(mapStateToProps)(TableSV);