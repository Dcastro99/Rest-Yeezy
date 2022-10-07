import React, { useState } from 'react';

import './app.scss';

import Header from './components/header';
import Footer from './components/footer/index';
import Form from './components/form';
import Results from './components/results';


function App() {
  const [data, setData] = useState(null);
  const [requestParams, setrequestParams] = useState({});

  const callApi = (requestParams) => {
    // mock output 
    const payload = {
      count: 2,
      results: [
        { name: 'fake thing 1', url: 'http://fakethings.com/1' },
        { name: 'fake thing 2', url: 'http://fakethings.com/2' },
      ],
    };
    setData(payload);
    setrequestParams(requestParams)
  }


  return (
    <React.Fragment>
      <Header />
      <div id='results'>Request Method: {requestParams.method}</div>
      <div id='results'>URL: {requestParams.url}</div>
      <Form handleApiCall={callApi} />
      <Results data={data} />
      <Footer />
    </React.Fragment>
  );

}

export default App;