import React, {useState, useEffect} from "react";
import Histogram from "./components/histogram";
import "./styles/main.css"
import "./styles/histogram.css"

export default function App() {
  const [data, setData] = useState([
    {id: 1, distance: 10}
  ])
  
  useEffect(() => {
    fetch("http://localhost:5000/runs").then(response =>
      response.json().then(responseData => {
        setData(responseData)
      })
    )
  }, [data])

  return (
    <div className="app">
      <div className="navbarContainer">
        <div className="navbar">
          temp navbar
        </div>

        <Histogram rawData={data}/>
      </div>
    </div>
  );
}
