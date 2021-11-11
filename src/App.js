import React, {useState, useEffect} from "react";
import Histogram from "./components/histogram";
import "./styles/main.css"
import "./styles/histogram.css"
import CreateRunForm from "./components/createRun";
import MapRunningData from "./components/mapRunningData";

export default function App() {
  const [reload, triggerReload] = useState(false)
  const [data, setData] = useState([{}])
  const [currentRun, setCurrentRun] = useState(0)
  
  useEffect(() => {
    fetch("http://localhost:5000/runs").then(response =>
      response.json().then(responseData => {
        setData(responseData)
      })
    )
  }, [reload])

  return (
    <div className="app">
      <div className="navbarContainer">
        <div className="navbar">
          temp navbar
          <CreateRunForm />
        </div>

        <Histogram rawData={data} setCurrentRun={setCurrentRun} />
      </div>
      {currentRun !== 0 ? <MapRunningData reload={[reload, triggerReload]} currentRun={currentRun}/> : null}
    </div>
  );
}
