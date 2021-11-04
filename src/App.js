import React, {useState, useEffect} from "react";
import Histogram from "./components/histogram";
import MapRunningData from "./components/mapRunningData";
import "./styles/main.css"
import "./styles/histogram.css"
import formatRunningData from "./utils/formatRunningData";

export default function App() {
  // const [data, setData] = useState([
  //   {id: 1, distance: 5},
  //   {id: 2, distance: 8},
  //   {id: 3, distance: 7},
  //   {id: 3, distance: 10},
  //   {id: 3, distance: 9},
  //   {id: 3, distance: 13},
  //   {id: 3, distance: 11}
  // ])
  
  useEffect(() => {
    formatRunningData("http://localhost:5000/runs")
  })

  return (
    <div className="app">
      <div className="navbarContainer">
        <div className="navbar">
          temp navbar
        </div>

        {/* <Histogram rawData={data}/> */}
      </div>


      <MapRunningData />
      
    </div>
  );
}
