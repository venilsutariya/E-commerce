import React from 'react';
import { HOC } from '../HOC/HOC';
import {Form , Row , Col } from 'react-bootstrap';
import { showImgFunc } from '../HOC/showImgFunc';

function ProfileComp() {

  const userObj = JSON.parse(localStorage.getItem('user'));

  return (
    <>
      <h2 className='my-3'>Your Profile</h2>
      <div className='row row-cols-1 row-cols-md-2 g-0'>
        <div className='col'>
          <img onClick={() => showImgFunc(userObj.userImage)} src={userObj.userImage} alt="" style={{height : '700px' , width : '100%' , objectFit : 'cover'}}/>
        </div>
        <div className='col p-5 bg-gray-200'>
        <Form>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalEmail">
        <Form.Label column sm={2}>
          UserName
        </Form.Label>
        <Col sm={10}>
          <Form.Control disabled className='profileinput shadow-sm' value={userObj.userName} type="email" placeholder="Email" />
        </Col>
      </Form.Group>

      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword">
        <Form.Label column sm={2}>
          Email
        </Form.Label>
        <Col sm={10}>
          <Form.Control readOnly value={userObj.email} className='profileinput shadow-sm' type="email" placeholder="Password" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword2">
        <Form.Label column sm={2}>
        qualification
        </Form.Label>
        <Col sm={10}>
          <Form.Control readOnly value={userObj.qualification} className='profileinput shadow-sm' type="text" placeholder="" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword3">
        <Form.Label column sm={2}>
         From Where
        </Form.Label>
        <Col sm={10}>
          <Form.Control readOnly value={`${userObj.city} , ${userObj.state} , ${userObj.country}`} className='profileinput shadow-sm' type="text" placeholder="" />
        </Col>
      </Form.Group>
      <fieldset>
        <Form.Group as={Row} className="mb-3">
          <Form.Label as="legend" column sm={2}>
            Gender
          </Form.Label>
          <Col sm={10}>
            <Form.Check
            className='mt-2'
              type="radio"
              label="Male"
              name="formHorizontalRadios"
              id="formHorizontalRadios1"
              checked
              readOnly
            />
          </Col>
        </Form.Group>
      </fieldset>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword4">
        <Form.Label column sm={2}>
        postalCode
        </Form.Label>
        <Col sm={10}>
          <Form.Control readOnly value={` ${userObj.postalCode}`} className='profileinput shadow-sm' type="text" placeholder="" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword5">
        <Form.Label column sm={2}>
        address
        </Form.Label>
        <Col sm={10}>
          <Form.Control readOnly value={`${userObj.address}`} className='profileinput shadow-sm' type="text" placeholder="" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword6">
        <Form.Label column sm={2}>
        officeContact
        </Form.Label>
        <Col sm={10}>
          <Form.Control readOnly value={`${userObj.officeContact}`} className='profileinput shadow-sm' type="text" placeholder="" />
        </Col>
      </Form.Group>
      <Form.Group as={Row} className="mb-3" controlId="formHorizontalPassword6">
        <Form.Label column sm={2}>
        birthDate
        </Form.Label>
        <Col sm={10}>
          <Form.Control readOnly value={`${userObj.birthDate}`} className='profileinput shadow-sm' type="text" placeholder="" />
        </Col>
      </Form.Group>
    </Form>
        </div>
      </div>
    </>
  )
}

export default HOC(ProfileComp);
