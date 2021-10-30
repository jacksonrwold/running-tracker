import React from "react"

export default function mapRunningData() {
    const rawData = [
        { id: 1, distance: "5 miles", time: "1 hour"},
        { id: 2, distance: "6 miles", time: "1 hour"}
    ]

    const thingy = rawData.map(function (run) {
        return (
            <div key={run.id}>
                <div>{run.distance}</div>
                <div>{run.time}</div>
            </div>
        )
    })

    return (
        <div>
            {console.log(thingy)}
            {thingy}
        </div>
    )
}