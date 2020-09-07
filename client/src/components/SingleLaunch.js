import React, { Component, Fragment } from 'react'
import { Query } from '@apollo/client/react/components';
import { gql } from '@apollo/client'
import  { Link } from 'react-router-dom'
import classNames from 'classname'

const LAUNCH_QUERY = gql`
    query launchQuery($flight_number: Int!) {
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket {
                rocket_id
                rocket_name
                
              }
        }
    }
`

class Launch extends Component {
    
    render () {
        let { flight_number } = Number(this.props.match.params )
        return (
            <Fragment>
                <Query query ={LAUNCH_QUERY} variables={(flight_number)}>
                    {
                        ({ loading, error, data }) => {
                            console.log(data)
                            // const { flight_number,
                            //     mission_name,
                            //     launch_year,
                            //     launch_success,
                            //     launch_date_local,
                            //     rocket:{
                            //         rocket_id,
                            //         rocket_name,
                            //         rocket_type,
                            //     }
                            // } = data.launch;
                            if(loading) return <h3>Loading...</h3>;
                            if(error) return <h4>There was an Error</h4>;
                            else if(data) { 
                                return <div>
                                    {/* <h1 className="display-4 my3">
                                        <span text="text-dark">Mission:</span> {mission_name}
                                    </h1>
                                    <h4 className="mb-3"> Launch Details:</h4>
                                    <ul className="list-group"> 
                                        <li className="list-group-item"> 
                                            Flight Number: {flight_number}
                                        </li>
                                        <li className="list-group-item"> 
                                            Launch Year: {launch_year}
                                        </li>
                                        <li className="list-group-item"> 
                                            Launch Successful: 
                                            <span className={
                                            classNames({
                                                "text-success": launch_success,
                                                "text-danger" : !launch_success
                                            })}> 
                                            {launch_success? 'Yes': 'No'}
                                            </span>
                                        </li>
                                        <li className="list-group-item"> 
                                            Launch Date: {launch_date_local}
                                        </li>
                                        <li className="list-group-item"> 
                                            Rocket: {rocket_name}
                                        </li>
                                    </ul> */}
                                </div>;
                            }
                        }
                    } 
                </Query>
            </Fragment>
        )
    }
}
export default Launch