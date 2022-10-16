import React from 'react';

import './results.scss';

export default function Results(props) {
  return (
    <section>
      <div className='pre-box'>
        {/* <pre className='pre'>{props.data.headers ? JSON.stringify(props.data.headers, undefined, 2) : null}</pre> */}
        <pre className='pre'>{props.data ? JSON.stringify(props.data, undefined, 2) : null}</pre>
        {/* {console.log('PROPS!!', { props: props.data.data })} */}

      </div>
    </section>
  )
}

