import React, {useState, useEffect} from "react";
import Histogram from "./components/histogram";
import "./styles/main.css"
import "./styles/histogram.css"
import CreateRunForm from "./components/createRun";
import MapRunningData from "./components/mapRunningData";

export default function App() {
  const [data, setData] = useState([{}])
  const [currentRun, setCurrentRun] = useState(0)
  
  useEffect(() => {
    fetch("http://localhost:5000/runs").then(response =>
      response.json().then(responseData => {
        setData(responseData)
        console.log(responseData)
      })
    )
  }, [])

  return (
    <div className="app">
      <div className="navbarContainer">
        <div className="navbar">
          temp navbar
          <CreateRunForm />
        </div>

        {/* {currentRun == 0 ? <Histogram rawData={data} setCurrentRun={setCurrentRun} />: <Histogram rawData={data}/>} */}
        <Histogram rawData={data} setCurrentRun={setCurrentRun} />
      </div>
      {/* <button onClick={() => {console.log(currentRun)}}>console.log currentRun</button> */}
      {currentRun !== 0 ? <MapRunningData currentRun={currentRun}/> : null}
    </div>
  );
}
