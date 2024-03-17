import axios from "axios";
import { GETPRODUCT } from "../types/types";
import { showLoader } from "../../Components/loaderFunc";
import { getCartApi } from "./cartAction";

export const getProductApi = () => {
  return (dispatch) => {
    showLoader(true);
    axios
    .get("http://localhost:7000/api/product/get", JSON.parse(localStorage.getItem('authData')))
    .then((resp) => {
        dispatch({type : GETPRODUCT , resp : resp.data.data});
        showLoader(false);
      })
      .catch((err) => {
        // handle Error
      });
  };
};

export const addProductApi = (formdata) => {
  return (dispatch) => {
    axios
      .post("http://localhost:7000/api/product/add", formdata, JSON.parse(localStorage.getItem('authData')))
      .then((resp) => {
        dispatch(getProductApi());
      })
      .catch((err) => {
        // handle Error
      });
  };
};


export const deleteProductApi = (id) => {
  return(dispatch) => {
    axios.delete(`http://localhost:7000/api/product/delete?id=${id}` , JSON.parse(localStorage.getItem('authData'))).then((resp) => {
        dispatch(getProductApi());
    }).catch((err) => {
      // handle Error
    })
  }
}

export const editProductApi = (id , formData) => {
  formData.id = id
  return (dispatch) => {
    axios.patch(`http://localhost:7000/api/product/update?id=${id}`, formData , JSON.parse(localStorage.getItem('authData'))).then((resp) => {

      dispatch(getProductApi());
      dispatch(getCartApi());
    }).catch((err) => {
       console.log(err)
    })
  }
}