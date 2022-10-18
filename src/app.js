import React, { useState, useEffect } from 'react';
import Header from './components/header';
import Footer from './components/footer/index';
import Form from './components/form';
import Results from './components/results';
import History from './components/history/index';
import axios from 'axios';
import './app.scss';

// >>>>>>>>>>  STORAGE ARRAY  >>>>>>>>>>>>>> //

const apiStorage = [];


function App() {
  const [requestParams, setrequestParams] = useState({});
  const [data, setData] = useState(null);


  const history = apiStorage;



  const callApi = (requestParams) => {
    apiStorage.push(requestParams.url);
    setrequestParams(requestParams)
  }



  useEffect(() => {
    // console.log('HERE')
    let newData = true;

    // >>>>>>>>>>>>>>>>>  AXIOS CALLS  >>>>>>>>>>>>>>>>>>> //

    const getData = async () => {
      if (requestParams.method === 'GET') {
        await axios.get(requestParams.url).then((response) => {
          if (newData) {
            setData(response);
          }
          // console.log('ressss', response);
        })
      }

      if (requestParams.method === 'POST') {
        await axios.post(requestParams.url, requestParams.body).then((response) => {

          setData(response);
          // console.log('BODY-REQUESTED!!!', response);
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


    getData()

      .catch(console.error);


    return () => newData = false;


  }, [requestParams])



  return (
    <React.Fragment>
      <Header />
      <div id='results'>Request Method: {requestParams.method}</div>
      <div id='results'>URL: {requestParams.url}</div>
      <div id='container'>
        <Form handleApiCall={callApi} />

        <History data={history} />
        <Results data={data} />
      </div>
      <Footer />
    </React.Fragment>
  );

}

export default App;