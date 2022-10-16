import React, { useState, useReducer } from 'react';
import './form.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

let apiStorage = [];



const appState = {
  method: null,
  url: '',
  body: null
}

// const onBodyChange = (e) => {
//   console.log('BOOOOOOODDDDDYYYY::', e)
//   // e.preventDefault();
//   if (e.body !== null) {
//     return e.body
//   }

// }
// const onMethodChange = (e) => {
//   if (e.method === "GET") {
//     e.body = null;
//   }
//   return e.method
// }



const reducer = (state, action) => {
  console.log('DID WE MAKE IT??', action)
  switch (action.type) {
    case 'method':
      return appState.method = action.method;
    case 'body':
      return appState.body = action.body;
    case 'url':
      return appState.url = action.url;
    default:
      return state;
  }
}



export default function Form(props) {
  const [show, setShow] = useState(false);
  const [value, dispatch] = useReducer(reducer, appState);
  console.log('What is Value???::', value)

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const handleSubmit = e => {
    e.preventDefault();
    console.log('RE-METHOD::', appState)

    const formData = {
      method: appState.method,
      url: appState.url,
      body: appState.body
    };

    props.handleApiCall(formData);


    if (appState.url !== null) {
      apiStorage.push(appState.url);
    }
    let histroyStr = JSON.stringify(apiStorage);
    localStorage.setItem('results', histroyStr);





  }




  const handleURL = (e) => {
    console.log('URL-CHANGE', e.target.value)
    dispatch({ type: "url", url: e.target.value });
  };

  const handleMethod = (e) => {
    console.log('Meth-CHANGE', e.target.value)
    dispatch({ type: "method", method: e.target.value });
  };

  const handleBody = (e) => {
    console.log('BODY"S::::', e.target.value)
    dispatch({ type: "body", body: e.target.value });
  };



  const saved = JSON.parse(localStorage.getItem('results'));



  return (
    <>
      <div id='container'>
        <form onSubmit={handleSubmit}>
          <label >
            <span id='URL'>URL: </span>
            <input name='url' type='text' onChange={(e) => handleURL(e)} />
            <button id='form-button' type="submit">GO!</button>
          </label>
          <div className="methods">
            <button id="get" onClick={(e) => handleMethod(e)} value='GET' >GET</button >
            <button id="post" onClick={(e) => handleMethod(e)} value='POST'>POST</button>
            <button id="put" onClick={(e) => handleMethod(e)} value='PUT'>PUT</button >
            <button id="delete" onClick={(e) => handleMethod(e)} value='DELETE'>DELETE</button >
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
            <textarea id='json' onChange={(e) => handleBody(e)} />
          </div>

        </div>
      </div>

    </>

  )

}




