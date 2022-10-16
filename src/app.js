import React, { useState, useEffect } from 'react';
//here
import './app.scss';

import Header from './components/header';
import Footer from './components/footer/index';
import Form from './components/form';
import Results from './components/results';
import axios from 'axios';




function App() {
  const [data, setData] = useState(null);
  const [requestParams, setrequestParams] = useState({});



  const callApi = (requestParams) => {
    setrequestParams(requestParams)
  }
  useEffect(() => {

    const getData = async () => {
      if (requestParams.method === 'GET') {
        await axios.get(requestParams.url).then((response) => {
          setData(response);
          console.log('ressss', response);
        })
      }

      if (requestParams.method === 'POST') {
        await axios.post(requestParams.url, requestParams.body).then((response) => {

          setData(response);
          console.log('BODY-REQUESTED!!!', response);
        })
      }

      if (requestParams.method === 'PUT') {
        await axios.put(requestParams.url).then((response) => {
          setData(response);
          // console.log('ressssss', response);
        })
      }

      if (requestParams.method === 'DELETE') {
        await axios.delete(requestParams.url).then((response) => {
          setData(response);
          // console.log('ressssss', response);
        })
      }
    }
    if (requestParams.method !== null) {
      // console.log('METHOD NULL', requestParams)
      getData();
    }
  }, [requestParams])




  return (
    <React.Fragment>
      <Header />
      <div id='results'>Request Method: {requestParams.method}</div>
      <div id='results'>URL: {requestParams.url}</div>
      <div id='container'>
        <Form handleApiCall={callApi} />

        <Results data={data} />
      </div>

      <Footer />
    </React.Fragment>
  );

}

export default App;