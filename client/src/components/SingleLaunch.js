import React, { Component, Fragment } from 'react'
import { Query } from '@apollo/client/react/components';
import { gql } from '@apollo/client'
import  { Link } from 'react-router-dom'
import classNames from 'classname'



const LAUNCH_QUERY = gql`
    query($flight_number: Int!){
        launch(flight_number: $flight_number) {
            flight_number
            mission_name
            launch_year
            launch_success
            launch_date_local
            rocket {
                rocket_id
                rocket_name
                launch_year
            }
              links {
                video_link
                flickr_images
            }
        }
    }
`;

class Launch extends Component {
    
    render () {
        let { flight_number } = this.props.match.params;
        flight_number = parseInt(flight_number);
        return (
            <Fragment>
             
                <Query query={LAUNCH_QUERY} variables={{flight_number: flight_number}}>
                    {
                        ({ loading, error, data }) => { 
                            if(loading) return <h3>Loading...</h3>;
                            if(error) return <h4>Ooops! There was an Error</h4>;
                            if(data) {
                                console.log(data)
                                const { flight_number,
                                        mission_name,
                                        launch_year,
                                        launch_success,
                                        launch_date_local,
                                        links,
                                        rocket
                                } = data.launch;  
                                const link = links.video_link.split('watch?v=').join('embed/');
                                return ( 
                                <div>    
                                    <h1 className="display-4 my3">
                                        <span text="text-dark">Mission:</span>{mission_name}
                                    </h1>
                                    <h4 className="mb-3"> Launch Details:</h4>
                                 
                                    <Link to="/" className="btn btn-secondary">Back</Link>
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
                                        Rocket: {rocket.rocket_name}
                                        </li>
                                    </ul>
                                    <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }} >
                                        <iframe width="660" height="400" 
                                        src={link}
                                        frameBorder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" 
                                        allowFullScreen></iframe>
                                    </div>
                                    {links.flickr_images.map((image,index) =>(
                                        <div key={index}>
                                            <span  className="card border-dark mb-3">
                                                <img style={{height: "800px", display: "block" }} src={image} /> 
                                            </span>
                                        </div>   
                                    ))}
                                </div>)
                            }
                        }
                    } 
                </Query>
            </Fragment>
        )
    }
}
export default Launch