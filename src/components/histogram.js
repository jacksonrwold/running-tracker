import React from "react"

export default function Histogram(props) {
    function histogramVarHeight(stuff) {        
        const histoMax = []
        
        stuff.forEach(data => {
            histoMax.push(data.distance)
        })

        return Math.max(...histoMax)
    }

    // take max number, that is going to be 100%
    // other numbers should have a % height equal to rawData.distance / max number

    function histogram(stuff) {
        return stuff.rawData.map(function (index) {
            const heightThing = Math.floor(index.distance / histogramVarHeight(stuff.rawData) * 100)
            return (
                <div style={{height: `${heightThing}%`, backgroundColor: "blue", color: "white"}} className="histogram">
                    stuff
                </div>
            )
        })
    }
    
    return (
        <div className="histogramContainer">
            {histogram(props)}
            {/* {histogramVarHeight(props.rawData)} */}
        </div>
    )
} 