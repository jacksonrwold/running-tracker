import React, { useState } from "react"

export default function CreateRunForm(props) {
    const [time, setTime] = useState(props.initialValues.time)
    const [distance, setDistance] = useState(props.initialValues.distance)
    const [calories, setCalories] = useState(props.initialValues.calories)

    return (
        <div>
            <label>Time:</label>
            <input
                placeholder="time goes here"
                value={time}
                onChange={e => setTime(e.target.value)}
            />
            <label>Distance:</label>
            <input
                placeholder="distance goes here"
                value={distance}
                onChange={e => setDistance(e.target.value)}
            />
            <label>Calories:</label>
            <input
                placeholder="calories goes here"
                value={calories}
                onChange={e => setCalories(e.target.value)}
            />
            <button onClick={async () => {
                const run = {time, distance, calories}
                const response = await fetch(`http://localhost:5000/run/${props.currentRun}`, {
                    method: 'PUT',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'cors'
                    },
                    body: JSON.stringify(run)
                })

                if (response.ok) {
                    props.triggerReload[1](!props.triggerReload[0])
                }
            }}>Submit</button>
        </div>
    )
}