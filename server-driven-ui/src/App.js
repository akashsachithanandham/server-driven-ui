import './App.css'
import React, { useState, useEffect } from 'react';
import Renderer from './components/renderer';
import { url } from './constants/misc';

function App() {
  const [res, setRes] = useState(null);

  useEffect(() => {

    // Fetching mock data
    const fetchMockData = async () => {
      try {
        const mock_response = await fetch(url);
        const res = await mock_response.json();
        setRes(res);
      }
      catch (err) {
        console.warn("Failed fetching : ", url);
        console.error(err);
      }
    }

    fetchMockData();
  }, [])

  if (!res) {
    return null;
  }

  return (
    <div className="">
      <Renderer res={res} />
    </div>
  );

}

export default App;
