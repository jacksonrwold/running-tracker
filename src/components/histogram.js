import React from "react"

export default function Histogram(props) {
    function histogramVarHeight(stuff) {        
        const histoMax = []
        
        stuff.forEach(data => {
            histoMax.push(data.distance)
        }) 

        return Math.max(...histoMax)
    }

    // const histogram = rawData.map(function () {
    //     return (
    //         <div>hello</div>
    //     )
    // })
    
    return (
        <div>
            {/* {histogram} */}
            {histogramVarHeight(props.rawData)}
        </div>
    )
} 