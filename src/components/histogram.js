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
                <div style={{backgroundColor: "blue", height: `${heightThing}%`, color: "white"}}>
                    stuff
                </div>
            )
        })
    }
    
    return (
        <div style={{display: "flex", alignItems: "flex-end", justifyContent:"space-between", height: "200px", width: "300px"}} className="histogramContainer">
            {histogram(props)}
            {/* {histogramVarHeight(props.rawData)} */}
        </div>
    )
} 