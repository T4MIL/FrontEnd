import React from 'react'
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useNavigate } from 'react-router-dom';
export const Modal1 = ({ str1, fn }) => {
  // console.log(str1)
  const nav = useNavigate()
  const [show, setShow] = useState(str1);
  const handleClose = () => {
    setShow(false)
    fn(false)
    // nav('/')
  };
  console.log(show)
  // const handleShow = () => setShow(true);
  return (
    <>
      <div className='container'>
        <div className='row'>
          <div className='col-lg-12'>
            {/* <Button variant="primary" onClick={handleShow}>
            Launch demo modal
          </Button> */}

            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Modal heading</Modal.Title>
              </Modal.Header>
              <Modal.Body>Woohoo, you are reading this text in a modal!</Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                  Close
                </Button>
                <Button variant="primary" onClick={handleClose}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </div>
        </div>
      </div>
    </>
  );
}

