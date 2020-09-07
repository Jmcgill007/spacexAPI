import React from 'react'

export default function LaunchItem(props) {
    const {
        flight_number,
        launch_date_local, 
        launch_success,
        mission_name,
        rocket
    } = props.launch;
    
    return (
        <div className="card card-body mb3">
            <div className="row">
                <div className="col-md-9">
                    <h4>{mission_name}</h4>
                    <p>Date: {launch_date_local}</p>
                </div>
                <div className="col-md-3">
                    <button className="btn btn-secondary">Launch Details</button>
                </div>
            </div>
            test
        </div>
    )
}