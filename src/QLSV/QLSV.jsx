import React, { Component } from 'react'

export default class QLSV extends Component {
  render() {
    return (
      <div className="container py-5">
        {/* form */}
        <div className="row">
          <div className="col-12">
            <h2 className='bg-dark text-white p-2'>Thông tin sinh viên</h2>

            <form>
              <div className="row py-3">
                <div className="col">
                  <label htmlFor="maSV">Mã SV</label>
                  <input type="text" className="form-control" name="maSV" />
                </div>
                <div className="col">
                  <label htmlFor="hoTen">Họ tên</label>
                  <input type="text" className="form-control" name="hoTen" />
                </div>
              </div>

              <div className="row py-3">
                <div className="col">
                  <label htmlFor="sodt">Số điện thoại</label>
                  <input type="text" className="form-control" name="sodt" />
                </div>
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input type="text" className="form-control" name="email" />
                </div>
              </div>

              <button className="btn btn-success">Thêm thành viên</button>
            </form>


          </div>
        </div>



        {/* table */}

        <div className="row my-5">
          <div className="col-12">

            <table className="table">
              <thead className='bg-dark text-white p-2'>
                <tr>
                  <th scope="col">Mã SV</th>
                  <th scope="col">Họ tên</th>
                  <th scope="col">Số điện thoại</th>
                  <th scope="col">Email</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>Nguyễn Văn A</td>
                  <td>0349930000</td>
                  <td>anguyenvan@gmail.com</td>
                </tr>
                
              </tbody>
            </table>


          </div>
        </div>

      </div>
    )
  }
}
