import React from 'react';
import { useEffect } from "react"


function App() {

// Fetching API
  useEffect(() => {
      const url = "https://run.mocky.io/v3/a811c0e9-adae-4554-9694-173aa23bc38b";

      const fetchData = async () => {
        try {
          const response = await fetch(url);
          const json = await response.json();
          const data = json['media'].forEach((content:any) => {
            console.log(content)
          });
          return data;
        } catch (error) {
          console.log("error", error);
        }
      };

      fetchData();
  }, []);

  return (
    <div className="container">
      <h1>Hello</h1>
    </div>
  );
}

export default App;
