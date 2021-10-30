import Histogram from "./components/histogram";
import MapRunningData from "./components/mapRunningData";

function App() {
  const rawData = [
    {id: 1, distance: "5"},
    {id: 2, distance: "8"},
    {id: 3, distance: "13"}
  ]
  
  return (
    <div className="App">
      hi

      <MapRunningData />
      <Histogram rawData={rawData}/>
    </div>
  );
}

export default App;
