import React, { useEffect, useState } from "react"

export default function MapRunningData(props) {
    // const currentRun = props['currentRun']
    // const [currentRun, setCurrentRun] = useState("initial value")
    const [time, setTime] = useState(0)
    const [distance, setDistance] = useState(0)
    const [calories, setCalories] = useState(0)

    useEffect(() => {
        fetch(`http://localhost:5000/run/${props.currentRun}`).then(response =>
          response.json().then(responseData => {
            console.log(responseData)
          })
        )
      }, [props.currentRun])

    return (
        <div>
            hi
        </div>
    )
}