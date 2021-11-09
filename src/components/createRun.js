import React, { useState } from "react"

export default function CreateRunForm() {
    const [time, setTime] = useState("")
    const [distance, setDistance] = useState(0)
    const [calories, setCalories] = useState(0)

    return (
        <div>
            <input
                placeholder="time goes here"
                value={time}
                onChange={e => setTime(e.target.value)}
            />
            <input
                placeholder="distance goes here"
                value={distance}
                onChange={e => setDistance(e.target.value)}
            />
            <input
                placeholder="calories goes here"
                value={calories}
                onChange={e => setCalories(e.target.value)}
            />
            <button onClick={async () => {
                const run = {time, distance, calories}
                const response = await fetch("http://localhost:5000/runs", {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'cors'
                    },
                    body: JSON.stringify(run)
                })

                if (response.ok) {
                    console.log("response worked")
                }
            }}>Submit</button>
        </div>
    )
}