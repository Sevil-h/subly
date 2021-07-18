import React from 'react';
import { useState, useEffect } from "react"
import Cards from './components/Cards'
import axios, {AxiosResponse} from 'axios';

interface IState {
  contents: {
    id: number,
    name: string,
    cover: string,
    languages: string[],
    status: string,
    createdAt: string,
    updatedAt: string,
    errorMessage?: string
  }[]
}

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
