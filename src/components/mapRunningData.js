import React, { useEffect, useState } from "react"
import EditRun from "./editRun"

export default function MapRunningData(props) {
    // const currentRun = props['currentRun']
    // const [currentRun, setCurrentRun] = useState("initial value")
    const [isEditing, setIsEditing] = useState(false)
    const [time, setTime] = useState(0)
    const [distance, setDistance] = useState(0)
    const [calories, setCalories] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:5000/run/${props.currentRun}`).then(response =>
          response.json().then(responseData => {
            setTime(responseData[0].time)
            setDistance(responseData[0].distance)
            setCalories(responseData[0].calories)
          })
        )
      }, [props.currentRun])

    return (
        <div>
            {isEditing ? <EditRun currentRun={props.currentRun} initialTime={time} initialDistance={distance} initialCalories={calories}/> : 
            <div>
              time: {time}
              distance: {distance}
              calories: {calories}
            </div>
            }

            <button className="edit-button" onClick={() => {
              setIsEditing(!isEditing)
              console.log(isEditing)
            }}>edit this run</button>
        </div>
    )
}