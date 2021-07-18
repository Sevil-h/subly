import React from 'react';
import { useState, useEffect } from "react"
import Cards from './components/Cards'
import axios, {AxiosResponse} from 'axios';

//
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
  const [contents, setContents] = useState<IState['contents']>([]);

  // Fetching Cards from URL with axios

    useEffect(() => {
    axios
    .get('https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b')
    .then((response: AxiosResponse) => {
      setContents(response.data['media'])
    })
  }, [])

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
