import React, { useState } from 'react';
import './form.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

let apiStorage = [];



export default function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState(null);
  const [body, setBody] = useState(null);
  const [show, setShow] = useState(false);


  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSubmit = e => {
    e.preventDefault();

    const formData = {

      method: method,
      url: url,
      body: body
    };

    props.handleApiCall(formData);
    if (url !== null) {
      apiStorage.push(url);
    }

    let histroyStr = JSON.stringify(apiStorage);
    localStorage.setItem('results', histroyStr);

  }



  const onUrlChange = e => {
    e.preventDefault();
    setUrl(e.target.value)



    // console.log('POOP', e.target.value);
  }

  const onMethodChange = e => {
    e.preventDefault();

    setMethod(e.target.value)

    // console.log('METHOD', e.target.value);
  }

  const onBodyChange = e => {
    e.preventDefault();

    setBody(e.target.value)

    console.log('BODY', e.target.value);
  }

  const saved = JSON.parse(localStorage.getItem('results'));



  return (
    <>
      <div id='container'>
        <form onSubmit={handleSubmit}>
          <label >
            <span id='URL'>URL: </span>
            <input name='url' type='text' onChange={(e) => onUrlChange(e)} />
            <button id='form-button' type="submit">GO!</button>
          </label>
          <div className="methods">
            <button id="get" onClick={(e) => onMethodChange(e)} value='GET' >GET</button >
            <button id="post" onClick={(e) => onMethodChange(e)} value='POST'>POST</button>
            <button id="put" onClick={(e) => onMethodChange(e)} value='PUT'>PUT</button >
            <button id="delete" onClick={(e) => onMethodChange(e)} value='DELETE'>DELETE</button >
          </div>
        </form>
        <div id='modalMain'>
          <div id="modalContainer">
            <Button id='modalButton' variant="primary" onClick={handleShow}>
              History
            </Button>
            <Modal classname='modal'
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




          <div id='jsonLable'>
            <textarea id='json' onChange={(e) => onBodyChange(e)} />
          </div>

        </div>
      </div>

    </>

  )

}




