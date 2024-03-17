import axios from "axios";
import { GETUSER } from "../types/types";

export const getUserToApi = (authValue) => {
  const authData = {
    headers : {
        Authorization : `Bearer ${authValue.authToken}`,
    }
  }
  localStorage.setItem('authData' , JSON.stringify(authData));
  return (dispatch) => {
    axios.get('http://localhost:7000/api/user/getUser' , authData).then(async(resp) => {
        await dispatch({type : GETUSER , findedUser : resp.data.data});
    }).catch((err) => {
        // handle Error
    })
  };
};
