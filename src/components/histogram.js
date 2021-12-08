import React from "react"

export default function Histogram(props) {
    function histogramVarHeight(dataArray, dataKey) {        
        const histoMax = []

        dataArray.forEach(data => {
            histoMax.push(data[dataKey])
        })

        return Math.max(...histoMax)
    }

    // take max number, that is going to be 100%
    // other numbers should have a % height equal to rawData.distance / max number

    function histogram(dataArray, dataKey) {
        return dataArray.map(function (index) {
            const heightThing = Math.floor(index[dataKey] / histogramVarHeight(dataArray, dataKey) * 100)
            return (
                <button onClick={() => {
                    props.setCurrentRun(index.id)
                }} key={index.id} style={{height: `${heightThing}%`, backgroundColor: "blue", color: "white"}} className="histogram">
                    {index[dataKey]}
                </button>
            )
        })
    }

    // function histogram(stuff) {
    //     const data = stuff.rawData
    //     return data.map(function (index) {
    //         const heightThing = Math.floor(index.distance / histogramVarHeight(data) * 100)
    //         return (
    //             <button onClick={() => {
    //                 props.setCurrentRun(index.id)
    //             }} key={index.id} style={{height: `${heightThing}%`, backgroundColor: "blue", color: "white"}} className="histogram">
    //                 {index.distance}
    //             </button>
    //         )
    //     })
    // }
    
    return (
        <div className="histogramContainer">
            {histogram(props.rawData, props.dataKey)}
        </div>
    )
} 