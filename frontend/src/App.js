import "./App.css";
import { BrowserRouter } from "react-router-dom";
import NavbarComp from "./Components/NavbarComp";
import { createContext, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
// import { getProductApi } from "./redux/actions/productAction";
import { getCartApi } from "./redux/actions/cartAction";
import { completedOrderApi, getorderApi } from "./redux/actions/orderAction";
import ProtectedRoute from "./ProtectedRoute/ProtectedRoute";

export const loginContext = createContext();

function App() {
  const dispatch = useDispatch();
  const state = useSelector((state) => state);
  const [login, setlogin] = useState(localStorage.getItem("user"));
  
  useEffect(() => {
    if (login) {
      // dispatch(getProductApi());
      dispatch(getCartApi());
      dispatch(getorderApi());
      dispatch(completedOrderApi());
    }
    // eslint-disable-next-line
  }, [login]);

  useEffect(() => {
    setlogin(localStorage.getItem("user"));
  }, [state]);

  return (
    <>
      <BrowserRouter>
        <loginContext.Provider value={{login , setlogin}}>
          <NavbarComp />
          <ProtectedRoute/>
        </loginContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;