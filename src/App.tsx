import React from 'react';
import { useState, useEffect } from "react"
import Cards from './components/Cards'
import axios, {AxiosResponse} from 'axios';

function App() {
  const [contents, setContent] = useState([])


  return (
    <div className="container">
      <h1>Hello</h1>
      <Cards />
      <>

      </>
    </div>
  );
}

export default App;
