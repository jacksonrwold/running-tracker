import React from "react"

export default function CreateRunForm(props) {
    return (
        <div>
            <button onClick={async () => {
                const response = await fetch(`http://localhost:5000/run/${props.currentRun}`, {
                    method: 'DELETE',
                    headers: {
                        'Content-Type': 'application/json',
                        'Access-Control-Allow-Origin': 'cors'
                    }
                })

                if (response.ok) {
                    console.log("okay")
                }
            }}>Delete</button>
        </div>
    )
}