import React, { useEffect, useState } from "react"

export default function mapRunningData(props) {
    const data = props.data

    const [currentRun, setCurrentRun] = useState("initial value")
    const [time, setTime] = useState(0)
    const [distance, setDistance] = useState(0)
    const [calories, setCalories] = useState(0)
    
    useEffect(() => {
        fetch("http://localhost:5000/run/").then(response =>
          response.json().then(responseData => {
            setData(responseData)
            console.log(responseData)
          })
        )
      }, [])

    return (
        <div>
            {thingy}
        </div>
    )
}