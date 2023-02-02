import React, { Component } from 'react'
import { connect } from 'react-redux'

class FormSV extends Component {

  state = {
    values: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: ""
    },
    errors: {
      maSV: "",
      hoTen: "",
      sdt: "",
      email: ""
    }
  }

  handleOnChange = (event) => {
    console.log("Form: event.target: ", event.target);
    let {value, name} = event.target;

    let newValues = {...this.state.values};
    newValues[name] = value;

    let typeform = event.target.getAttribute("typeform");
    console.log("Form: typeform: ", typeform);

    let msgError = "";
    if (value.trim() === ""){
      msgError = `${name} không được để trống`;
    }
    //! kiem tra email
    let regexp = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
    if (typeform === "email") {
      // neu la email
      if (!regexp.test(value)) {
        // value khong dung voi dinh dang regexp
        msgError = `Email không đúng định dạng`;
      }
    }

    let newErrors = {...this.state.errors};
    newErrors[name] = msgError;

    this.setState({
      values: newValues,
      errors: newErrors
    }, () => {
      console.log("Form: SetState: ", this.state);
    });

  }


  handleOnSubmit = (event) => {
    // ! Ngan load lai trang web khi submit
    event.preventDefault();
    // console.log("handleOnSubmit:");
    let isValid = true;
    //! kiem tra errors con chua noi dung nao loi khong?
    for (const property in this.state.errors) {
      if (this.state.errors[property] !== "") {
        // thuoc tinh con bi loi
        isValid = false;
        console.log("Error: ", property); // ten thuoc tinh
      }
    
    }

    //! kiem tra du lieu rong khi user khong doi gia tri, khong chay onChange
    for (const property in this.state.values) {
      if (this.state.values[property] === "") {
        // thuoc tinh rong
        isValid = false;
        console.log("property: ", property);
      }
    }

    if (isValid) {
      // khong con loi -> day values (Nguoi dung moi) len redux
      // console.log("Hop le");
      let action = {
        type: "THEM_SV",
        sv: this.state.values
      }
      this.props.dispatch(action);
    }
    else {
      alert("Form không được để trống");
    }
  }


  //!Chỉ chạy khi props đổi
  componentWillReceiveProps(newProps) {
    this.setState({
      values: newProps.svChiTiet
    });
  }


  render() {
    console.log("Form:", this.props);

    let {maSV, hoTen, sdt, email} = this.state.values;


    return (
      <div className="row">
          <div className="col-12">
            <h2 className='bg-dark text-white p-2'>Thông tin sinh viên</h2>

            <form  onSubmit={this.handleOnSubmit}>
              <div className="row py-3">
                <div className="col">
                  <label htmlFor="maSV">Mã SV</label>
                  <input 
                    value={maSV}
                    onChange={(event) => {
                      this.handleOnChange(event);
                    }}
                    type="text" className="form-control" name="maSV" />
                  <p className='text-danger'>{this.state.errors.maSV}</p>

                </div>

                <div className="col">
                  <label htmlFor="hoTen">Họ tên</label>
                  <input 
                    value={hoTen}
                    onChange={this.handleOnChange}
                    type="text" className="form-control" name="hoTen" />
                  <p className='text-danger'>{this.state.errors.hoTen}</p>

                </div>
              </div>

              <div className="row py-3">
                <div className="col">
                  <label htmlFor="sdt">Số điện thoại</label>
                  <input 
                    value={sdt}
                    onChange={this.handleOnChange}
                    type="text" className="form-control" name="sdt" />
                  <p className='text-danger'>{this.state.errors.sdt}</p>

                </div>
                <div className="col">
                  <label htmlFor="email">Email</label>
                  <input 
                    value={email}
                    onChange={this.handleOnChange}
                    typeform="email" type="text" className="form-control" name="email" />
                  <p className='text-danger'>{this.state.errors.email}</p>

                </div>
              </div>

              <button className="btn btn-success">Thêm thành viên</button>
            </form>


          </div>
        </div>
    )
  }
}

const mapStateToProps = (rootReducer) => {
  return {
    svChiTiet: rootReducer.QLSVReducer.svChiTiet
  }
}

export default connect(mapStateToProps)(FormSV);