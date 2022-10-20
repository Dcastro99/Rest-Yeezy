import React, { useReducer } from 'react';
import './form.scss';




// >>>>>>>>> APP STATE >>>>>>>>>> //

const appState = {
  method: '',
  url: undefined,
  body: undefined
}


// >>>>>>>>>>>>   REDUCER FUNCTION   >>>>>>>>>>>>>> //

const reducer = (state, action) => {

  switch (action.type) {
    case 'method':
      // console.log('Method case was Hit!', state)
      return appState.method = action.method
    case 'body':
      return appState.body = action.body;
    case 'url':
      return appState.url = action.url;
    default:
      // console.log('default got hit>>>')
      return state;
  }
}


export default function Form(props) {
  const [state, dispatch] = useReducer(reducer, appState);
  console.log('state', state)


  // >>>>>>>>>>>>  HANDLE SUBMIT FUNCTION  >>>>>>>>>>>>>> //

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      method: appState.method,
      url: appState.url,
      body: appState.body,
    }

    props.handleApiCall(formData);
  }


  // >>>>>>>>>>>>> HANDLER FUNCTIONS >>>>>>>>>>>>>>>>> //

  const handleURL = (e) => {
    e.preventDefault();
    dispatch({ type: "url", url: e.target.value });
  };

  const handleMethod = (e) => {
    e.preventDefault();
    // console.log('Meth-CHANGE', e.target.value)
    dispatch({ type: "method", method: e.target.value });
    // forceUpdate();
  };

  const handleBody = (e) => {
    e.preventDefault();
    // console.log('BODY"S::::', e.target.value)
    dispatch({ type: "body", body: e.target.value });
  };


  return (
    <>

      <div id='container'>

        {/* >>>>>>>>>  FORM  >>>>>>>>>>>>*/}

        <form onSubmit={handleSubmit}>
          <label >
            <span id='URL'>URL: </span>
            <input name='url' type='text' onChange={(e) => handleURL(e)} />
            <button id='form-button' type="submit">GO!</button>
          </label>


          {/* >>>>>>>  BUTTONS >>>>>>>>>>>>*/}

          <div className="methods">
            <button id="get" onClick={(e) => handleMethod(e)} value='GET' >GET</button >
            <button id="post" onClick={(e) => handleMethod(e)} value='POST'>POST</button>
            <button id="put" onClick={(e) => handleMethod(e)} value='PUT'>PUT</button >
            <button id="delete" onClick={(e) => handleMethod(e)} value='DELETE'>DELETE</button >
          </div>
        </form>
        <div id='modalMain'>


          {/* >>>>>>>>>>>  JSON TEXT AREA  >>>>>>>>>>>>*/}

          <div id='jsonLable'>
            <textarea id='json' onChange={(e) => handleBody(e)} />
          </div>

        </div>
      </div>

    </>

  )

}




