import { Col, Row } from "react-bootstrap";
import SideBarComp from "../sidebar/SideBarComp";
import { AiOutlineClose } from 'react-icons/ai'
import { closeImgFunc } from "./showImgFunc";
import { useContext } from "react";
import { loginContext } from "../../App";
import CountDown from "../CountDown";

export const HOC = (Components) => {
  const NewComponent = () => {
    // eslint-disable-next-line
    const login = useContext(loginContext);
    return (
      <>
        <Row className="row g-0">
          <div className="fullproductimg w-100">
           <AiOutlineClose onClick={closeImgFunc} className=" text-4xl text-white" style={{position : 'fixed' , top : '30px' , right : '30px'}}/>
           <div className="bgi"></div>
          </div>
          <Col className="col-2 d-none d-xxl-block">
            <SideBarComp />
          </Col>
          <Col>
            <CountDown login={login}/>
            <Components/>
          </Col>
        </Row>
      </>
    );
  };
  return NewComponent;
};
