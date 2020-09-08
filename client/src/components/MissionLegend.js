import React from 'react'

export default function MissionLegend(props) {
    
    return(
        <div className="my-3">
            <p>
                 <span className="px-3 mr-2 bg-success"></span> = Success 
            </p>
            <p>
                  <span className="px-3 mr-2 bg-danger"></span> = Failed
            </p>
        </div>
    )
}