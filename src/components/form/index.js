import React, { useState, useEffect } from 'react';
import axios from 'axios';

import './form.scss';

/**Yo figure it OUT!!!*/
export default function Form(props) {
  const [url, setUrl] = useState('');
  const [method, setMethod] = useState(null);
  const [count, setCount] = useState('');
  const [results, setResults] = useState([]);
  // const buttonRef = useRef(null);

  // const handleCLick = e => {
  //   buttonRef.current.disabled = true;
  //   setResults([]);
  //   console.log('button clicked');
  // }

  // const handleReset = e => {
  //   buttonRef.current.diabled = false;
  // }

  // useEffect(() => {
  //   const getData = async () => {
  //     const response = await fetch(url, {
  //       method: "POST",

  //       body: JSON.stringify({ data: "value" }),
  //     });
  //     const json = await response.json();
  //     console.log('okokok', json);

  //     console.log('Ruuuuuu>>>::', response);
  //   };
  //   getData();
  // });

  useEffect(() => {
    const getData = async () => {
      // console.log('MYMETH::', method);
      const data = {
        method: method,
        url: url,
        body: JSON.stringify({ data: "value" })
      }
      const response = await axios(data);
      console.log('RESSSS::', response);
      setMethod(response.config.method)
      setCount(response.data.count);
      setResults(response.data.results)
    }
    getData();

  })


  const handleSubmit = e => {
    e.preventDefault();
    // handleCLick()
    const formData = {
      count: count,
      results: results,
      method: method,
      url: url,
    };

    props.handleApiCall(formData);
  }

  const onUrlChange = e => {
    e.preventDefault();
    setUrl(e.target.value)
    console.log('POOP', e.target.value);
  }
  const onMethodChange = e => {

    e.preventDefault();
    setMethod(e.target.value)
    console.log('METHOD', e.target.value);
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <label >
          <span id='URL'>URL: </span>
          <input name='url' type='text' onChange={(e) => onUrlChange(e)} />
          <button id='form-button' type="submit">GO!</button>
        </label>
        <label className="methods">
          <button onClick={(e) => onMethodChange(e)} value='GET' >GET</button >
          <button id="post" onClick={(e) => onMethodChange(e)} value='POST'>POST</button>
          <button id="put" onClick={(e) => onMethodChange(e)} value='PUT'>PUT</button >
          <button id="delete" onClick={(e) => onMethodChange(e)} value='DELETE'>DELETE</button >


        </label>
        {/* <button onClick={handleReset}>Reset</button> */}
      </form>

    </>

  )

}

