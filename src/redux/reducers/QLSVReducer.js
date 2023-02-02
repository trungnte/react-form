const initialState = {
  mangSV: [
    {
      maSV: "1",
      hoTen: "Nguyễn Văn A",
      sdt: "0123456789",
      email: "a@test.com"
    },
    {
      maSV: "2",
      hoTen: "Trần Văn B",
      sdt: "0987654321",
      email: "b@test.com"
    }
  ],
  svChiTiet: {
    maSV: "",
    hoTen: "",
    sdt: "",
    email: ""
  }
}

export const QLSVReducer =  (state = initialState, action) => {
  switch (action.type) {

    case "THEM_SV":
      state.mangSV = [...state.mangSV, action.sv];
      return {...state}
  
    case "XOA_SV":
      state.mangSV = state.mangSV.filter((sv)=>{
        return sv.maSV !== action.maSVXoa;
      });

      state.mangSV = [...state.mangSV];
      return {...state}
  
    case "XEM_CHI_TIET":
      state.svChiTiet = action.svXem;
      return {...state}
  

  default:
    return state
  }
}
