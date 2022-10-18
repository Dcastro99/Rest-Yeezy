import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import './history.scss';



export default function History(props) {
  const [show, setShow] = useState(false);
  const handleClose = () => { setShow(false) };
  const handleShow = () => { setShow(true) };


  // >>>>>>>>>>>>>>    LOCAL STORAGE   >>>>>>>>>>>>>>>>>> //

  let histroyStr = JSON.stringify(props.data);
  localStorage.setItem('results', histroyStr);

  const saved = JSON.parse(localStorage.getItem('results'));



  return (
    <>
      <div id="modalContainer">

        {/* >>>>>>>>>>   MODAL  >>>>>>>>>>>>*/}

        <Button id='modalButton' variant="primary" onClick={handleShow}>
          History
        </Button>
        <Modal id='modal'
          show={show}
          onHide={handleClose}
        >
          <Modal.Header >
            <Modal.Title id='modalTitle'>URL History</Modal.Title>
          </Modal.Header>
          {saved ? saved.map((x, key) =>
          (
            <Modal.Body>
              <h4 key={key}> - {x}</h4>
            </Modal.Body>
          )
          ) : undefined}
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </div>
    </>

  )

}