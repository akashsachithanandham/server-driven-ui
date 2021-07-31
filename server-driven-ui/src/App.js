import React, { useState, useEffect } from 'react';
import Renderer from './components/renderer';

function App() {

  const [res, setRes] = useState(null);
  const url = 'https://run.mocky.io/v3/96f46edc-59b2-4653-a87a-c1cb06225567';

  useEffect(() => {

    //Fetching Data 
    fetch(url)
      .then(res => res.json())
      .then(res => {
        setRes(res);
      })
      .catch(err => {
        console.warn("API Failed ");
      })

  }, [])

  if (!res) {
    return (
      <h1>API Failed</h1>
    )
  }

  return (
    <div className="">
      <Renderer res={res} />
    </div>
  );

}

export default App;
